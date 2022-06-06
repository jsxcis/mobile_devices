import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TroughSettingsPage } from './trough-settings.page';

const routes: Routes = [
  {
    path: '',
    component: TroughSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TroughSettingsPageRoutingModule {}
