import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { StorageService } from './services/storage.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public deviceID: string;
  public deviceType: string;

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService,
    public menuCtrl: MenuController,
    public navCtrl: NavController) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  deviceSettings(){
    this.getCurrentDevice();
    console.log("settingsAdmin for:" + this.deviceID + this.deviceType);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":this.deviceID
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Trough" etc)
    this.router.navigate(['home/trough-settings'],navigationExtras);
    this.menuCtrl.close();
  }
  deviceHistory(){
    this.getCurrentDevice();
    console.log("history for:" + this.deviceID);
  }
  getCurrentDevice(){ 
    this.storageService.get("DEVICEID").then(res => {
      //console.log(res);
      this.deviceID = res;
    })
    this.storageService.get("DEVICETYPE").then(res => {
      //console.log(res);
      this.deviceType = res;
    })
  }
  menuOpened()
  {
    console.log("Menu Opened");
    this.getCurrentDevice();
  }
  menuClosed()
  {
    console.log("Menu Closed");
  }
}
