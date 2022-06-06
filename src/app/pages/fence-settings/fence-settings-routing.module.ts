import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FenceSettingsPage } from './fence-settings.page';

const routes: Routes = [
  {
    path: '',
    component: FenceSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FenceSettingsPageRoutingModule {}
