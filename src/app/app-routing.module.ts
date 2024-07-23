import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubricaComponent } from './rubrica/rubrica.component';
import { RubricaDettaglioComponent } from './rubrica-dettaglio/rubrica-dettaglio.component';
import { RubricaListComponent } from './rubrica-list/rubrica-list.component';

const routes: Routes = [
  {
    path: "", component: RubricaComponent
  },
  {
    path: "lista", component: RubricaListComponent
  },
  {
    path: "dettaglio/:id", component: RubricaDettaglioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
