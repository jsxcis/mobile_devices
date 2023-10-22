import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { BoreSettingsPageRoutingModule } from './bore-settings-routing.module';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-bore-settings',
  templateUrl: './bore-settings.page.html',
  styleUrls: ['./bore-settings.page.scss'],
})
export class BoreSettingsPage implements OnInit {
  public bore: any;
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
  public deviceStatus: boolean;
  // context data
  public displayContext:string; 
  //Bore Specific
  public boreCurrent: string;
  public boreFlowRate: string;
  public boreStatus: string;
  public boreState: string;
  public boreVolume: string;
  public boreOnPulseDuration: string;
  // flowMeter
  public flowMeterDetail: any;

  public flowLPerPulse: string;
  public flowLPerScan: string;
  public flowPulsesPerScan: string;
  
  public flowTimeStamp: string;
  public flowAccumFreq: string;


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
    deviceLAT: '0',
    deviceLONG: '0',
    flowAccumFreq: '', // Editable fields
    flowLPerPulse: '',
    deviceVersion:'',
    boreOnPulseDuration:'',
    deviceComm:'',
    deviceStatus: ''
  };
  public boreData: any;
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
      // context data
      this.displayContext = params["displayContext"];
    });
   console.log(this.deviceID);
    this.loadBoreDetail();
  }
 
  loadBoreDetail()
  {
   console.log("settings-loadBoreDetail:" + this.deviceID);
   console.log("showDetail");
    this.getCurrentDevice();
    this.postData.deviceID = this.deviceID;
  console.log(" for:")
   console.log(this.postData.deviceID);
    this.postData.req = "settings";
  
    this.xcisService.retrieveBores(this.postData).subscribe((res:any) => {
      this.bore = res.boreData;
      this.deviceID = this.bore[0].deviceID;
      this.deviceName = this.bore[0].deviceName;
      this.deviceIP = this.bore[0].deviceIP;
      this.deviceLAT = this.bore[0].deviceLAT;
      this.deviceLONG = this.bore[0].deviceLONG;
      this.deviceMode = this.bore[0].deviceMode;
      this.deviceStatusDate = this.bore[0].deviceStatusDate;
      this.deviceType = this.bore[0].deviceType;
      this.loraID = this.bore[0].loraID;
      if (this.bore[0].deviceStatus == "Active")
      {
        this.deviceStatus = true;
      }
      else
      {
        this.deviceStatus = false;
      }
      this.deviceComm = this.bore[0].deviceComm;
      this.deviceBattery = this.bore[0].deviceBattery;
      this.deviceVersion = this.bore[0].deviceVersion;
      this.deviceUID = this.bore[0].deviceUID;

      this.boreCurrent = this.bore[0].boreCurrent;
      this.boreFlowRate = this.bore[0].boreFlowRate;
      this.boreStatus = this.bore[0].boreStatus;
      this.boreState = this.bore[0].boreState;
      this.boreVolume = this.bore[0].boreVolume;
      this.boreOnPulseDuration = this.bore[0].boreOnPulseDuration;

      this.flowLPerPulse = this.bore[0].flowLPerPulse;
      this.flowLPerScan = this.bore[0].flowLPerScan;
      this.flowPulsesPerScan = this.bore[0].flowPulsesPerScan;
      this.flowTimeStamp = this.bore[0].flowTimeStamp;
      this.flowAccumFreq = this.bore[0].flowAccumFreq;
      
      },
      (error: any) => {
       // console.log("Network connection error retrieving flowMeter detail");
       // console.log(error);
        this.toastService.presentToast('Network connection error retrieving flowMeter detail');
      }
      )
  }
  saveSettings()
  {
   console.log("saveSettings")
    this.postSettings.req = "save";
    this.postSettings.deviceID = this.deviceID;
    this.postSettings.deviceName = this.deviceName;
    this.postSettings.deviceIP = this.deviceIP;
    this.postSettings.loraID = this.loraID;
    this.postSettings.deviceLAT = this.deviceLAT;
    this.postSettings.deviceLONG = this.deviceLONG;
    this.postSettings.flowAccumFreq = this.flowAccumFreq;
    this.postSettings.flowLPerPulse = this.flowLPerPulse;
    this.postSettings.deviceVersion = this.deviceVersion;
    this.postSettings.boreOnPulseDuration = this.boreOnPulseDuration;
    this.postSettings.deviceComm = this.deviceComm;
    if (this.deviceStatus == true)
    {
      this.postSettings.deviceStatus = "Active";
    }
    else if (this.deviceStatus == false)
    {
      this.postSettings.deviceStatus = "Inactive";
    }
    else
    {
      this.postSettings.deviceStatus = "Error";
    }


    this.xcisService.saveBoreSettings(this.postSettings).subscribe((res:any) => {
    this.boreData = res.boreData;
    this.deviceID = this.boreData[0].deviceID;
    this.responseStatus = this.boreData[0].responseStatus;
      },
      (error: any) => {
       // console.log("Network connection error retrieving flow meterdetail");
       // console.log(error);
        this.toastService.presentToast('Network connection error retrieving flow meter detail');
      }
      )
      // Need to write some of the data to the sensor
    this.xcisService.writeDeviceConfig(this.postSettings).subscribe((res:any) => {
      },
      (error: any) => {
      // console.log("Network connection error retrieving flow meterdetail");
      // console.log(error);
        this.toastService.presentToast('Network connection error retrieving flow meter detail');
      }
      )

      if (this.deviceStatus == true)
      {
        this.xcisService.activateDeviceConfig(this.postSettings).subscribe((res:any) => {
        },
        (error: any) => {
        // console.log("Network connection error retrieving flow meterdetail");
        // console.log(error);
          this.toastService.presentToast('Network connection error retrieving flow meter detail');
        }
        )
      }
      else if (this.deviceStatus == false)
      {
        this.postSettings.deviceStatus = "Inactive";
        this.xcisService.deactivateDeviceConfig(this.postSettings).subscribe((res:any) => {
        },
        (error: any) => {
        // console.log("Network connection error retrieving flow meterdetail");
        // console.log(error);
          this.toastService.presentToast('Network connection error retrieving flow meter detail');
        }
        )
      }
      //this.loadFlowMeterDetail();
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
    console.log("deviceDetail for:" + this.deviceID + this.deviceType + this.boreState);
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
        "deviceComm":this.deviceComm,
        "deviceBattery":this.deviceBattery,
        "deviceVersion":this.deviceVersion,
        "deviceUID":this.deviceUID,
        "deviceStatus":this.postSettings.deviceStatus,
        "displayContext":this.displayContext,

        "boreCurrent":this.boreCurrent,
        "boreFlowRate":this.boreFlowRate,
        "boreStatus":this.boreStatus,
        "boreState":this.boreState,
        "boreVolume":this.boreVolume,
        "boreOnPulseDuration":this.boreOnPulseDuration,

        //flow meter detail
        "flowMMPerPulse": this.flowLPerPulse,
        "flowLPerScan": this.flowLPerScan,
        "flowPulsesPerScan": this.flowPulsesPerScan,
        "flowTimeStamp":this.flowTimeStamp,
        "flowAccumFreq":this.flowAccumFreq,
       
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Tank" etc)
    this.router.navigate(['home/bore-detail'],navigationExtras);
  }

}
