import { Component, OnInit } from '@angular/core';
import { VehiculeResaService } from './vehicule-resa-service';
import { ResaVehicule } from '../model/ResaVehicule';

@Component({
  selector: 'app-vehicule-resa',
  templateUrl: './vehicule-resa.component.html',
  styleUrls: ['./vehicule-resa.component.css']
})
export class VehiculeResaComponent implements OnInit {

  headElements = ['Date / heure début', 'Date / heure fin', 'Immatriculation', 'Marque', 'Modèle'];

  reservations: ResaVehicule[];
  private _historique: ResaVehicule[] = Array();

  page = 1;
  pageSize = 5;
  collectionSize: number;

  get historique(): ResaVehicule[] {
    return this._historique
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor(private dataSrv: VehiculeResaService) {
  }

  ngOnInit() {
    this.dataSrv.getReservationVehicule().subscribe(reservations => {
      this.reservations = reservations;
    });

    this.dataSrv.getHistorique().subscribe(historique => {
      this._historique = historique;
      this.collectionSize = historique.length;
    });
  }

}
