import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {AnnonceCovoitResa} from '../../models/AnnonceCovoitResa';
import {environment} from '../../../environments/environment';
import { ResaCovoit } from 'src/app/models/ResaCovoit';

@Injectable({
  providedIn: 'root'
})
export class CovoitResaService {

  constructor(private _http: HttpClient) { }

  subAnnoncesSelectionnees = new Subject<AnnonceCovoitResa>();

  publier(uneAnnonce: AnnonceCovoitResa) {
    this.subAnnoncesSelectionnees.next(uneAnnonce);
  }

  abonnement(): Observable<AnnonceCovoitResa> {
    return this.subAnnoncesSelectionnees.asObservable();
  }

  getReservations(): Observable<ResaCovoit[]> {
    return this._http.get<ResaCovoit[]>(`${environment.baseUrl}collaborateur/reservations`);
  }

  getReservationsCovoit(date: string, lieuDepart: string, lieuArrivee: string): Observable<AnnonceCovoitResa[]> {
    // tslint:disable-next-line: max-line-length
    return this._http.get<AnnonceCovoitResa[]>(`${environment.baseUrl}collaborateur/reservations/covoit/creer?date=${date}&lieuDepart=${lieuDepart}&lieuArrivee=${lieuArrivee}`);
  }

  getOldReservations(): Observable<ResaCovoit[]> {
    return this._http.get<ResaCovoit[]>(`${environment.baseUrl}collaborateur/reservations_old`);
  }

creerResaCovoit (annonce: AnnonceCovoitResa) {
  return this._http.post<AnnonceCovoitResa>(`${environment.baseUrl}collaborateur/reservations/covoit/creer`, annonce);
}

}
