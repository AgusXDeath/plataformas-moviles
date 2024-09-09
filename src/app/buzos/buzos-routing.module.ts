import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzosPage } from './buzos.page';

const routes: Routes = [
  {
    path: '',
    component: BuzosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuzosPageRoutingModule {}
