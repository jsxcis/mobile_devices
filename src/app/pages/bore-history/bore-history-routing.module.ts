import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoreHistoryPage } from './bore-history.page';

const routes: Routes = [
  {
    path: '',
    component: BoreHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoreHistoryPageRoutingModule {}
