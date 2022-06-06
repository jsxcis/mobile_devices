import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankHistoryPage } from './tank-history.page';

const routes: Routes = [
  {
    path: '',
    component: TankHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankHistoryPageRoutingModule {}
