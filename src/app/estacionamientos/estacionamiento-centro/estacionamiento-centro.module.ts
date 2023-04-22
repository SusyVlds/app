import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionamientoCentroPageRoutingModule } from './estacionamiento-centro-routing.module';

import { EstacionamientoCentroPage } from './estacionamiento-centro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionamientoCentroPageRoutingModule
  ],
  declarations: [EstacionamientoCentroPage]
})
export class EstacionamientoCentroPageModule {}
