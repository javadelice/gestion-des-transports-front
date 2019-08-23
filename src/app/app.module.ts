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
import { MenuComponent } from './menu/menu.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChauffeursComponent } from './chauffeurs/chauffeurs.component';
import { DetailsChauffeursComponent } from './details-chauffeurs/details-chauffeurs.component';

const routes: Routes = [
  { path:'collaborateur', component: TechComponent, canActivate:[StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path:'auth', component: AuthComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'admin/chauffeurs', component: ChauffeursComponent},
  {path: 'annonces', component: AnnoncesComponent},
  {path: 'statistiques', component: StatistiquesComponent},
  { path: '', redirectTo: '/tech', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    MenuComponent,
    StatistiquesComponent,
    AnnoncesComponent,
    ReservationsComponent,
    ChauffeursComponent,
    DetailsChauffeursComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
