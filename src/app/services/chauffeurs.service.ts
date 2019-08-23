import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chauffeur } from '../models/Chauffeur';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collaborateur } from '../models/Collaborateur';

@Injectable({
  providedIn: 'root'
})
export class ChauffeursService {

  URL_BACKEND = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

// construction du Subject (commun à tous les composants qui vont l'utiliser - unique)
subChauffeurSelectionne = new Subject<Chauffeur>();

publier(unChauffeur: Chauffeur){
  this.subChauffeurSelectionne.next(unChauffeur);
}

abonnement(): Observable<Chauffeur>{
  return this.subChauffeurSelectionne.asObservable();
}

getAllChauffeurs(): Observable<Chauffeur[]>{
  return this.httpClient
  .get<Chauffeur[]>(this.URL_BACKEND+'admin/chauffeurs', {
    withCredentials: true
  });
}


setRoleChauffeur(matricule:string, role: string) : Observable<Collaborateur>{
  return this.httpClient
  .patch<Collaborateur>(this.URL_BACKEND+'admin/'+matricule,
  {
    "role": role
  }, {
    withCredentials: true
  }
  );
}

}
