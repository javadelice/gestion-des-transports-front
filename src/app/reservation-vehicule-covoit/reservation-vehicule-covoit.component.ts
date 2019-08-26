import { Component, OnInit } from '@angular/core';
import { CovoitResaService } from '../covoiturage/covoit-resa/covoit-resa.service';
import { AnnonceCovoitResa } from '../models/AnnonceCovoitResa';

@Component({
  selector: 'app-reservation-vehicule-covoit',
  templateUrl: './reservation-vehicule-covoit.component.html',
  styleUrls: ['./reservation-vehicule-covoit.component.css']
})
export class ReservationVehiculeCovoitComponent implements OnInit {
  annonces: AnnonceCovoitResa[];
  headElements = ['Date / heure', 'Départ', 'Destination', 'Véhicule', 'Chauffeur', 'Places disponibles', ''];

  constructor(private srv: CovoitResaService) { }

  ngOnInit() {
  }

  selection(){
    this.srv.getReservationsCovoit().subscribe(annonces => {
      this.annonces = annonces;
    });
  }



}
