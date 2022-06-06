import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoreDetailPage } from './bore-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BoreDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoreDetailPageRoutingModule {}
