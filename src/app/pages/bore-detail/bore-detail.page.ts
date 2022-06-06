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
  selector: 'app-bore-detail',
  templateUrl: './bore-detail.page.html',
  styleUrls: ['./bore-detail.page.scss'],
})
export class BoreDetailPage implements OnInit {
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


  public boreDetail: any;

  //Bore Specific
  public boreCurrent: string;
  public boreFlowRate: string;
  public boreStatus: string;
  public boreState: string;
  public boreVolume: string;
  public boreOnPulseDuration: string;


  public flowLPerPulse: string;
  public flowLPerScan: string;
  public flowPulsesPerScan: string;
  public flowTimeStamp: string;
  public flowAccumFreq: string;
  

  public postData = {
    deviceID: 'NOTSET',
    deviceComm: 'NOTSET',
    req: 'all'
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

      // Bores
      this.boreCurrent = params ["boreCurrent"];
      this.boreFlowRate = params["boreFlowRate"];
      this.boreStatus = params["boreStatus"];
      this.boreState = params["boreState"];
      this.boreVolume = params["boreVolume"];
      this.boreOnPulseDuration = params["boreOnPulseDuration"];

      this.flowLPerPulse = params["flowLPerPulse"];
      this.flowLPerScan = params["flowLPerScan"];
      this.flowPulsesPerScan = params["flowPulsesPerScan"];
      this.flowTimeStamp = params["flowTimeStamp"];
      this.flowAccumFreq = params["flowAccumFreq"];

    });
    this.storageService.store("DEVICEID", this.deviceID);
    this.storageService.store("DEVICETYPE",this.deviceType);
   /// console.log(this.deviceName);
    //console.log(this.deviceType);
  }
  loadBoreDetail(deviceID:string)
  {
   console.log("loadBoreDetail:" + this.deviceID);
   console.log("showDetail");
    this.deviceID = deviceID;
    this.postData.deviceID = this.deviceID;
    //console.log(" for:")
   //console.log(this.postData.deviceID);
    this.postData.req = "detail";
  
    this.xcisService.retrieveBores(this.postData).subscribe((res:any) => {
      this.boreDetail = res.boreData;
      this.deviceID = this.boreDetail[0].deviceID;
      this.deviceMode = this.boreDetail[0].deviceMode;
      this.deviceStatusDate = this.boreDetail[0].deviceStatusDate;
      this.boreStatus = this.boreDetail[0].boreStatus;
      this.boreState = this.boreDetail[0].boreState;
      this.boreVolume = this.boreDetail[0].boreVolume;
      this.deviceName = this.boreDetail[0].deviceName;
      this.deviceIP = this.boreDetail[0].deviceIP;
      this.deviceLAT = this.boreDetail[0].deviceLAT;
      this.deviceLONG = this.boreDetail[0].deviceLONG;
      this.loraID = this.boreDetail[0].loraID;
      this.deviceComm = this.boreDetail[0].deviceComm;
      this.deviceVersion = this.boreDetail[0].deviceVersion;
      this.boreOnPulseDuration = this.boreDetail[0].boreOnPulseDuration;      
      this.flowLPerPulse = this.boreDetail[0].flowLPerPulse;
      this.flowAccumFreq = this.boreDetail[0].flowAccumFreq;
      
      },
      (error: any) => {
       // console.log("Network connection error retrieving flowMeter detail");
       // console.log(error);
        this.toastService.presentToast('Network connection error retrieving flowMeter detail');
      }
      )
  }
  startBore(){
    console.log("startBore");
    let deviceID = this.deviceID;//delete not needed
    
    this.postData.deviceID = this.deviceID;
    this.postData.deviceComm = this.deviceComm;
   console.log(this.postData.deviceID);
   console.log(this.postData.deviceComm);

    this.xcisService.startBore(this.postData).subscribe((res:any) => {
      //this.fences = res.fenceData;
      //for(var k in this.tanks)
      //{
       //  console.log(this.tanks[k].deviceName);
        // console.log(this.tanks[k].totalVolume);
      //}  
      },
      (error: any) => {
       // console.log("Network connection error retrieving fences");
      //  console.log(error);
        this.toastService.presentToast('Network connection error retrieving fences');
      }
    )
  
  }
  stopBore(){
    //this.router.navigate(['/home/feed']);
    console.log("stopBore");
    let deviceID = this.deviceID;
    this.postData.deviceID = this.deviceID;
    this.postData.deviceComm = this.deviceComm;
    console.log(this.postData.deviceID);
    console.log(this.postData.deviceComm);

    this.xcisService.stopBore(this.postData).subscribe((res:any) => {
      //this.fences = res.fenceData;
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
  deviceSettings(){
    // console.log("settingsAdmin for:" + this.deviceID + this.deviceType);
     let navigationExtras: NavigationExtras = {
       queryParams: {
         "deviceID":this.deviceID
       }
     };
     // Use Device Type to navigate to the right settings page
     // If (this.deviceType = "Trough" etc)
     this.router.navigate(['home/bore-settings'],navigationExtras);
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
