export class InfoCovoit {
  adresseDepart: string;
  adresseDestination: string;
  immatriculation: string;
  marque: string;
  modele: string;
  nbPlaceDispo: number;
  heureDeDepart: string;
  minuteDeDepart: string;
  dateDeDepart: string;

  constructor(adresseDepart, adresseDestination, immatriculation, marque, modele, nbPlaceDispo, heureDeDepart, minuteDeDepart, dateDeDepart) {
    this.adresseDepart = adresseDepart;
    this.adresseDestination = adresseDestination;
    this.immatriculation = immatriculation;
    this.marque = marque;
    this.modele = modele;
    this.nbPlaceDispo = nbPlaceDispo;
    this.heureDeDepart = heureDeDepart;
    this.minuteDeDepart = minuteDeDepart;
    this.dateDeDepart = dateDeDepart;
  }

}
