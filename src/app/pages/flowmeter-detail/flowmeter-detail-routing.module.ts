import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowmeterDetailPage } from './flowmeter-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FlowmeterDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowmeterDetailPageRoutingModule {}
