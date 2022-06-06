import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoreDetailPageRoutingModule } from './bore-detail-routing.module';

import { BoreDetailPage } from './bore-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoreDetailPageRoutingModule
  ],
  declarations: [BoreDetailPage]
})
export class BoreDetailPageModule {}
