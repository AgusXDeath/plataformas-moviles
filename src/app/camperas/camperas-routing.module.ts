import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamperasPage } from './camperas.page';

const routes: Routes = [
  {
    path: '',
    component: CamperasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamperasPageRoutingModule {}
