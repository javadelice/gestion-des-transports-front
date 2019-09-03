import { Vehicule } from './Vehicule';
import { ResaVehiculeLite } from './ResaVehiculeLite';

export class ResasParVehicule {
  constructor(public vehicule?: Vehicule,
              public listResasEnCours?: ResaVehiculeLite[],
              public listResasPassees?: ResaVehiculeLite[]) {
  }
}
