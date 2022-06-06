import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaingaugeSettingsPage } from './raingauge-settings.page';

const routes: Routes = [
  {
    path: '',
    component: RaingaugeSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaingaugeSettingsPageRoutingModule {}
