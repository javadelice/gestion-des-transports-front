import { Component, OnInit } from '@angular/core';
import { InfoCovoit } from 'src/app/models/InfoCovoit';
import { Router } from '@angular/router';
import { AnnonceCovoitService } from 'src/app/services/annonce.covoit.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Itineraire } from 'src/app/models/Itineraire';

@Component({
  selector: 'app-publier-annonce',
  templateUrl: './publier-annonce.component.html',
  styleUrls: ['./publier-annonce.component.css']
})
export class PublierAnnonceComponent implements OnInit {

  constructor(private _ajoutAnnonce: AnnonceCovoitService, private router: Router) { }


  infoCovoit = new InfoCovoit('', '', '', '', '', '', '', '', '');
  errorValidation = false;
  backEndErrors: any = {};
  backBoolean : boolean = false;
  adresseBackEndErrors: string;
  currentDate = new Date();
  itineraire:Itineraire;

  delete() {
    return this.errorValidation = false;
  }


  creerAnnonce() {
    this.backEndErrors = {};
    this._ajoutAnnonce.ajouterAnnonceCovoit(this.infoCovoit).subscribe(
      () => { this.errorValidation = false; location.reload(); },
      (respError: HttpErrorResponse) => {
         this.errorValidation = true;
         this.backEndErrors = respError.error;
        });
  }

  afficherItineraire(){

    if (this.infoCovoit.adresseDepart !== '' && this.infoCovoit.adresseDestination !== ''){
        this._ajoutAnnonce.getItineraire(this.infoCovoit.adresseDepart, this.infoCovoit.adresseDestination).subscribe(
        (itineraire) => {
          this.itineraire = itineraire
          this.backBoolean = false;
        },
        (respError : HttpErrorResponse) => {
          this.adresseBackEndErrors = respError.error;
          this.backBoolean = true;
          this.itineraire.distance = undefined;
          this.itineraire.duree = undefined;
        }
        );
    }
  }


  ngOnInit() {

  }

}
