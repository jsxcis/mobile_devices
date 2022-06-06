import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TroughSettingsPageRoutingModule } from './trough-settings-routing.module';

import { TroughSettingsPage } from './trough-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TroughSettingsPageRoutingModule
  ],
  declarations: [TroughSettingsPage]
})
export class TroughSettingsPageModule {}
