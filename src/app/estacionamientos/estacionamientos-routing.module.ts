import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionamientosPage } from './estacionamientos.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionamientosPage
  },
  {
    path: 'estacionamiento-centro',
    loadChildren: () => import('./estacionamiento-centro/estacionamiento-centro.module').then( m => m.EstacionamientoCentroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionamientosPageRoutingModule {}
