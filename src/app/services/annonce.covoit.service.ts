import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { InfoCovoit } from "../models/InfoCovoit";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AnnonceCovoitService {


constructor(private httpClient: HttpClient) { }

ajouterAnnonceCovoit(infoCovoit:InfoCovoit){
  return this.httpClient
  .post<InfoCovoit>(environment.baseUrl + `annonces/creer`, infoCovoit, { withCredentials: true});
}


}
