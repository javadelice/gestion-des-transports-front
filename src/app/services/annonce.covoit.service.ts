import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoCovoit } from '../models/InfoCovoit';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AnnonceCovoitList } from '../models/AnnonceCovoitList';
import { Itineraire } from '../models/Itineraire';

@Injectable({
  providedIn: 'root'
})

export class AnnonceCovoitService {


  constructor(private httpClient: HttpClient) { }

  ajouterAnnonceCovoit(infoCovoit: InfoCovoit) {
    return this.httpClient
      .post<InfoCovoit>(environment.baseUrl + `collaborateur/annonces/creer`, infoCovoit, { withCredentials: true });
  }

  afficherAnnoncesEnCours(): Observable<AnnonceCovoitList[]> {
    return this.httpClient.get<AnnonceCovoitList[]>(environment.baseUrl + `collaborateur/annonces`, { withCredentials: true });
  }

  afficherAnciennesAnnonces(): Observable<AnnonceCovoitList[]> {
    return this.httpClient.get<AnnonceCovoitList[]>(environment.baseUrl + `collaborateur/annonces_old`, { withCredentials: true });
  }

  suppressionAnnonce(annonceCovoit: AnnonceCovoitList) {
    return this.httpClient.patch<AnnonceCovoitList>(environment.baseUrl + 'collaborateur/annonces_annulation', annonceCovoit, { withCredentials: true });
  }

  getItineraire(adresseDepart: string, adresseDest: string): Observable<Itineraire> {
    return this.httpClient.get<Itineraire>(`${environment.baseUrl}collaborateur/annonces/creer_itineraire?adresseDepart=${adresseDepart}&adresseDest=${adresseDest}`);
  }
}
