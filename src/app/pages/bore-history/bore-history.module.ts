import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoreHistoryPageRoutingModule } from './bore-history-routing.module';

import { BoreHistoryPage } from './bore-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoreHistoryPageRoutingModule
  ],
  declarations: [BoreHistoryPage]
})
export class BoreHistoryPageModule {}
