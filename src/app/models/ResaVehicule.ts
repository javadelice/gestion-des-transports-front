import { Vehicule } from './Vehicule';
import { Collegue } from '../auth/auth.domains';

export class ResaVehicule {

  constructor(
    public id?: number,
    public dateDeDebut?: Date,
    public dateDeFin?: Date,
    public vehiculeSociete?: Vehicule,
    public passager?: Collegue) {

  }


}
