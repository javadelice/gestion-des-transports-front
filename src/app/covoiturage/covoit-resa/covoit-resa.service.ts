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

  public getResarvations(): Observable<AnnonceCovoitResa[]> {
    return this._http.get<AnnonceCovoitResa[]>(`${environment.baseUrl}collaborateur/reservations`);
  }
}
