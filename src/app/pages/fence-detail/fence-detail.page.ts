import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fence-detail',
  templateUrl: './fence-detail.page.html',
  styleUrls: ['./fence-detail.page.scss'],
})
export class FenceDetailPage implements OnInit {
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
  public deviceStatus: string;

  //Fence
  public fenceValue: string;
  public fenceMultiplier: string;
  public fenceLowValue: string;
  public fenceOffValue :string;
  public fenceVoltage: string;
  public fenceOnValue: string;
  public fenceStatus: string;

  constructor(private route: ActivatedRoute,
    private menu:MenuController,
    private router: Router,
    private storageService: StorageService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
   // console.log("Loading detail on enter");
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
      this.deviceStatus = params["deviceStatus"];

      // Fence
      this.fenceValue = params ["fenceValue"];
      this.fenceMultiplier = params["fenceMultiplier"];
      this.fenceLowValue = params["fenceLowValue"];
      this.fenceOffValue = params["fenceOffValue"];
      this.fenceVoltage = params["fenceVoltage"];
      this.fenceOnValue = params["fenceOnValue"];
      this.fenceStatus = params["fenceStatus"];

    });
   // console.log(this.deviceID);
   // console.log(this.deviceName);
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
    this.router.navigate(['home/fence-settings'],navigationExtras);
  }
  deviceList(){
   // console.log("deviceList");
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
