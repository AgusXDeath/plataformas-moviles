import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemerasPageRoutingModule } from './remeras-routing.module';

import { RemerasPage } from './remeras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemerasPageRoutingModule
  ],
  declarations: [RemerasPage]
})
export class RemerasPageModule {}
