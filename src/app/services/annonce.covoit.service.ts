import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { InfoCovoit } from "../models/InfoCovoit";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { AnnonceCovoitList } from "../models/AnnonceCovoitList";

@Injectable({
  providedIn: 'root'
})

export class AnnonceCovoitService {


constructor(private httpClient: HttpClient) { }

ajouterAnnonceCovoit(infoCovoit:InfoCovoit){
  return this.httpClient
  .post<InfoCovoit>(environment.baseUrl + `collaborateur/annonces/creer`, infoCovoit, { withCredentials: true});
}

afficherAnnoncesEnCours (): Observable<AnnonceCovoitList[]>{
  return this.httpClient.get<AnnonceCovoitList[]>(environment.baseUrl + `collaborateur/annonces`, { withCredentials: true });
}

afficherAnciennesAnnonces(): Observable<AnnonceCovoitList[]>{
  return this.httpClient.get<AnnonceCovoitList[]>(environment.baseUrl + `collaborateur/annonces_old`, { withCredentials: true });
}

}
