import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { TankSettingsPageRoutingModule } from './tank-settings-routing.module';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tank-settings',
  templateUrl: './tank-settings.page.html',
  styleUrls: ['./tank-settings.page.scss'],
})
export class TankSettingsPage implements OnInit {
  public tank: any;
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

  // context data
  public displayContext:string; 

  //Tanks
  public totalVolume: string;
  public availVolume: string;
  public reserveDepth: string;
  public deviceLevel :string;
  public availDepth: string;
  public totalDepth: string;
  public reserveVolume: string;

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
    totalVolume: '', // Editable fields
    totalDepth: '',
    reserveDepth: '',
    deviceStatus: ''
  };

  public tankData: any;
  public responseStatus: string;
  

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
   console.log(this.displayContext);
    this.loadTankDetail();
  }
  loadTankDetail()
  {
   // console.log("loadTankDetail:" + this.deviceID);
   // console.log("showDetail");
    this.getCurrentDevice();
    this.postData.deviceID = this.deviceID;
   // console.log(" for:")
   // console.log(this.postData.deviceID);
    this.postData.req = "settings";
  
    this.xcisService.retrieveTanks(this.postData).subscribe((res:any) => {
      this.tank = res.tankData;
      this.deviceID = this.tank[0].deviceID;
      this.deviceName = this.tank[0].deviceName;
      this.deviceIP = this.tank[0].deviceIP;
      this.deviceLAT = this.tank[0].deviceLAT;
      this.deviceLONG = this.tank[0].deviceLONG;
      this.deviceMode = this.tank[0].deviceMode;
      this.deviceStatusDate = this.tank[0].deviceStatusDate;
      this.deviceType = this.tank[0].deviceType;
      this.loraID = this.tank[0].loraID;
      if (this.tank[0].deviceStatus == "Active")
      {
        this.deviceStatus = true;
      }
      else
      {
        this.deviceStatus = false;
      }
      // tanks
      this.totalVolume = this.tank[0].totalVolume;
      this.availVolume = this.tank[0].availVolume;
      this.reserveDepth = this.tank[0].reserveDepth;
      this.reserveVolume = this.tank[0].reserveVolume;
      this.deviceLevel = this.tank[0].deviceLevel;
      this.availDepth = this.tank[0].availDepth;
      this.totalDepth = this.tank[0].totalDepth;
      },
      (error: any) => {
        console.log("Network connection error retrieving tank detail");
        console.log(error);
        this.toastService.presentToast('Network connection error retrieving tank detail');
      }
      )
  }
  saveSettings()
  {
  //  console.log("saveSettings")
    this.postSettings.req = "save";
    this.postSettings.deviceID = this.deviceID;
    this.postSettings.deviceName = this.deviceName;
    this.postSettings.deviceIP = this.deviceIP;
    this.postSettings.loraID = this.loraID;
    this.postSettings.deviceLAT = this.deviceLAT;
    this.postSettings.deviceLONG = this.deviceLONG;
    this.postSettings.totalVolume = this.totalVolume;
    this.postSettings.totalDepth = this.totalDepth;
    this.postSettings.reserveDepth = this.reserveDepth;
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
    
    console.log(this.deviceStatus);

    this.xcisService.saveTankSettings(this.postSettings).subscribe((res:any) => {
    this.tankData = res.tankData;
    this.deviceID = this.tankData[0].deviceID;
    this.responseStatus = this.tankData[0].responseStatus;
      },
      (error: any) => {
        //console.log("Network connection error retrieving tank detail");
        //console.log(error);
        this.toastService.presentToast('Network connection error retrieving tank detail');
      }
      )
      //this.loadTankDetail();
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
    //console.log("deviceDetail for:" + this.deviceID + this.deviceType);
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
        "displayContext":this.displayContext,
      
        //tanks
        "totalVolume": this.totalVolume,
        "availVolume": this.availVolume,
        "reserveDepth": this.reserveDepth,
        "reserveVolume": this.reserveVolume,
        "deviceLevel":this.deviceLevel,
        "availDepth":this.availDepth,
        "totalDepth":this.totalDepth
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Tank" etc)
    this.router.navigate(['home/tank-detail'],navigationExtras);
  }

}
