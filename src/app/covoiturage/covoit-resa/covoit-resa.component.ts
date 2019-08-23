import {Component, OnInit} from '@angular/core';
import {AnnonceCovoitResa} from '../../models/AnnonceCovoitResa';
import {CovoitResaService} from './covoit-resa.service';


@Component({
  selector: 'app-covoit-resa',
  templateUrl: './covoit-resa.component.html',
  styleUrls: ['./covoit-resa.component.css']
})
export class CovoitResaComponent implements OnInit  {

  annonces: AnnonceCovoitResa[];
  private _annoncesHisto: AnnonceCovoitResa[] = Array();
  headElements = ['Date / heure', 'Départ', 'Destination', ''];

  page = 1;
  pageSize = 5;
  collectionSize;

  get annoncesHisto(): AnnonceCovoitResa[] {
    return this._annoncesHisto
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  constructor(private srv: CovoitResaService, ) {
  }

  ngOnInit() {
    this.srv.getReservations().subscribe(annonces => {
      this.annonces = annonces;

    });
    this.srv.getOldReservations().subscribe(annonces => {
      this._annoncesHisto = annonces;
      this.collectionSize = annonces.length;
    });
  }




}
