import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowmeterHistoryPage } from './flowmeter-history.page';

const routes: Routes = [
  {
    path: '',
    component: FlowmeterHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowmeterHistoryPageRoutingModule {}
