export class Collegue {

  constructor (
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public email?: string,
    public permis?: string,
    public telephone?: string,
    public roles?: string[],
    public matricule?: string,
    public urlPhoto?: string) {


  }
}

export class Chauffeur {
  constructor(
    public nomComplet?: string,
    public email?: string
  ) {
  }
}
