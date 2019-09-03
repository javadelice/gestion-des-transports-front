import { Component, OnInit } from '@angular/core';
import {Vehicule} from '../../models/Vehicule';
import {AdminVehiculeService} from '../admin-vehicule.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

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
  categories: string[][] = [['Micro-urbaines', 'Micro_urbaines'], ['Mini-citadines', 'Mini_citadines'],
    ['Citadines polyvalentes', 'Citadines_polyvalentes'], ['Compactes', 'Compactes'], ['Berlines Taille S', 'Berlines_Taille_S'],
  ['Berlines Taille M', 'Berlines_Taille_M'], ['Berlines Taille L', 'Berlines_Taille_L'], ['SUV', 'SUV'],
    [ 'Tout-terrains', 'Tout_terrains'], ['Pick-up', 'Pick_up']];
  errorValidation;
  backEndErrors: any;


  constructor(private adminService: AdminVehiculeService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.adminService.getVehicules().subscribe(vehicules => {
      this.vehicules = vehicules;
      this.vehiculesFiltered = vehicules;
      this.errorValidation = false;
    });
  }
  open(modal) {
    this.modalService.open(modal);
  }

  filtrer() {
    this.vehiculesFiltered = this.vehicules.filter(vehicule => {
      if (this.immatriculation !== '') {
        return vehicule.immatriculation.toLowerCase().includes(this.immatriculation.toLowerCase());
      } else {
        return true;
      }
    }).filter(vehicule => {
      if (this.marque !== '') {
        return vehicule.marque.toLowerCase().includes(this.marque.toLowerCase());
      } else {
        return true;
      }
    });

  }

  ajouterVehicule() {
  this.vehiculeAdd.estSociete = true;
  this.adminService.addVehicule(this.vehiculeAdd).subscribe(success => {
    this.modalService.dismissAll();
    this.ngOnInit();
    this.errorValidation = false;
  }, (respError: HttpErrorResponse) => {
    this.errorValidation = true;
    this.backEndErrors = respError.error;
  });
  }


}
