import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trough-detail',
  templateUrl: './trough-detail.page.html',
  styleUrls: ['./trough-detail.page.scss'],
})
export class TroughDetailPage implements OnInit {
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

  //Trough fields
  public troughValue: string;
  public troughOverFlowHeight: string;
  public availDepth: string;
  public totalDepth :string;
  public troughEmptyHeight: string;
  public troughFullHeight: string;
  public troughStatus: string;
  public deviceLevel: string;

  constructor(private route: ActivatedRoute,
    private menu:MenuController,
    private router: Router,
    private storageService: StorageService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
    //console.log("Loading detail on enter");
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

      // Troughs
      this.troughValue = params ["troughValue"];
      this.troughOverFlowHeight = params["troughOverFlowHeight"];
      this.availDepth = params["availDepth"];
      this.totalDepth = params["totalDepth"];
      this.troughEmptyHeight = params["troughEmptyHeight"];
      this.troughFullHeight = params["troughFullHeight"];
      this.troughStatus = params["troughStatus"];
      this.deviceLevel = params["deviceLevel"];

    });
    //console.log(this.deviceID);
    //console.log(this.deviceName);
    //console.log(this.deviceType);
    this.storageService.store("DEVICEID", this.deviceID);
    this.storageService.store("DEVICETYPE",this.deviceType);
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    //console.log("Called OpenFirst");
  }
  //getCurrentDevice(){ 
  //  this.storageService.get("DEVICEID").then(res => {
  //    //console.log(res);
  //    this.deviceID = res;
  //  })
  //}
  menuOpened()
  {
   // console.log("Menu Opened");
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
    this.router.navigate(['home/trough-settings'],navigationExtras);
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
