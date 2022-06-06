import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TroughHistoryPage } from './trough-history.page';

const routes: Routes = [
  {
    path: '',
    component: TroughHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TroughHistoryPageRoutingModule {}
