import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankSettingsPageRoutingModule } from './tank-settings-routing.module';

import { TankSettingsPage } from './tank-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankSettingsPageRoutingModule
  ],
  declarations: [TankSettingsPage]
})
export class TankSettingsPageModule {}
