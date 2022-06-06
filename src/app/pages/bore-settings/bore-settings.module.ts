import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoreSettingsPageRoutingModule } from './bore-settings-routing.module';

import { BoreSettingsPage } from './bore-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoreSettingsPageRoutingModule
  ],
  declarations: [BoreSettingsPage]
})
export class BoreSettingsPageModule {}
