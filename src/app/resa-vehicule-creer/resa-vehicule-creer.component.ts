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

  vehicules: Vehicule[] = Array();
  infoResa = new InfoResa();
  erreur = false;
  currentDate = new Date();

  constructor(private dataSrv: VehiculeResaService) {
  }

  delete() {
    return this.erreur = false;
  }

  listerVehicules() {
    if (this.infoResa.dateDepart !== undefined &&
      this.infoResa.heureDepart !== undefined &&
      this.infoResa.minuteDepart !== undefined) {
      this.dataSrv.getListVehiculeForReservation(this.infoResa.dateDepart, this.infoResa.heureDepart, this.infoResa.minuteDepart)
        .subscribe(vehicules => {
          this.vehicules = vehicules;
        });
    }
  }

  creerReservationVehicule(vehicule: Vehicule) {
    this.infoResa.vehiculeSociete = vehicule;
    this.dataSrv.ajouterReservationVehicule(this.infoResa)
      .subscribe(() => {
        this.erreur = false;
        location.reload();
      },
        (respError: HttpErrorResponse) => {
          this.erreur = true;
        });
  }


  ngOnInit() {

  }
}
