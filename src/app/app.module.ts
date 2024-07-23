import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricaComponent } from './rubrica/rubrica.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RubricaListComponent } from './rubrica-list/rubrica-list.component';
import { RubricaDettaglioComponent } from './rubrica-dettaglio/rubrica-dettaglio.component';
import { RubricaNavbarComponent } from './rubrica-navbar/rubrica-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    RubricaComponent,
    RubricaListComponent,
    RubricaDettaglioComponent,
    RubricaNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
