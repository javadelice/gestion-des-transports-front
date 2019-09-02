import { Vehicule } from './Vehicule';
import {Chauffeur, Collegue} from './Collegue';

export class ResaVehicule {

  constructor(
    public id?: number,
    public dateDeDebut?: Date,
    public dateDeFin?: Date,
    public vehiculeSociete?: Vehicule,
    public passager?: Chauffeur,
    public chauffeur?: Chauffeur,
    public statut?: string
  ) {

  }


}
