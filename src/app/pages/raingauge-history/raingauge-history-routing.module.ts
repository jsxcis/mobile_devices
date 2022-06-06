import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaingaugeHistoryPage } from './raingauge-history.page';

const routes: Routes = [
  {
    path: '',
    component: RaingaugeHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaingaugeHistoryPageRoutingModule {}
