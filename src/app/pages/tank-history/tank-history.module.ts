import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankHistoryPageRoutingModule } from './tank-history-routing.module';

import { TankHistoryPage } from './tank-history.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankHistoryPageRoutingModule,
    Ng2GoogleChartsModule
  ],
  declarations: [TankHistoryPage]
})
export class TankHistoryPageModule {}
