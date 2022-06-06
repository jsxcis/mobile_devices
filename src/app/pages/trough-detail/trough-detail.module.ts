import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TroughDetailPageRoutingModule } from './trough-detail-routing.module';

import { TroughDetailPage } from './trough-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TroughDetailPageRoutingModule
  ],
  declarations: [TroughDetailPage]
})
export class TroughDetailPageModule {}
