import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaingaugeDetailPageRoutingModule } from './raingauge-detail-routing.module';

import { RaingaugeDetailPage } from './raingauge-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaingaugeDetailPageRoutingModule
  ],
  declarations: [RaingaugeDetailPage]
})
export class RaingaugeDetailPageModule {}
