import { Component, OnInit } from '@angular/core';
import { InfoCovoit } from 'src/app/models/InfoCovoit';
import { Router } from '@angular/router';
import { AnnonceCovoitService } from 'src/app/services/annonce.covoit.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-publier-annonce',
  templateUrl: './publier-annonce.component.html',
  styleUrls: ['./publier-annonce.component.css']
})
export class PublierAnnonceComponent implements OnInit {

  constructor(private _ajoutAnnonce: AnnonceCovoitService, private router: Router) { }


  infoCovoit = new InfoCovoit("", "", "", "", "", "", "", "", "");
  errorValidation: boolean = false;
  backEndErrors:any = {};
  currentDate = new Date();
  
  delete(){
    return this.errorValidation = false;
  }


  creerAnnonce() {
    this.backEndErrors = {};
    this._ajoutAnnonce.ajouterAnnonceCovoit(this.infoCovoit).subscribe(
      () => { this.errorValidation = false; location.reload(); },
      (respError: HttpErrorResponse) => {
        console.log(respError.error);
         this.errorValidation = true;
         this.backEndErrors = respError.error;
        });
  }


  ngOnInit() {
  }

}
