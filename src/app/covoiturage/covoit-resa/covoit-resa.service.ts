import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {AnnonceCovoitResa} from '../../models/AnnonceCovoitResa';
import {environment} from '../../../environments/environment';

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

  getReservations(): Observable<AnnonceCovoitResa[]> {
    return this._http.get<AnnonceCovoitResa[]>(`${environment.baseUrl}collaborateur/reservations`);
  }

  getReservationsCovoit(date: string): Observable<AnnonceCovoitResa[]> {
    return this._http.get<AnnonceCovoitResa[]>(`${environment.baseUrl}collaborateur/reservations/creer?date=${date}` );
  }

  getOldReservations(): Observable<AnnonceCovoitResa[]> {
    return this._http.get<AnnonceCovoitResa[]>(`${environment.baseUrl}collaborateur/reservations_old`);
  }
}
