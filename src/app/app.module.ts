import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AffichageFilmsComponent } from './affichage-films/affichage-films.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterFilmsComponent } from './ajouter-films/ajouter-films.component';
import { SavoirPlusComponent } from './savoir-plus/savoir-plus.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AffichageSeriesComponent } from './affichage-series/affichage-series.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SavoirPlusSerieComponent } from './savoir-plus-serie/savoir-plus-serie.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
                  


@NgModule({
  declarations: [
    AppComponent,
    AffichageFilmsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AjouterFilmsComponent,
    SavoirPlusComponent,
    ReservationComponent,
    AffichageSeriesComponent,
    SavoirPlusSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    DialogModule,
    BrowserAnimationsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
