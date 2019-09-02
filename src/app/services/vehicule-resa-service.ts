import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResaVehicule } from '../models/ResaVehicule';
import { InfoResa } from '../models/infoResa';
import { Vehicule } from '../models/Vehicule';
import { ResasParVehicule } from '../models/ResasParVehicule';


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

  public getListVehiculeForReservation(dateDepart: string, heureDepart: string, minuteDepart: string,
                                       dateRetour: string, heureRetour: string, minuteRetour: string): Observable<Vehicule[]> {
    return this._http.get<Vehicule[]>(`${URL_BASE}collaborateur/reservations/vehicule/creer?dateDepart=${dateDepart}&heureDepart=${heureDepart}&minuteDepart=${minuteDepart}&` +
    `dateRetour=${dateRetour}&heureRetour=${heureRetour}&minuteRetour=${minuteRetour}`);
  }

  public getHistorique(): Observable<ResaVehicule[]> {
    return this._http.get<ResaVehicule[]>(`${URL_BASE}collaborateur/historique`);
  }

  public ajouterReservationVehicule(infoResa: InfoResa): Observable<InfoResa[]> {
    return this._http.post<InfoResa[]>(`${URL_BASE}collaborateur/reservations/vehicule/creer`, infoResa );
  }

  public indisponible(indisponible: boolean): Observable<Vehicule> {
    // tslint:disable-next-line: max-line-length
    return this._http.post<Vehicule>(`${URL_BASE}collaborateur/reservations/vehicule/creer`, { 'indisponible': false });
  }

  public disponible(disponible: boolean): Observable<Vehicule> {
    // tslint:disable-next-line: max-line-length
    return this._http.post<Vehicule>(`${URL_BASE}collaborateur/reservations/vehicule/creer`, { 'disponible': true });
  }

  public rechercherVehiculeParImmatriculation(immatriculation: string): Observable<ResasParVehicule>{
    return this._http.get<ResasParVehicule>(`${URL_BASE}vehicules/${immatriculation}`);
  }
}

