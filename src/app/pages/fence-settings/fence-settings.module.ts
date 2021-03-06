import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FenceSettingsPageRoutingModule } from './fence-settings-routing.module';

import { FenceSettingsPage } from './fence-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FenceSettingsPageRoutingModule
  ],
  declarations: [FenceSettingsPage]
})
export class FenceSettingsPageModule {}
