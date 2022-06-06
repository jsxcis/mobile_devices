import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherHistoryPageRoutingModule } from './weather-history-routing.module';

import { WeatherHistoryPage } from './weather-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherHistoryPageRoutingModule
  ],
  declarations: [WeatherHistoryPage]
})
export class WeatherHistoryPageModule {}
