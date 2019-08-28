import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResaVehicule } from '../model/ResaVehicule';
import { environment } from 'src/environments/environment';


const URL_BASE = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class VehiculeResaService {

  constructor(private _http: HttpClient) {
  }

  public getReservationVehicule(): Observable<ResaVehicule[]> {
    return this._http.get<ResaVehicule[]>(`${URL_BASE}reservations`);
  }

  public getHistorique(): Observable<ResaVehicule[]> {
    return this._http.get<ResaVehicule[]>(`${URL_BASE}historique`);
  }

}

