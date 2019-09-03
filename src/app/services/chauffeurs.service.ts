import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChauffeursService {

  @Input() col: Collegue;
  URL_BACKEND = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

// construction du Subject (commun à tous les composants qui vont l'utiliser - unique)
subChauffeurSelectionne = new Subject<Collegue>();

publier(unChauffeur: Collegue) {
  this.subChauffeurSelectionne.next(unChauffeur);
}

abonnement(): Observable<Collegue> {
  return this.subChauffeurSelectionne.asObservable();
}

getAllChauffeurs(): Observable<Collegue[]> {
  return this.httpClient
  .get<Collegue[]>(this.URL_BACKEND + 'admin/chauffeurs', {
    withCredentials: true
  });
}


donnerRoleChauffeur(id: number) {
  return this.httpClient.post(`${environment.baseUrl}admin/chauffeurs`, {'id': id});
}

}
