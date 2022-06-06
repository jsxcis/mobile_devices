import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FenceDetailPageRoutingModule } from './fence-detail-routing.module';

import { FenceDetailPage } from './fence-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FenceDetailPageRoutingModule
  ],
  declarations: [FenceDetailPage]
})
export class FenceDetailPageModule {}
