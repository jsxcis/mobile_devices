import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {
  displayUserData: any;
  public xmlItems: any;
  public tanks: any;
  public bores: any;
  public troughs: any;
  public fences: any;
  public weatherStns: any;
  public rainGauges: any;
  public flowMeters: any;
  public rainGaugeDetail: any;
  public deviceID:string;
  public rainDailyMM: string;


  item:DataTransferItem;

  public postData = {
   userID: 'jsharp',
   req: 'all',
   deviceID : "all"
 };

  constructor(
    private router: Router,
    private authService: AuthService,
    private xcisService: XcisService,
    private toastService: ToastService,
    public http: HttpClient,
    public navCtrl: NavController) 
    {
    }

  ngOnInit() {
    this.authService.userData$.subscribe((res:any)=> {
        this.displayUserData = res;
    })
    //this.loadXML();
    //console.log("device page ngOnInit")
    this.loadTanks();
    this.loadBores();
    this.loadTroughs();
    this.loadFences();
    this.loadWeatherStns();
    this.loadRainGauges();
    this.loadFlowMeters();
  }
  ionViewWillEnter()
  {
    //this.loadXML();
    //console.log("device page   ionViewWillEnter");
    this.loadTanks();
    this.loadBores();
    this.loadTroughs();
    this.loadFences();
    this.loadWeatherStns();
    this.loadRainGauges();
    this.loadFlowMeters();
  }

  showTankDetail(deviceID:string,item)
  {
    this.deviceID = deviceID;
    //console.log("showDetail");
    //console.log(item.deviceID);
    //console.log(item.deviceLevel);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":item.deviceID,
        "deviceName":item.deviceName,
        "totalVolume":item.totalVolume,
        "deviceStatusDate":item.deviceStatusDate,
        "deviceMode":item.deviceMode,
        "availVolume":item.availVolume,
        "reserveDepth":item.reserveDepth,
        "reserveVolume":item.reserveVolume,
        "deviceLevel":item.deviceLevel,
        "availDepth":item.availDepth,
        "totalDepth":item.totalDepth,
        "deviceType":item.deviceType,
        "deviceIP":item.deviceIP,
        "loraID":item.loraID,
        "deviceLAT":item.deviceLAT,
        "deviceLONG":item.deviceLONG,
        "deviceComm":item.deviceComm,
        "deviceBattery":item.deviceBattery,
        "deviceVersion":item.deviceVersion,
        "deviceUID":item.deviceUID
      }
    };
    this.router.navigate(['home/tank-detail'],navigationExtras);
  }
  showBoreDetail(deviceID:string,item)
  {
    this.deviceID = deviceID;
    //console.log("showDetail");
    //console.log(item.deviceID);
    //console.log(item.deviceLevel);
    //console.log(item.boreOnPulseDuration);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":item.deviceID,
        "deviceName":item.deviceName,
        "boreCurrent":item.boreCurrent,
        "boreFlowRate":item.boreFlowRate,
        "deviceStatusDate":item.deviceStatusDate,
        "deviceMode":item.deviceMode,
        "boreStatus":item.boreStatus,
        "boreState":item.boreState,
        "boreVolume":item.boreVolume,
        "deviceType":item.deviceType,
        "deviceIP":item.deviceIP,
        "loraID":item.loraID,
        "deviceLAT":item.deviceLAT,
        "deviceLONG":item.deviceLONG,
        "deviceComm":item.deviceComm,
        "deviceBattery":item.deviceBattery,
        "deviceVersion":item.deviceVersion,
        "deviceUID":item.deviceUID,
        "boreOnPulseDuration":item.boreOnPulseDuration,
        "flowLPerScan":item.flowLPerScan,
        "flowLPerPulse":item.flowLPerPulse,
        "flowPulsesPerScan":item.flowPulsesPerScan,
        "flowTimeStamp":item.flowTimeStamp,
        "flowAccumFreq":item.flowAccumFreq
      }
    };
    this.router.navigate(['home/bore-detail'],navigationExtras);
  }
  showTroughDetail(deviceID:string,item)
  {
    this.deviceID = deviceID;
   // console.log("showDetail");
   // console.log(item.deviceID);
   // console.log(item.deviceLevel);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":item.deviceID,
        "deviceName":item.deviceName,
        "troughValue":item.troughValue,
        "deviceStatusDate": item.deviceStatusDate,
        "deviceMode":item.deviceMode,
        "troughOverFlowHeight":item.troughOverFlowHeight,
        "deviceLevel":item.deviceLevel,
        "availDepth":item.availDepth,
        "totalDepth":item.totalDepth,
        "troughEmptyHeight":item.troughEmptyHeight,
        "troughFullHeight":item.troughFullHeight,
        "troughStatus":item.troughStatus,
        "deviceType":item.deviceType,
        "deviceIP":item.deviceIP,
        "loraID":item.loraID,
        "deviceLAT":item.deviceLAT,
        "deviceLONG":item.deviceLONG,
        "deviceComm":item.deviceComm,
        "deviceBattery":item.deviceBattery,
        "deviceVersion":item.deviceVersion,
        "deviceUID":item.deviceUID
        
      }
    };
    this.router.navigate(['home/trough-detail'],navigationExtras); 
  }
  showFenceDetail(deviceID:string,item)
  {
    this.deviceID = deviceID;
   // console.log("showDetail");
   // console.log(item.deviceID);
   // console.log(item.deviceLevel);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":item.deviceID,
        "deviceName":item.deviceName,
        "deviceStatusDate": item.deviceStatusDate,
        "deviceMode":item.deviceMode,
        "fenceValue":item.fenceValue,
        "fenceMultiplier":item.fenceMultiplier,
        "fenceLowValue":item.fenceLowValue,
        "fenceOffValue":item.fenceOffValue,
        "fenceVoltage":item.fenceVoltage,
        "fenceOnValue":item.fenceOnValue,
        "fenceStatus":item.fenceStatus,
        "deviceType":item.deviceType,
        "deviceIP":item.deviceIP,
        "loraID":item.loraID,
        "deviceLAT":item.deviceLAT,
        "deviceLONG":item.deviceLONG,
        "deviceComm":item.deviceComm,
        "deviceBattery":item.deviceBattery,
        "deviceVersion":item.deviceVersion,
        "deviceUID":item.deviceUID
      }
    };
    this.router.navigate(['home/fence-detail'],navigationExtras);
  
  }
  showWeatherStnDetail(deviceID:string,item)
  {
    this.deviceID = deviceID;
   // console.log("showDetail");
   // console.log(item.deviceID);
   // console.log(item.deviceMode);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":item.deviceID,
        "deviceName":item.deviceName,
        "deviceStatusDate": item.deviceStatusDate,
        "deviceMode":item.deviceMode,
        "rainMMPerHour":item.rainMMPerHour,
        "rainTotalMM":item.rainTotalMM,
        "temperature":item.temperature,
        "humidity":item.humidity,
        "pressure":item.pressure,
        "windSpeed":item.windSpeed,
        "direction":item.direction,
        "deviceType":item.deviceType,
        "deviceIP":item.deviceIP,
        "loraID":item.loraID,
        "deviceLAT":item.deviceLAT,
        "deviceLONG":item.deviceLONG,
        "deviceComm":item.deviceComm,
        "deviceBattery":item.deviceBattery,
        "deviceVersion":item.deviceVersion,
        "deviceUID":item.deviceUID
      }
    };
    this.router.navigate(['home/weather-detail'],navigationExtras);
  }
  showRainGaugeDetail(deviceID:string,item)
  {
    this.deviceID = deviceID;
   // console.log("showDetail");
   // console.log(item.deviceID);
   // console.log(item.deviceMode);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":item.deviceID,
        "deviceName":item.deviceName,
        "deviceStatusDate": item.deviceStatusDate,
        "deviceMode":item.deviceMode,
        "rainMMPerScan":item.rainMMPerScan,
        "rainMMPerPulse":item.rainMMPerPulse,
        "rainPulsesPerScan":item.rainPulsesPerScan,
        "rainingFlag":item.rainingFlag,
        "rainTimeStamp":item.rainTimeStamp,
        "rainAccumFreq":item.rainAccumFreq,
        "rainDate":item.rainDate,
        "deviceType":item.deviceType,
        "deviceIP":item.deviceIP,
        "loraID":item.loraID,
        "deviceLAT":item.deviceLAT,
        "deviceLONG":item.deviceLONG,
        "deviceComm":item.deviceComm,
        "deviceBattery":item.deviceBattery,
        "deviceVersion":item.deviceVersion,
        "deviceUID":item.deviceUID
      }
    };
    this.router.navigate(['home/rainGauge-detail'],navigationExtras);
  }
  showFlowMeterDetail(deviceID:string,item)
  {
    this.deviceID = deviceID;
   // console.log("showFlowMeterDetail");
   // console.log(item.deviceID);
   // console.log(item.deviceMode);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":item.deviceID,
        "deviceName":item.deviceName,
        "deviceStatusDate": item.deviceStatusDate,
        "deviceMode":item.deviceMode,
        "flowLPerScan":item.flowLPerScan,
        "flowLPerPulse":item.flowLPerPulse,
        "flowPulsesPerScan":item.flowPulsesPerScan,
        "flowingFlag":item.flowingFlag,
        "flowTimeStamp":item.flowTimeStamp,
        "flowAccumFreq":item.flowAccumFreq,
        "flowDate":item.flowDate,
        "flowRate":item.flowRate,
        "deviceType":item.deviceType,
        "deviceIP":item.deviceIP,
        "loraID":item.loraID,
        "deviceLAT":item.deviceLAT,
        "deviceLONG":item.deviceLONG,
        "deviceComm":item.deviceComm,
        "deviceBattery":item.deviceBattery,
        "deviceVersion":item.deviceVersion,
        "deviceUID":item.deviceUID
      }
    };
    this.router.navigate(['home/flowMeter-detail'],navigationExtras);
  }
  loadFlowMeters()
  {
      //console.log("loadFlowMeters");
      this.xcisService.retrieveFlowMeters(this.postData).subscribe((res:any) => {
      this.flowMeters = res.flowMeterData;
      //for(var k in this.tanks)
      //{
       //  console.log(this.tanks[k].deviceName);
        // console.log(this.tanks[k].totalVolume);
      //}  
    },
    (error: any) => {
      //console.log("Network connection error retrieving flow meters");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving flow meters');
    }
    )
  }
  loadRainGauges()
  {
      //console.log("loadRainGauges");
      this.xcisService.retrieveRainGauges(this.postData).subscribe((res:any) => {
      this.rainGauges = res.rainGaugeData;
      //for(var k in this.tanks)
      //{
       //  console.log(this.tanks[k].deviceName);
        // console.log(this.tanks[k].totalVolume);
      //}  
    },
    (error: any) => {
     // console.log("Network connection error retrieving rain gauges");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving rain gauges');
    }
    )
  }
  loadWeatherStns()
  {
     // console.log("loadWeatherStns");
      this.xcisService.retrieveWeatherStns(this.postData).subscribe((res:any) => {
      this.weatherStns = res.weatherStnData;
      //for(var k in this.tanks)
      //{
       //  console.log(this.tanks[k].deviceName);
        // console.log(this.tanks[k].totalVolume);
      //}  
    },
    (error: any) => {
     // console.log("Network connection error retrieving weather stations");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving weather stations');
    }
    )
  }
  loadFences()
  {
     // console.log("loadFences");
      this.xcisService.retrieveFences(this.postData).subscribe((res:any) => {
      this.fences = res.fenceData;
      //for(var k in this.tanks)
      //{
       //  console.log(this.tanks[k].deviceName);
        // console.log(this.tanks[k].totalVolume);
      //}  
    },
    (error: any) => {
     // console.log("Network connection error retrieving fences");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving fences');
    }
    )
  }
  loadTroughs()
  {
     // console.log("loadTroughs");
      this.xcisService.retrieveTroughs(this.postData).subscribe((res:any) => {
      this.troughs = res.troughData;
      //for(var k in this.tanks)
      //{
       //  console.log(this.tanks[k].deviceName);
        // console.log(this.tanks[k].totalVolume);
      //}  
    },
    (error: any) => {
     // console.log("Network connection error retrieving troughs");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving troughs');
    }
    )
  }
  loadBores()
  {
     // console.log("loadBores");
      this.xcisService.retrieveBores(this.postData).subscribe((res:any) => {
      this.bores = res.boreData;
      //for(var k in this.tanks)
      //{
       //  console.log(this.tanks[k].deviceName);
        // console.log(this.tanks[k].totalVolume);
      //}  
    },
    (error: any) => {
     // console.log("Network connection error retrieving bores");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving bores');
    }
    )
  }
  loadTanks()
  {
    //  console.log("loadTanks");
      this.xcisService.retrieveTanks(this.postData).subscribe((res:any) => {
      this.tanks = res.tankData;
      //for(var k in this.tanks)
      //{
     //  console.log(this.tanks[k].deviceName);
     // console.log(this.tanks[k].totalVolume);
    //  console.log(this.tanks[k].deviceMode);
     // }  
    },
    (error: any) => {
     // console.log("Network connection error retrieving tanks");
    //  console.log(error);
      this.toastService.presentToast('Network connection error retrieving tanks');
    }
    )
  }

}
