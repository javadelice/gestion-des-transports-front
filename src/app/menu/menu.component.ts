import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  collegueConnecte: Observable<Collegue>;
  roleConnect: Observable<string>;
  role: string;


  constructor(private _authSrv: AuthService, private _router: Router) {

  }

  /**
   * Action déconnecter collègue.
   */
  seDeconnecter() {
    this._authSrv.seDeconnecter().subscribe(
      value => {
        this.role = null;
        localStorage.clear();
        this._router.navigate(['/auth']);
      }
    );
  }

  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit(): void {
    this.collegueConnecte = this._authSrv.collegueConnecteObs;
    this.roleConnect = this._authSrv.roleUserObs;
    this.role = localStorage.getItem('roleUser');
  }



}
