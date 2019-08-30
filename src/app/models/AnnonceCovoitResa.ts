import {Itineraire} from './Itineraire';
import {Vehicule} from './Vehicule';

export class AnnonceCovoitResa {

  constructor(public id: number,
  public collegue: ChauffeurCovoit,
  public itineraire: Itineraire,
  public vehicule: Vehicule,
  public dateTime: Date,
  public nbPlacesLibres: number,
  public statut: string) {

  }
}


export class ChauffeurCovoit {
  constructor(public nomComplet: string) {

  }
}

export class AnnonceCovoitResaLite {
  constructor(date: Date, depart: string, dest: string) {
  }
}
