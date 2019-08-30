import { OnInit, Component } from '@angular/core';
import { AnnonceCovoitService } from 'src/app/services/annonce.covoit.service';
import { AnnonceCovoitList } from 'src/app/models/AnnonceCovoitList';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  constructor(private annonceService: AnnonceCovoitService, private modalService: NgbModal) { }

  annoncesEnCours: AnnonceCovoitList[];
  ancienneAnnonces: AnnonceCovoitList[] = Array();
  msgError: string;

  headElements = ['Date / heure', 'Lieu de Départ', 'Lieu de Destination', 'Nombre de voyageurs'];
  page = 1;
  pageSize = 5;
  collectionSize;

  get annoncesHisto(): AnnonceCovoitList[] {
    return this.ancienneAnnonces
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  annulerAnnonce(annonce: AnnonceCovoitList) {
    return this.annonceService.suppressionAnnonce(annonce).subscribe(
      success => {
        this.modalService.dismissAll();
        this.ngOnInit();
      });
  }

  ngOnInit() {
    this.annonceService.afficherAnnoncesEnCours().subscribe(annoncesEnCours => { this.annoncesEnCours = annoncesEnCours; });

    this.annonceService.afficherAnciennesAnnonces().subscribe(ancienneAnnonces => {
    this.ancienneAnnonces = ancienneAnnonces;
      this.collectionSize = ancienneAnnonces.length;
    });
  }

}
