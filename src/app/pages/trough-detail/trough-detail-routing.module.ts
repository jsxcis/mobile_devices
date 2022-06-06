import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TroughDetailPage } from './trough-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TroughDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TroughDetailPageRoutingModule {}
