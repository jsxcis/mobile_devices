import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-raingauge-detail',
  templateUrl: './raingauge-detail.page.html',
  styleUrls: ['./raingauge-detail.page.scss'],
})
export class RaingaugeDetailPage implements OnInit {
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
  // Context data
  public displayContext:string;
  // rain gauge
  public rainGaugeDetail: any;

  public rainMMPerPulse: string;
  public rainMMPerScan: string;
  public rainPulsesPerScan: string;

  public rainingFlag: string;
  public rainTimeStamp: string;
  public rainAccumFreq: string;
  public rainDate: string;

  
  public rainDailyMM: string;
  public weeklyTotal: string;
  public monthlyTotal: string;
  public quarterlyTotal: string;
  public yearlyTotal: string;
  public allTimeTotal: string;

  public postData = {
    userID: 'jsharp',
    req: 'all',
    deviceID : "all"
  };

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private xcisService: XcisService,
    private toastService: ToastService,
    public http: HttpClient,
    public navCtrl: NavController,
    private menu: MenuController,
    private router: Router,
    private storageService: StorageService) { }

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
      this.deviceStatus = params["deviceStatus"];
      // context data
      this.displayContext = params["displayContext"];

      // rain gauge

      this.rainMMPerPulse = params["rainMMPerPulse"];
      this.rainMMPerScan = params["rainMMPerScan"];
      this.rainPulsesPerScan = params["rainPulsesPerScan"];

      this.rainingFlag = params["rainingFlag"];
      this.rainTimeStamp = params["rainTimeStamp"];
      this.rainAccumFreq = params["rainAccumFreq"];
      this.rainDate = params["rainDate"];

    });
    //console.log(this.deviceID);
    //console.log(this.deviceName);
    //console.log(this.deviceType);
    this.storageService.store("DEVICEID", this.deviceID);
    this.storageService.store("DEVICETYPE",this.deviceType);
    this.loadRainGaugeDetail(this.deviceID); // Calculated data
  }
  loadRainGaugeDetail(deviceID:string)
  {
    //console.log("loadRainGaugeDetail");
    this.deviceID = deviceID;
    //console.log("showDetail");
    this.postData.deviceID = deviceID;
    //console.log(" for:")
    //console.log(this.postData.deviceID);
    this.postData.req = "detail";
    this.xcisService.retrieveRainGaugeDetail(this.postData).subscribe((res:any) => {
    this.rainGaugeDetail = res.rainGaugeDetail;
    this.rainDailyMM = this.rainGaugeDetail[0].rainDailyMM;
    this.weeklyTotal = this.rainGaugeDetail[0].rainWeeklyTotal;
    this.monthlyTotal = this.rainGaugeDetail[0].rainMonthlyTotal;
    this.quarterlyTotal = this.rainGaugeDetail[0].rainQuarterlyTotal;
    this.yearlyTotal = this.rainGaugeDetail[0].rainYearlyTotal;
    this.allTimeTotal = this.rainGaugeDetail[0].rainAllTimeTotal;

   // console.log(this.rainDailyMM);
    },
    (error: any) => {
     // console.log("Network connection error retrieving rain gauge detail");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving rain gauges');
    }
    )
  }
  deviceSettings(){
    //console.log("settingsAdmin for:" + this.deviceID + this.deviceType);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":this.deviceID,
        "displayContext":this.displayContext
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Trough" etc)
    this.router.navigate(['home/raingauge-settings'],navigationExtras);
  }
  deviceList(){
    //console.log("deviceList");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":this.deviceID,
        "displayContext":this.displayContext
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Trough" etc)
    if (this.displayContext == "Controllable")
    {
      this.router.navigate(['home/devices'],navigationExtras);
    } 
    else // Editable option
    {
      this.router.navigate(['home/configuration'],navigationExtras);
    }
  }

}
