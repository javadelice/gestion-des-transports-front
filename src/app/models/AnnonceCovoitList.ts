import { Itineraire } from "./Itineraire";
import { Vehicule } from "./Vehicule";


export class AnnonceCovoitList{

  constructor (public id: number,
    public collegue: Conducteur,
    public itineraire: Itineraire,
    public vehicule: Vehicule,
    public dateTime: Date,
    public nbVoyageurs: number,
    public statut: string) {
    }
}

export class Conducteur {
  constructor(public nomComplet: string) {
  }
}
