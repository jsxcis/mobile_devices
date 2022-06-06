import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TroughHistoryPageRoutingModule } from './trough-history-routing.module';

import { TroughHistoryPage } from './trough-history.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TroughHistoryPageRoutingModule,
    Ng2GoogleChartsModule
  ],
  declarations: [TroughHistoryPage]
})
export class TroughHistoryPageModule {}
