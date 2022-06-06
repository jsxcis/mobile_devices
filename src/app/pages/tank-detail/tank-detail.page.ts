import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.page.html',
  styleUrls: ['./tank-detail.page.scss'],
})
export class TankDetailPage implements OnInit {
  public deviceID: string;
  public deviceName: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceType: string;
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string;
  public deviceLONG: string;
  public deviceComm: string;
  public deviceBattery: string;
  public deviceVersion: string;
  public deviceUID: string;
  //Tanks
  public totalVolume: string;
  public availVolume: string;
  public reserveDepth: string;
  public deviceLevel :string;
  public availDepth: string;
  public totalDepth: string;
  public reserveVolume: string;

  public status: string;

  constructor(private route: ActivatedRoute,
    private menu:MenuController,
    private router: Router,
    private storageService: StorageService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
    console.log("Loading detail on enter");
    this.route.queryParams.subscribe(params => {
      this.deviceID = params["deviceID"];
      this.deviceName = params["deviceName"];
      this.deviceIP = params["deviceIP"];
      this.deviceLAT = params["deviceLAT"];
      this.deviceLONG = params["deviceLONG"];
      this.deviceMode = params["deviceMode"];
      this.deviceStatusDate = params["deviceStatusDate"];
      this.deviceType = params["deviceType"];
      this.loraID = params["loraID"];

      this.deviceComm = params["deviceComm"];
      this.deviceBattery = params["deviceBattery"];
      this.deviceVersion = params["deviceVersion"];
      this.deviceUID = params["deviceUID"];


      // Tanks
      this.totalVolume = params ["totalVolume"];
      this.availVolume = params["availVolume"];
      this.reserveDepth = params["reserveDepth"];
      this.reserveVolume = params["reserveVolume"];
      this.deviceLevel = params["deviceLevel"];
      this.availDepth = params["availDepth"];
      this.totalDepth = params["totalDepth"];
  

    });
   // console.log(this.deviceID);
    //console.log(this.deviceName);
   // console.log(this.deviceType);
    this.storageService.store("DEVICEID", this.deviceID);
    this.storageService.store("DEVICETYPE",this.deviceType);
  }
  deviceSettings(){
   // console.log("settingsAdmin for:" + this.deviceID + this.deviceType);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":this.deviceID
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Trough" etc)
    this.router.navigate(['home/tank-settings'],navigationExtras);
  }
  deviceList(){
    //console.log("deviceList");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":this.deviceID
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Trough" etc)
    this.router.navigate(['home/devices'],navigationExtras);
  }
}
