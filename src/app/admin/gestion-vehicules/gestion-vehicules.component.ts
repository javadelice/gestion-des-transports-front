import { Component, OnInit } from '@angular/core';
import {Vehicule} from '../../models/Vehicule';
import {AdminVehiculeService} from '../admin-vehicule.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './gestion-vehicules.component.html',
  styleUrls: ['./gestion-vehicules.component.css']
})
export class GestionVehiculesComponent implements OnInit {

  vehiculeAdd: Vehicule = new Vehicule();
  vehiculesFiltered: Vehicule[];
  vehicules: Vehicule[];
  immatriculation = '';
  marque = '';
  categories: string[] = ['Micro-urbaines', 'Mini-citadines', 'Citadines polyvalentes', 'Compactes', 'Berlines Taille S',
  'Berlines Taille M', 'Berlines Taille L', 'SUV', 'Tout-terrains', 'Pick-up'];

  constructor(private adminService: AdminVehiculeService,
              private modalService: NgbModal,
              private _router: Router) { }

  ngOnInit() {
    this.adminService.getVehicules().subscribe(vehicules => {
      this.vehicules = vehicules;
      this.vehiculesFiltered = vehicules;
    });
  }
  open(modal) {
    this.modalService.open(modal);
  }

  filtrer() {
    this.vehiculesFiltered = this.vehicules.filter(vehicule => {
      if (this.immatriculation !== '') {
        return vehicule.immatriculation.includes(this.immatriculation);
      } else {
        return true;
      }
    }).filter(vehicule => {
      if (this.marque !== '') {
        return vehicule.marque.includes(this.marque);
      } else {
        return true;
      }
    });

  }

  ajouterVehicule() {
  this.adminService.addVehicule(this.vehiculeAdd).subscribe(success => {
    this.modalService.dismissAll();
    this.ngOnInit();
  });
  }

}
