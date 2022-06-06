import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankSettingsPage } from './tank-settings.page';

const routes: Routes = [
  {
    path: '',
    component: TankSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankSettingsPageRoutingModule {}
