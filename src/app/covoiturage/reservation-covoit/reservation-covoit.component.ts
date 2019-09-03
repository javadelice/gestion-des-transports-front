import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { AnnonceCovoitResa } from 'src/app/models/AnnonceCovoitResa';
import { CovoitResaService } from '../covoit-resa/covoit-resa.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Itineraire} from '../../models/Itineraire';

@Component({
  selector: 'app-reservation-covoit',
  templateUrl: './reservation-covoit.component.html',
  styleUrls: ['./reservation-covoit.component.css']
})
export class ReservationCovoitComponent implements OnInit {

  annonces: AnnonceCovoitResa[];
  error: string;
  date: string;
  lieuDepart: string;
  lieuArrivee: string;
  itineraire: Itineraire = undefined;
  headElements = ['Date / heure', 'Départ', 'Destination', 'Véhicule', 'Chauffeur', 'Places disponibles', ''];
  private backBoolean: boolean;
  private adresseBackEndErrors: any;

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

  selectionLieu() {
      this.srv.getReservationsCovoit(this.date, this.lieuDepart, this.lieuArrivee)
        .subscribe(annonces => this.annonces = annonces);
  }

  afficherItineraire() {

    if ((this.lieuDepart !== undefined && this.lieuDepart !== '')  && (this.lieuArrivee !== undefined && this.lieuArrivee !== '')) {
      this.srv.getItineraire(this.lieuDepart, this.lieuArrivee).subscribe(
        (itineraire) => {
          this.itineraire = itineraire;
          this.backBoolean = false;
        },
        (respError: HttpErrorResponse) => {
          this.adresseBackEndErrors = respError.error;
          this.backBoolean = true;
          if (this.itineraire !== undefined) {
            this.itineraire.distance = undefined;
            this.itineraire.duree = undefined;
          }

        }
      );
    }
  }


  confirmBooking(annonce: AnnonceCovoitResa) {
    this.srv.creerResaCovoit(annonce).subscribe(
      success => {
        // en cas de succes,fermeture de la fenetre modale
        this.modalService.dismissAll();
        // en cas de succes, redirection vers la page /collaborateur/reservations/covoit
        return this._router.navigate(['/reservations']);
      },
      err => {
        this.error = err.error;
        this.annonces.map(annonceSelected => {
          if (annonceSelected === annonce) {
            annonceSelected.nbPlacesLibres = annonceSelected.nbPlacesLibres - 1;
          }
          return annonceSelected;
        });
      });
  }




}
