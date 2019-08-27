import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InfoCovoit } from 'src/app/models/InfoCovoit';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { AnnonceCovoitService } from 'src/app/services/annonce.covoit.service';

@Component({
  selector: 'app-publier-annonce',
  templateUrl: './publier-annonce.component.html',
  styleUrls: ['./publier-annonce.component.css']
})
export class PublierAnnonceComponent implements OnInit {

  constructor(private _ajoutAnnonce: AnnonceCovoitService, private router:Router) { }


  infoCovoit = new InfoCovoit("", "", "", "", "", "", "", "", "");


  creerAnnonce(){
    this._ajoutAnnonce.ajouterAnnonceCovoit(this.infoCovoit).subscribe();
  }

  // () => {location.reload();}

  ngOnInit() {
  }

}
