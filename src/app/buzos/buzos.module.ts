import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuzosPageRoutingModule } from './buzos-routing.module';
import { BuzosPage } from './buzos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzosPageRoutingModule
  ],
  declarations: [BuzosPage]
})
export class BuzosPageModule {}
