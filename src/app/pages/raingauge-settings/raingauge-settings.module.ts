import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaingaugeSettingsPageRoutingModule } from './raingauge-settings-routing.module';

import { RaingaugeSettingsPage } from './raingauge-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaingaugeSettingsPageRoutingModule
  ],
  declarations: [RaingaugeSettingsPage]
})
export class RaingaugeSettingsPageModule {}
