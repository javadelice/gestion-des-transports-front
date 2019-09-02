import { Component, OnInit } from '@angular/core';
import { ResaVehicule } from '../models/ResaVehicule';
import { VehiculeResaService } from '../services/vehicule-resa-service';
import { Vehicule } from '../models/Vehicule';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {

  reservationsAVenir: ResaVehicule[];
  reservationsPassees: ResaVehicule []= Array();
  vehicule: Vehicule = new Vehicule();
  immatriculation: string;
  collectionSize;

  headElements = ['Date / heure début', 'Date / heure fin', 'Responsable'];

  constructor(private srv: VehiculeResaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.immatriculation = params.get('immatriculation');
    this.srv.rechercherVehiculeParImmatriculation(this.immatriculation)
    .subscribe(v => this.vehicule = v);
    });
  }




}
