import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicule} from '../models/Vehicule';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminVehiculeService {

  constructor(private _http: HttpClient) { }

  public getVehicules(): Observable<Vehicule[]> {
    return this._http.get<Vehicule[]>(`${environment.baseUrl}admin/vehicules`);
  }

  public addVehicule(vehicule: Vehicule) {
    return this._http.post(`${environment.baseUrl}admin/vehicules`, vehicule);
  }
}
