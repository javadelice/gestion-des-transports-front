import { Component, OnInit, TemplateRef } from '@angular/core';
import { Collegue } from "./auth.domains";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
  err: boolean;
  modalRef: BsModalRef;

  constructor(private _authSrv: AuthService, private _router: Router, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  connecter() {
    this._authSrv.connecter(this.collegue.email, this.collegue.motDePasse)
      .subscribe(
        // en cas de succès, redirection vers la page /tech
        col => this._router.navigate(['/tech']),

        // en cas d'erreur, affichage d'un message d'erreur
        err => this.err = true
      );
  }

}
