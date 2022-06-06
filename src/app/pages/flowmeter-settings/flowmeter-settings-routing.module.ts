import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowmeterSettingsPage } from './flowmeter-settings.page';

const routes: Routes = [
  {
    path: '',
    component: FlowmeterSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowmeterSettingsPageRoutingModule {}
