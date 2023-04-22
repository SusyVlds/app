import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionamientoCentroPage } from './estacionamiento-centro.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionamientoCentroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionamientoCentroPageRoutingModule {}
