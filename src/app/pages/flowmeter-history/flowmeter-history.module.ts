import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlowmeterHistoryPageRoutingModule } from './flowmeter-history-routing.module';

import { FlowmeterHistoryPage } from './flowmeter-history.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowmeterHistoryPageRoutingModule,
    Ng2GoogleChartsModule
  ],
  declarations: [FlowmeterHistoryPage]
})
export class FlowmeterHistoryPageModule {}
