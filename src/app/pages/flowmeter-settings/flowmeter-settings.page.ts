import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { FlowmeterSettingsPageRoutingModule } from './flowmeter-settings-routing.module';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-flowmeter-settings',
  templateUrl: './flowmeter-settings.page.html',
  styleUrls: ['./flowmeter-settings.page.scss'],
})
export class FlowmeterSettingsPage implements OnInit {
  public flowMeter: any;
  public deviceID: string;
  public deviceName: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceType: string;
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string;
  public deviceLONG: string;
  // flowMeter
  public flowMeterDetail: any;

  public flowLPerPulse: string;
  public flowLPerScan: string;
  public flowPulsesPerScan: string;

  public flowingFlag: string;
  public flowTimeStamp: string;
  public flowAccumFreq: string;
  public flowDate: string;
  public flowRate: string;

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
    flowAccumFreq: '', // Editable fields
    flowLPerPulse: ''
  };
  public flowMeterData: any;
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
    this.loadFlowMeterDetail();
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
  loadFlowMeterDetail()
  {
   // console.log("loadFlowMeterDetail:" + this.deviceID);
   // console.log("showDetail");
    this.getCurrentDevice();
    this.postData.deviceID = this.deviceID;
  //  console.log(" for:")
   // console.log(this.postData.deviceID);
    this.postData.req = "settings";
  
    this.xcisService.retrieveFlowMeters(this.postData).subscribe((res:any) => {
      this.flowMeter = res.flowMeterData;
      this.deviceID = this.flowMeter[0].deviceID;
      this.deviceName = this.flowMeter[0].deviceName;
      this.deviceIP = this.flowMeter[0].deviceIP;
      this.deviceLAT = this.flowMeter[0].deviceLAT;
      this.deviceLONG = this.flowMeter[0].deviceLONG;
      this.deviceMode = this.flowMeter[0].deviceMode;
      this.deviceStatusDate = this.flowMeter[0].deviceStatusDate;
      this.deviceType = this.flowMeter[0].deviceType;
      this.loraID = this.flowMeter[0].loraID;
      
      this.flowLPerPulse = this.flowMeter[0].flowLPerPulse;
      this.flowLPerScan = this.flowMeter[0].flowLPerScan;
      this.flowPulsesPerScan = this.flowMeter[0].flowPulsesPerScan;
      this.flowingFlag = this.flowMeter[0].flowingFlag;
      this.flowTimeStamp = this.flowMeter[0].flowTimeStamp;
      this.flowAccumFreq = this.flowMeter[0].flowAccumFreq;
      this.flowDate = this.flowMeter[0].flowDate;
      this.flowRate = this.flowMeter[0].flowRate;
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
   // console.log("saveSettings")
    this.postSettings.req = "save";
    this.postSettings.deviceID = this.deviceID;
    this.postSettings.deviceName = this.deviceName;
    this.postSettings.deviceIP = this.deviceIP;
    this.postSettings.loraID = this.loraID;
    this.postSettings.deviceLAT = this.deviceLAT;
    this.postSettings.deviceLONG = this.deviceLONG;
    this.postSettings.flowAccumFreq = this.flowAccumFreq;
    this.postSettings.flowLPerPulse = this.flowLPerPulse;

    this.xcisService.saveFlowMeterSettings(this.postSettings).subscribe((res:any) => {
    this.flowMeterData = res.flowMeterData;
    this.deviceID = this.flowMeterData[0].deviceID;
    this.responseStatus = this.flowMeterData[0].responseStatus;
      },
      (error: any) => {
       // console.log("Network connection error retrieving flow meterdetail");
       // console.log(error);
        this.toastService.presentToast('Network connection error retrieving flow meter detail');
      }
      )
      //this.loadFlowMeterDetail();
      this.deviceDetail();
  }
  deviceDetail(){
  //  console.log("deviceDetail for:" + this.deviceID + this.deviceType);
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
      
        //flow meter detail
        "flowMMPerPulse": this.flowLPerPulse,
        "flowLPerScan": this.flowLPerScan,
        "flowPulsesPerScan": this.flowPulsesPerScan,
        "flowingFlag": this.flowingFlag,
        "flowTimeStamp":this.flowTimeStamp,
        "flowAccumFreq":this.flowAccumFreq,
        "flowDate":this.flowDate,
        "flowRate":this.flowRate
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Tank" etc)
    this.router.navigate(['home/flowMeter-detail'],navigationExtras);
  }

}
