import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppDetailsPageRoutingModule } from './app-details-routing.module';

import { AppDetailsPage } from './app-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppDetailsPageRoutingModule
  ],
  declarations: [AppDetailsPage]
})
export class AppDetailsPageModule {}
