import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChauffeursService } from '../services/chauffeurs.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chauffeurs',
  templateUrl: './chauffeurs.component.html',
  styleUrls: ['./chauffeurs.component.css']
})
export class ChauffeursComponent implements OnInit {

  chauffeurs = [];

  constructor(private srv: ChauffeursService, private modalService: NgbModal) { }

  ngOnInit() {
this.srv.getAllChauffeurs()
.subscribe(chauffeurs => this.chauffeurs = chauffeurs);
  }

  openModal(modal){
    this.modalService.open(modal);
  }

  /*openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }*/

  getChauffeur(matricule:string){
    this.srv.rechercherParMatricule(matricule)
    .subscribe(chauffeur => this.srv.publier(chauffeur));
  }

}
