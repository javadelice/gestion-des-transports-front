import { Vehicule } from './Vehicule';

export class InfoResa {

  constructor(
    public heureDepart?: string,
    public minuteDepart?: string,
    public dateDepart?: string,
    public heureRetour?: string,
    public minuteRetour?: string,
    public dateRetour?: string,
    public vehiculeSociete?: Vehicule) {
    }
}
