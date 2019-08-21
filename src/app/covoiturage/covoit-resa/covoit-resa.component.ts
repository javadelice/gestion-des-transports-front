import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covoit-resa',
  templateUrl: './covoit-resa.component.html',
  styleUrls: ['./covoit-resa.component.css']
})
export class CovoitResaComponent implements OnInit {
  elements: any = [
    {date: '21/09/2019', depart: 'Montpellier', dest: 'Nantes', details: 'details'},
    {date: '29/09/2019', depart: 'Nantes', dest: 'Montpellier', details: 'details'},
  ];

  headElements = ['Date / heure', 'Départ', 'Destination', ''];

  constructor() { }

  ngOnInit() {
  }

}
