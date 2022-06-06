import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankDetailPageRoutingModule } from './tank-detail-routing.module';

import { TankDetailPage } from './tank-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankDetailPageRoutingModule
  ],
  declarations: [TankDetailPage]
})
export class TankDetailPageModule {}
