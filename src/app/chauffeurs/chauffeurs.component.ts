import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChauffeursService } from '../services/chauffeurs.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-chauffeurs',
  templateUrl: './chauffeurs.component.html',
  styleUrls: ['./chauffeurs.component.css']
})
export class ChauffeursComponent implements OnInit {

  chauffeurs = [];
  modalRef: BsModalRef;

  constructor(private srv: ChauffeursService, private modalService: BsModalService) { }

  ngOnInit() {
this.srv.getAllChauffeurs()
.subscribe(chauffeurs => this.chauffeurs = chauffeurs);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getChauffeur(matricule:string){
    this.srv.rechercherParMatricule(matricule)
    .subscribe(chauffeur => this.srv.publier(chauffeur));
  }

}
