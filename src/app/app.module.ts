import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TechComponent} from './tech/tech.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AuthComponent} from './auth/auth.component';
import {FormsModule} from '@angular/forms';

import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

import {ReservationComponent} from './reservation/reservation.component';
import {VehiculeResaComponent} from './vehicule-resa/vehicule-resa.component';
import {CovoitResaComponent} from './covoiturage/covoit-resa/covoit-resa.component';
import {CovoitResaCreerComponent} from './covoiturage/covoit-resa-creer/covoit-resa-creer.component';
import {ReservationCreerComponent} from './reservation-creer/reservation-creer.component';
import {AnnoncesComponent} from './covoiturage/annonces/annonces.component';
import {StatistiquesComponent} from './statistiques/statistiques.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChauffeursComponent} from './chauffeurs/chauffeurs.component';
import {PublierAnnonceComponent} from './covoiturage/publier-annonce/publier-annonce.component';
import {ResaVehiculeCreerComponent} from './resa-vehicule-creer/resa-vehicule-creer.component';
import {ReservationVehiculeCovoitComponent} from './reservation-vehicule-covoit/reservation-vehicule-covoit.component';

const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent},
  {path: 'reservations', component : ReservationComponent, canActivate: [StatutConnecteService]},
  {path: 'reservations/creer', component : ReservationCreerComponent, canActivate: [StatutConnecteService]},
  {path: 'annonces', component: AnnoncesComponent, canActivate: [StatutConnecteService]},
  {path: 'statistiques', component: StatistiquesComponent, canActivate: [StatutConnecteService]},
  { path: 'annonces/creer', component: PublierAnnonceComponent, canActivate: [StatutConnecteService]},
  {path: 'admin/chauffeurs', component: ChauffeursComponent},

  {path: '', redirectTo: '/tech', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    ReservationComponent,
    CovoitResaComponent,
    CovoitResaCreerComponent,
    ReservationCreerComponent,
    MenuComponent,
    StatistiquesComponent,
    AnnoncesComponent,
    ChauffeursComponent,
    VehiculeResaComponent,
    ResaVehiculeCreerComponent,
    ReservationVehiculeCovoitComponent,
    VehiculeResaComponent,
    PublierAnnonceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
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
