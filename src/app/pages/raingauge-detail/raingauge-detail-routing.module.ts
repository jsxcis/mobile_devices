import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaingaugeDetailPage } from './raingauge-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RaingaugeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaingaugeDetailPageRoutingModule {}
