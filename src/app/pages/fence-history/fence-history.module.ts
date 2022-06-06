import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FenceHistoryPageRoutingModule } from './fence-history-routing.module';

import { FenceHistoryPage } from './fence-history.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FenceHistoryPageRoutingModule,
    Ng2GoogleChartsModule
  ],
  declarations: [FenceHistoryPage]
})
export class FenceHistoryPageModule {}
