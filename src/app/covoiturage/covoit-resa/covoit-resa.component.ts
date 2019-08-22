import {Component, OnInit} from '@angular/core';
import {AnnonceCovoitResa} from '../../models/AnnonceCovoitResa';
import {CovoitResaService} from './covoit-resa.service';

@Component({
  selector: 'app-covoit-resa',
  templateUrl: './covoit-resa.component.html',
  styleUrls: ['./covoit-resa.component.css']
})
export class CovoitResaComponent implements OnInit {

  annonces: AnnonceCovoitResa[];


  headElements = ['Date / heure', 'Départ', 'Destination', ''];

  constructor(private srv: CovoitResaService) {
  }

  ngOnInit() {

    this.srv.getResarvations().subscribe(annonces => {
      this.annonces = annonces;
    });
  }


}
