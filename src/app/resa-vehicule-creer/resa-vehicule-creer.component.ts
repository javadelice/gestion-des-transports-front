import { Component, OnInit } from '@angular/core';
import { InfoResa } from '../models/infoResa';
import { VehiculeResaService } from '../vehicule-resa/vehicule-resa-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-resa-vehicule-creer',
  templateUrl: './resa-vehicule-creer.component.html',
  styleUrls: ['./resa-vehicule-creer.component.css']
})
export class ResaVehiculeCreerComponent implements OnInit {


  infoResa = new InfoResa();
  erreur: boolean = false;

  constructor(private dataSrv: VehiculeResaService) {
   }

   creerReservationVehicule() {
    this.dataSrv.ajouterReservationVehicule(this.infoResa)
    .subscribe( () => { this.erreur = false;
      location.reload();},
      (respError: HttpErrorResponse) => {
        this.erreur = true;
      });
  }

  ngOnInit() {
  }

}
