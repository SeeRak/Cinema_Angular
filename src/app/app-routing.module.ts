import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichageFilmsComponent } from './affichage-films/affichage-films.component';
import { AffichageSeriesComponent } from './affichage-series/affichage-series.component';
import { AjouterFilmsComponent } from './ajouter-films/ajouter-films.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SavoirPlusSerieComponent } from './savoir-plus-serie/savoir-plus-serie.component';
import { SavoirPlusComponent } from './savoir-plus/savoir-plus.component';

const routes: Routes = [
  {path: "", component: AffichageFilmsComponent},
  {path: "affichageFilms", component: AffichageFilmsComponent},
  {path: "savoirPlus/:id", component: SavoirPlusComponent},
  {path: "savoirPlusSerie/:id", component: SavoirPlusSerieComponent},
  {path: "ajouterFilm", component: AjouterFilmsComponent},
  {path: "reserver/:id", component: ReservationComponent},
  {path: "reservation", component: ReservationComponent},
  {path: "affichageSeries", component: AffichageSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
