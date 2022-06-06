import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { FenceSettingsPageRoutingModule } from './fence-settings-routing.module';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-fence-settings',
  templateUrl: './fence-settings.page.html',
  styleUrls: ['./fence-settings.page.scss'],
})
export class FenceSettingsPage implements OnInit {
  public fence: any;
  public deviceID: string;
  public deviceName: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceType: string;
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string;
  public deviceLONG: string;
  //Tanks
  public fenceValue: string;
  public fenceMultiplier: string;
  public fenceLowValue: string;
  public fenceOffValue :string;
  public fenceVoltage: string;
  public fenceOnValue: string;
  public fenceStatus: string;

  public postData = {
    userID: 'jsharp',
    req: 'all',
    deviceID : "all"
  };
  public postSettings = {// Editable fields
    userID: 'jsharp',
    req: '',
    deviceID:'',
    deviceName: '',
    deviceIP: '',
    loraID: '',
    deviceLAT: '',
    deviceLONG: '',
    fenceMultiplier: '', // Editable fields
    fenceLowValue: '',
    fenceOffValue: '',
    fenceOnValue: ''
  };
  public fenceData: any;
  public responseStatus: string

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private xcisService: XcisService,
    private toastService: ToastService,
    public http: HttpClient,
    public navCtrl: NavController,
    private storageService: StorageService) { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
   // console.log("Loading detail on enter");
      this.route.queryParams.subscribe(params => {
      this.deviceID = params["deviceID"];
    });
   // console.log(this.deviceID);
    this.loadFenceDetail();
  }
  loadFenceDetail()
  {
   // console.log("loadFenceDetail:" + this.deviceID);
   // console.log("showDetail");
    this.getCurrentDevice();
    this.postData.deviceID = this.deviceID;
  //  console.log(" for:")
  //  console.log(this.postData.deviceID);
    this.postData.req = "settings";
  
    this.xcisService.retrieveFences(this.postData).subscribe((res:any) => {
      this.fence = res.fenceData;
      this.deviceID = this.fence[0].deviceID;
      this.deviceName = this.fence[0].deviceName;
      this.deviceIP = this.fence[0].deviceIP;
      this.deviceLAT = this.fence[0].deviceLAT;
      this.deviceLONG = this.fence[0].deviceLONG;
      this.deviceMode = this.fence[0].deviceMode;
      this.deviceStatusDate = this.fence[0].deviceStatusDate;
      this.deviceType = this.fence[0].deviceType;
      this.loraID = this.fence[0].loraID;
      // tanks
      this.fenceValue = this.fence[0].fenceValue;
      this.fenceMultiplier = this.fence[0].fenceMultiplier;
      this.fenceLowValue = this.fence[0].fenceLowValue;
      this.fenceOffValue = this.fence[0].fenceOffValue;
      this.fenceVoltage = this.fence[0].fenceVoltage;
      this.fenceOnValue = this.fence[0].fenceOnValue;
      this.fenceStatus = this.fence[0].fenceStatus;
      },
      (error: any) => {
       // console.log("Network connection error retrieving fence detail");
       // console.log(error);
        this.toastService.presentToast('Network connection error retrieving fence detail');
      }
      )
  }
  saveSettings()
  {
   // console.log("saveSettings")
    this.postSettings.req = "save";
    this.postSettings.deviceID = this.deviceID;
    this.postSettings.deviceName = this.deviceName;
    this.postSettings.deviceIP = this.deviceIP;
    this.postSettings.loraID = this.loraID;
    this.postSettings.deviceLAT = this.deviceLAT;
    this.postSettings.deviceLONG = this.deviceLONG;
    this.postSettings.fenceMultiplier = this.fenceMultiplier;
    this.postSettings.fenceLowValue = this.fenceLowValue;
    this.postSettings.fenceOffValue = this.fenceOffValue;
    this.postSettings.fenceOnValue = this.fenceOnValue;

    this.xcisService.saveFenceSettings(this.postSettings).subscribe((res:any) => {
    this.fenceData = res.fenceData;
    this.deviceID = this.fenceData[0].deviceID;
    this.responseStatus = this.fenceData[0].responseStatus;
      },
      (error: any) => {
      //  console.log("Network connection error retrieving tank detail");
      //  console.log(error);
        this.toastService.presentToast('Network connection error retrieving tank detail');
      }
      )
      //this.loadFenceDetail();
      this.deviceDetail();
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
  deviceDetail(){
   // console.log("deviceDetail for:" + this.deviceID + this.deviceType);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":this.deviceID,
        "deviceName":this.deviceName,
        "deviceIP":this.deviceIP,
        "deviceLAT":this.deviceLAT,
        "deviceLONG":this.deviceLONG,
        "deviceMode":this.deviceMode,
        "deviceStatusDate": this.deviceStatusDate,
        "deviceType":this.deviceType,
        "loraID":this.loraID,
      
        //tanks
        "fenceValue": this.fenceValue,
        "fenceMultiplier": this.fenceMultiplier,
        "fenceLowValue": this.fenceLowValue,
        "fenceOffValue": this.fenceOffValue,
        "fenceVoltage":this.fenceVoltage,
        "fenceOnValue":this.fenceOnValue,
        "fenceStatus":this.fenceStatus
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Tank" etc)
    this.router.navigate(['home/fence-detail'],navigationExtras);
  }

}
