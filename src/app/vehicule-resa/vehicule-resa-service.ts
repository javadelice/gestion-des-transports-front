import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResaVehicule } from '../models/ResaVehicule';
import { InfoResa } from '../models/infoResa';


const URL_BASE = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class VehiculeResaService {

  constructor(private _http: HttpClient) {
  }

  public getReservationVehicule(): Observable<ResaVehicule[]> {
    return this._http.get<ResaVehicule[]>(`${URL_BASE}collaborateur/reservations/vehicule`);
  }

  public getHistorique(): Observable<ResaVehicule[]> {
    return this._http.get<ResaVehicule[]>(`${URL_BASE}collaborateur/historique`);
  }

  public ajouterReservationVehicule(infoResa: InfoResa): Observable<InfoResa[]> {
    return this._http.post<InfoResa[]>(`${URL_BASE}collaborateur/reservations/vehicule/creer`, { body: infoResa });
  }

}

