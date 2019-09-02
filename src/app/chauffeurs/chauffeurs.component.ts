import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChauffeursService } from '../services/chauffeurs.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-chauffeurs',
  templateUrl: './chauffeurs.component.html',
  styleUrls: ['./chauffeurs.component.css']
})
export class ChauffeursComponent implements OnInit {

  collegues: Collegue[];
  colleguesFiltered: Collegue[];
  idCollegue: number;
  matricule: string = "";
  nom: string = "";
  prenom: string = "";


  constructor(private srv: ChauffeursService, private modalService: NgbModal) { }

  ngOnInit() {
    this.srv.getAllChauffeurs()
      .subscribe(chauffeurs => {
        this.collegues = chauffeurs;
        this.colleguesFiltered = chauffeurs;
      });
  }

  openModal(modal) {
    this.modalService.open(modal);
  }

  searchChauffeur() {
this.colleguesFiltered = this.collegues
.filter(
  collegue => {
    if (this.matricule !== ""){
      return collegue.matricule.toLowerCase().includes(this.matricule.toLowerCase());
    } else {
      return true;
    }})
.filter(
collegue => {
  if (this.nom !== ""){
    return collegue.nom.toLowerCase().includes(this.nom.toLowerCase());
  } else {
    return true;
  }})
  .filter(
  collegue => {
    if (this.prenom !== ""){
      return collegue.prenom.toLowerCase().includes(this.prenom.toLowerCase());
    } else {
      return true;
    }
  })}

  changeRoleChauffeur() {
    console.log(this.idCollegue);
    this.srv.donnerRoleChauffeur(this.idCollegue)
      .subscribe(success => {
        // en cas de succes,fermeture de la fenetre modale
        this.modalService.dismissAll();
        this.ngOnInit();
      },
        err => { })
  }

}
