export class Vehicule {

  constructor(
    public idVehicule?: number,
    public immatriculation?: string,
    public marque?: string,
    public modele?: number,
    public nbPlaceDispo?: number,
    public estSociete?: boolean,
    public photoUrl?: string,
    public categorie?: string,
    public indisponible?: string) {
  }
}
