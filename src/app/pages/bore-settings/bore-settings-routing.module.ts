import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoreSettingsPage } from './bore-settings.page';

const routes: Routes = [
  {
    path: '',
    component: BoreSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoreSettingsPageRoutingModule {}
