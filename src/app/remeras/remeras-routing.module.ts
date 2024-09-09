import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemerasPage } from './remeras.page';

const routes: Routes = [
  {
    path: '',
    component: RemerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemerasPageRoutingModule {}
