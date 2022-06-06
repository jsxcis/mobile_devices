import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GateDetailPage } from './gate-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GateDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GateDetailPageRoutingModule {}
