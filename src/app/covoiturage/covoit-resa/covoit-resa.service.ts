import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AnnonceCovoitResa} from '../../models/AnnonceCovoitResa';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovoitResaService {

  constructor(private _http: HttpClient) { }

  public getReservations(): Observable<AnnonceCovoitResa[]> {
    return this._http.get<AnnonceCovoitResa[]>(`${environment.baseUrl}collaborateur/reservations`);
  }

  public getReservationsCovoit(): Observable<AnnonceCovoitResa[]> {
    return this._http.get<AnnonceCovoitResa[]>(`${environment.baseUrl}collaborateur/reservations/creer`);
  }

  public getOldReservations(): Observable<AnnonceCovoitResa[]> {
    return this._http.get<AnnonceCovoitResa[]>(`${environment.baseUrl}collaborateur/reservations_old`);
  }
}
