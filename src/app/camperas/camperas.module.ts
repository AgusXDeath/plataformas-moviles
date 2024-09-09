import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamperasPageRoutingModule } from './camperas-routing.module';

import { CamperasPage } from './camperas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamperasPageRoutingModule
  ],
  declarations: [CamperasPage]
})
export class CamperasPageModule {}
