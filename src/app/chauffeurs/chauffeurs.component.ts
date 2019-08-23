import { Component, OnInit } from '@angular/core';
import { ChauffeursService } from '../services/chauffeurs.service';

@Component({
  selector: 'app-chauffeurs',
  templateUrl: './chauffeurs.component.html',
  styleUrls: ['./chauffeurs.component.css']
})
export class ChauffeursComponent implements OnInit {

  chauffeurs = [];

  constructor(private srv: ChauffeursService) { }

  ngOnInit() {
this.srv.getAllChauffeurs()
.subscribe(chauffeurs => this.chauffeurs = chauffeurs);
  }

}
