import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaingaugeHistoryPageRoutingModule } from './raingauge-history-routing.module';

import { RaingaugeHistoryPage } from './raingauge-history.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaingaugeHistoryPageRoutingModule,
    Ng2GoogleChartsModule
  ],
  declarations: [RaingaugeHistoryPage]
})
export class RaingaugeHistoryPageModule {}
