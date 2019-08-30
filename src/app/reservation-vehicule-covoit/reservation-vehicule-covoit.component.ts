import { Component, OnInit, TemplateRef } from '@angular/core';
import { CovoitResaService } from '../covoiturage/covoit-resa/covoit-resa.service';
import { AnnonceCovoitResa } from '../models/AnnonceCovoitResa';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";

@Component({
  selector: 'app-reservation-vehicule-covoit',
  templateUrl: './reservation-vehicule-covoit.component.html',
  styleUrls: ['./reservation-vehicule-covoit.component.css']
})
export class ReservationVehiculeCovoitComponent implements OnInit {

  annonces: AnnonceCovoitResa[];
  error: string;
  date : string;
  lieuDepart: string;
  lieuArrivee: string;

  headElements = ['Date / heure', 'Départ', 'Destination', 'Véhicule', 'Chauffeur', 'Places disponibles', ''];

  constructor(private srv: CovoitResaService,  private _router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.date = undefined;
    this.lieuArrivee = undefined;
    this.lieuDepart = undefined;
  }

  openModal(modal) {
    this.error = undefined;
    this.modalService.open(modal);
  }



  selection() {
    if(this.date !== undefined && this.lieuDepart !== undefined && this.lieuArrivee !== undefined){
      this.srv.getReservationsCovoit(this.date, this.lieuDepart, this.lieuArrivee)
    .subscribe(annonces => this.annonces = annonces);
    }

  }

  confirmBooking(annonce: AnnonceCovoitResa) {
    this.srv.creerResaCovoit(annonce).subscribe(
      success => {
        //en cas de succes,fermeture de la fenetre modale
        this.modalService.dismissAll();
        //en cas de succes, redirection vers la page /collaborateur/reservations/covoit
        return this._router.navigate(['/reservations']);
      },
      err => {
        this.error = err.error;
        this.annonces.map(annonceSelected => {
          if(annonceSelected === annonce){
            annonceSelected.nbPlacesLibres = annonceSelected.nbPlacesLibres-1;
          }
          return annonceSelected;
        })
      });
  }




}
