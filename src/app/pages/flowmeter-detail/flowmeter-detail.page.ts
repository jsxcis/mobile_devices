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
  selector: 'app-flowmeter-detail',
  templateUrl: './flowmeter-detail.page.html',
  styleUrls: ['./flowmeter-detail.page.scss'],
})
export class FlowmeterDetailPage implements OnInit {
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

  // flow meter
  public flowMeterDetail: any;

  public flowLPerPulse: string;
  public flowLPerScan: string;
  public flowPulsesPerScan: string;

  public flowingFlag: string;
  public flowTimeStamp: string;
  public flowAccumFreq: string;
  public flowDate: string;
  public flowRate: string;

  
  public flowDailyL: string;
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
      this.deviceStatus = params["deviceStatus"];

      // flow meter

      this.flowLPerPulse = params["flowLPerPulse"];
      this.flowLPerScan = params["flowLPerScan"];
      this.flowPulsesPerScan = params["flowPulsesPerScan"];

      this.flowingFlag = params["flowingFlag"];
      this.flowTimeStamp = params["flowTimeStamp"];
      this.flowAccumFreq = params["flowAccumFreq"];
      this.flowDate = params["flowDate"];
      this.flowRate = params["flowRate"];

    });
   //console.log(this.deviceID);
   // console.log(this.deviceName);
   // console.log(this.deviceType);
    this.storageService.store("DEVICEID", this.deviceID);
    this.storageService.store("DEVICETYPE",this.deviceType);
    this.loadFlowMeterDetail(this.deviceID); // Calculated data
  }
  loadFlowMeterDetail(deviceID:string)
  {
   // console.log("loadFlowMeterDetail");
    this.deviceID = deviceID;
   // console.log("showDetail");
    this.postData.deviceID = deviceID;
  
   // console.log(" for:")
   // console.log(this.postData.deviceID);
    this.postData.req = "detail";
    this.xcisService.retrieveFlowMeterDetail(this.postData).subscribe((res:any) => {
    this.flowMeterDetail = res.flowMeterDetail;
    this.flowDailyL = this.flowMeterDetail[0].flowDailyL;
    this.weeklyTotal = this.flowMeterDetail[0].flowWeeklyTotal;
    this.monthlyTotal = this.flowMeterDetail[0].flowMonthlyTotal;
    this.quarterlyTotal = this.flowMeterDetail[0].flowQuarterlyTotal;
    this.yearlyTotal = this.flowMeterDetail[0].flowYearlyTotal;
    this.allTimeTotal = this.flowMeterDetail[0].flowAllTimeTotal;

   // console.log(this.flowDailyL);
    },
    (error: any) => {
    //  console.log("Network connection error retrieving  flow meter detail");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving flow meter detail');
    }
    )
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
    this.router.navigate(['home/flowmeter-settings'],navigationExtras);
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
