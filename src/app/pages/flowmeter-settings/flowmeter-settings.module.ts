import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlowmeterSettingsPageRoutingModule } from './flowmeter-settings-routing.module';

import { FlowmeterSettingsPage } from './flowmeter-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowmeterSettingsPageRoutingModule
  ],
  declarations: [FlowmeterSettingsPage]
})
export class FlowmeterSettingsPageModule {}
