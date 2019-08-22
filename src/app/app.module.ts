import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from "@angular/forms";
import {StatutConnecteService} from "./auth/statut-connecte.service";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import { AnnoncesComponent } from './covoiturage/annonces/annonces.component';
import { PublierAnnonceComponent } from './covoiturage/publier-annonce/publier-annonce.component';


const routes: Routes = [
  { path:'tech', component: TechComponent, canActivate:[StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path:'auth', component: AuthComponent},
  { path: '', redirectTo: '/tech', pathMatch: 'full'},
  { path: 'annonces', component: AnnoncesComponent},
  { path: 'annonces/creer', component: PublierAnnonceComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    AnnoncesComponent,
    PublierAnnonceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
