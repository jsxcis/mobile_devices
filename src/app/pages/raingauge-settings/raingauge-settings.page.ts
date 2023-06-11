import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { RaingaugeSettingsPageRoutingModule } from './raingauge-settings-routing.module';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-raingauge-settings',
  templateUrl: './raingauge-settings.page.html',
  styleUrls: ['./raingauge-settings.page.scss'],
})
export class RaingaugeSettingsPage implements OnInit {
  public rainGauge: any;
  public deviceID: string;
  public deviceName: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceType: string;
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string;
  public deviceLONG: string;
  public deviceStatus: boolean;
  // rain gauge
  public rainGaugeDetail: any;

  public rainMMPerPulse: string;
  public rainMMPerScan: string;
  public rainPulsesPerScan: string;

  public rainingFlag: string;
  public rainTimeStamp: string;
  public rainAccumFreq: string;
  public rainDate: string;

  

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
    rainAccumFreq: '', // Editable fields
    rainMMPerPulse: '',
    deviceStatus: ''
  };
  public rainGaugeData: any;
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
    //console.log(this.deviceID);
    this.loadRainGaugeDetail();
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
  loadRainGaugeDetail()
  {
    //console.log("loadRainGaugeDetail:" + this.deviceID);
   // console.log("showDetail");
    this.getCurrentDevice();
    this.postData.deviceID = this.deviceID;
    //console.log(" for:")
    //console.log(this.postData.deviceID);
    this.postData.req = "settings";
  
    this.xcisService.retrieveRainGauges(this.postData).subscribe((res:any) => {
      this.rainGauge = res.rainGaugeData;
      this.deviceID = this.rainGauge[0].deviceID;
      this.deviceName = this.rainGauge[0].deviceName;
      this.deviceIP = this.rainGauge[0].deviceIP;
      this.deviceLAT = this.rainGauge[0].deviceLAT;
      this.deviceLONG = this.rainGauge[0].deviceLONG;
      this.deviceMode = this.rainGauge[0].deviceMode;
      this.deviceStatusDate = this.rainGauge[0].deviceStatusDate;
      this.deviceType = this.rainGauge[0].deviceType;
      this.loraID = this.rainGauge[0].loraID;
      if (this.rainGauge[0].deviceStatus == "Active")
      {
        this.deviceStatus = true;
      }
      else
      {
        this.deviceStatus = false;
      }
      // tanks
      this.rainMMPerPulse = this.rainGauge[0].rainMMPerPulse;
      this.rainMMPerScan = this.rainGauge[0].rainMMPerScan;
      this.rainPulsesPerScan = this.rainGauge[0].rainPulsesPerScan;
      this.rainingFlag = this.rainGauge[0].rainingFlag;
      this.rainTimeStamp = this.rainGauge[0].rainTimeStamp;
      this.rainAccumFreq = this.rainGauge[0].rainAccumFreq;
      this.rainDate = this.rainGauge[0].rainDate;
      },
      (error: any) => {
      //  console.log("Network connection error retrieving rainGauge detail");
      //  console.log(error);
        this.toastService.presentToast('Network connection error retrieving rainGauge detail');
      }
      )
  }
  saveSettings()
  {
    //console.log("saveSettings")
    this.postSettings.req = "save";
    this.postSettings.deviceID = this.deviceID;
    this.postSettings.deviceName = this.deviceName;
    this.postSettings.deviceIP = this.deviceIP;
    this.postSettings.loraID = this.loraID;
    this.postSettings.deviceLAT = this.deviceLAT;
    this.postSettings.deviceLONG = this.deviceLONG;
    this.postSettings.rainAccumFreq = this.rainAccumFreq;
    this.postSettings.rainMMPerPulse = this.rainMMPerPulse;
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

    this.xcisService.saveRainGaugeSettings(this.postSettings).subscribe((res:any) => {
    this.rainGaugeData = res.rainGaugeData;
    this.deviceID = this.rainGaugeData[0].deviceID;
    this.responseStatus = this.rainGaugeData[0].responseStatus;
      },
      (error: any) => {
       // console.log("Network connection error retrieving rain gauge detail");
       // console.log(error);
        this.toastService.presentToast('Network connection error retrieving rain gauge detail');
      }
      )
      //this.loadRainGaugeDetail();
      this.deviceDetail();
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
        "deviceStatus":this.postSettings.deviceStatus,
      
        //rain gauge detail
        "rainMMPerPulse": this.rainMMPerPulse,
        "rainMMPerScan": this.rainMMPerScan,
        "rainPulsesPerScan": this.rainPulsesPerScan,
        "rainingFlag": this.rainingFlag,
        "rainTimeStamp":this.rainTimeStamp,
        "rainAccumFreq":this.rainAccumFreq,
        "rainDate":this.rainDate
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Tank" etc)
    this.router.navigate(['home/rainGauge-detail'],navigationExtras);
  }

}
