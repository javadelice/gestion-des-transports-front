import {Component, OnInit} from '@angular/core';
import {InfoResa} from '../models/infoResa';
import {VehiculeResaService} from '../services/vehicule-resa-service';
import {HttpErrorResponse} from '@angular/common/http';
import {Vehicule} from '../models/Vehicule';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

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
  errors: any;

  constructor(private dataSrv: VehiculeResaService, public modalService: NgbModal, private _router: Router) {
  }

  delete() {
    return this.erreur = false;
  }

  listerVehicules() {
    if ((this.infoResa.dateDepart !== undefined &&
      this.infoResa.heureDepart !== undefined &&
      this.infoResa.minuteDepart !== undefined)
      && (this.infoResa.dateRetour === undefined &&
        this.infoResa.heureRetour === undefined &&
        this.infoResa.minuteRetour === undefined)) {
      this.dataSrv.getListVehiculeForReservation(this.infoResa.dateDepart, this.infoResa.heureDepart, this.infoResa.minuteDepart,
        this.infoResa.dateRetour, this.infoResa.heureRetour, this.infoResa.minuteRetour)
        .subscribe(vehicules => {
          this.vehicules = vehicules;
        });
    }
    if ((this.infoResa.dateDepart !== undefined &&
      this.infoResa.heureDepart !== undefined &&
      this.infoResa.minuteDepart !== undefined)
      && (this.infoResa.dateRetour !== undefined &&
        this.infoResa.heureRetour !== undefined &&
        this.infoResa.minuteRetour !== undefined)) {
      this.dataSrv.getListVehiculeForReservation(this.infoResa.dateDepart, this.infoResa.heureDepart, this.infoResa.minuteDepart,
        this.infoResa.dateRetour, this.infoResa.heureRetour, this.infoResa.minuteRetour)
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
        this.modalService.dismissAll();
        this._router.navigate(['/reservations']);
      },
        (respError: HttpErrorResponse) => {
          this.erreur = true;
          this.errors = respError.error;
        });
  }


  ngOnInit() {

  }
}
