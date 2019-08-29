import { Component, OnInit } from '@angular/core';
import { InfoResa } from '../models/infoResa';
import { VehiculeResaService } from '../vehicule-resa/vehicule-resa-service';
import { HttpErrorResponse } from '@angular/common/http';
import { Vehicule } from '../models/Vehicule';
import { ResaVehicule } from '../models/ResaVehicule';

@Component({
  selector: 'app-resa-vehicule-creer',
  templateUrl: './resa-vehicule-creer.component.html',
  styleUrls: ['./resa-vehicule-creer.component.css']
})
export class ResaVehiculeCreerComponent implements OnInit {

  infosResa: InfoResa[] = Array();
  infoResa = new InfoResa();
  erreur = false;
  dpnb = false;

  constructor(private dataSrv: VehiculeResaService) {
  }

  delete() {
    return this.erreur = false;
  }

  creerReservationVehicule() {
    this.dataSrv.ajouterReservationVehicule(this.infoResa)
      .subscribe(() => {
        this.erreur = false;
        location.reload();
      },
        (respError: HttpErrorResponse) => {
          this.erreur = true;
        });
  }

  indisponible(indisponible: boolean) {
    this.dpnb = false;
  }

  disponible(disponible: boolean) {
    this.dpnb = true;
  }

  ngOnInit() {
    this.dataSrv.getReservationVehicule().subscribe(infosResa => {
      this.infosResa = infosResa;
    });
  }
}
