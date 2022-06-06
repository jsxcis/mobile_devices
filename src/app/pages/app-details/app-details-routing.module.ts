import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppDetailsPage } from './app-details.page';

const routes: Routes = [
  {
    path: '',
    component: AppDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppDetailsPageRoutingModule {}
