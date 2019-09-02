import { Component, OnInit } from '@angular/core';
import { ResaVehicule } from '../models/ResaVehicule';
import { VehiculeResaService } from '../services/vehicule-resa-service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {

  reservationsAVenir: ResaVehicule[];
  reservationsPassees: ResaVehicule []= Array();
  collectionSize;

  headElements = ['Date / heure début', 'Date / heure fin', 'Responsable'];

  constructor(private srv: VehiculeResaService) { }

  ngOnInit() {
    this.srv.afficherReservationsAVenir().subscribe(annoncesEnCours => { this.reservationsAVenir = annoncesEnCours; });

    this.srv.afficherReservationsAVenir().subscribe(reservationsPassees => {
    this.reservationsPassees = reservationsPassees;
      this.collectionSize = reservationsPassees.length;
    });
  }

  get resasHisto(): ResaVehicule[] {
    return this.reservationsPassees;
  }

}
