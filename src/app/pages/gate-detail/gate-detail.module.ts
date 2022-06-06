import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GateDetailPageRoutingModule } from './gate-detail-routing.module';

import { GateDetailPage } from './gate-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GateDetailPageRoutingModule
  ],
  declarations: [GateDetailPage]
})
export class GateDetailPageModule {}
