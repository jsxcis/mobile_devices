import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherHistoryPage } from './weather-history.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherHistoryPageRoutingModule {}
