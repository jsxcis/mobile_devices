import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleMapsComponent} from './google-maps/google-maps.component';



@NgModule({
  declarations: [SliderComponent,StartComponent,LogoComponent, GoogleMapsComponent],
  exports:[SliderComponent,StartComponent,LogoComponent,GoogleMapsComponent],
  imports: [
    CommonModule,FormsModule,IonicModule
  ]
})
export class ComponentsModule { }




