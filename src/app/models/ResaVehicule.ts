import { Vehicule } from './Vehicule';
import { Collegue } from './Collegue';

export class ResaVehicule {

  constructor(
    public id?: number,
    public dateDeDebut?: Date,
    public dateDeFin?: Date,
    public vehiculeSociete?: Vehicule,
    public passager?: Collegue,
    public chauffeur?: Collegue,
    public statut?: string
  ) {

  }


}
