export class InfoCovoit {
  adresseDepart: string;
  adresseDestination: string;
  immatriculation: string;
  marque: string;
  modele: string;
  nombrePassager: number;
  heureDeDepart: string;
  dateDeDepart: string;

  constructor(adresseDepart, adresseDestination, immatriculation, marque, modele, nombrePassager, heureDeDepart, dateDeDepart) {
    this.adresseDepart = adresseDepart;
    this.adresseDestination = adresseDestination;
    this.immatriculation = immatriculation;
    this.marque = marque;
    this.modele = modele;
    this.nombrePassager = nombrePassager;
    this.heureDeDepart = heureDeDepart;
    this.dateDeDepart = dateDeDepart;
  }

}
