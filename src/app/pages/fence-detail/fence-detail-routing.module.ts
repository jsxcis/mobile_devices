import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FenceDetailPage } from './fence-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FenceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FenceDetailPageRoutingModule {}
