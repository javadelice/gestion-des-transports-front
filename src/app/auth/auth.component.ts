import {Component, OnInit} from '@angular/core';
import {Collegue} from './auth.domains';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

/**
 * Formulaire d'authentification.
 */


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  collegue: Collegue = new Collegue({});
  roles: string[] ;
  err: boolean;

  constructor(private _authSrv: AuthService, private _router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  connecter(roles) {
    this._authSrv.connecter(this.collegue.email, this.collegue.motDePasse)
      .subscribe(
        // en cas de succès, redirection vers la page /tech
        colegue => {
          console.log(colegue.roles);
          if (colegue.roles.length > 1) {
            this.roles = colegue.roles;
            this.modalService.open(roles);
          } else {
            localStorage.setItem('roleUser', 'ROLE_UTILISATEUR');
            this._authSrv.roleUser = 'ROLE_UTILISATEUR';
            this._router.navigate(['/reservations']);
          }
        },
        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

  ajouterRole(role, route) {
    localStorage.setItem('roleUser', role);
    this._authSrv.roleUser = role;
    this.modalService.dismissAll();
    this._router.navigate([`/${route}`]);
  }

}
