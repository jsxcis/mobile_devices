import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { TroughSettingsPageRoutingModule } from './trough-settings-routing.module';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-trough-settings',
  templateUrl: './trough-settings.page.html',
  styleUrls: ['./trough-settings.page.scss'],
})
export class TroughSettingsPage implements OnInit {
  public trough: any;
  public deviceID: string;
  public deviceName: string; 
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string; 
  public deviceLONG: string;
  public deviceType: string;
  public deviceStatus: boolean;
   // context data
   public displayContext:string; 
  //Trough fields
  public troughOverFlowHeight: string;
  public troughEmptyHeight: string;
  public troughFullHeight: string;
  public troughValue: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceLevel: string;
  public availDepth: string;
  public totalDepth: string;
  public troughStatus: string;

  public postData = {
    userID: 'jsharp',
    req: 'all',
    deviceID : "all"
  };
  public postSettings = {
    userID: 'jsharp',
    req: '',
    deviceID:'',
    deviceName: '',
    deviceIP: '',
    loraID: '',
    deviceLAT: '',
    deviceLONG: '',
    troughOverFlowHeight: '',
    troughEmptyHeight: '',
    troughFullHeight: '',
    deviceStatus: ''
  };

  public troughData: any;
  public responseStatus: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private xcisService: XcisService,
    private toastService: ToastService,
    public http: HttpClient,
    public navCtrl: NavController,
    private storageService: StorageService) 
   { }

  ngOnInit() {
  }
  ionViewWillEnter()
  {
    //console.log("Loading detail on enter");
      this.route.queryParams.subscribe(params => {
      this.deviceID = params["deviceID"];
      // context data
      this.displayContext = params["displayContext"];
    });
   // console.log(this.deviceID);
    this.loadTroughDetail();
  }
  loadTroughDetail()
  {
   // console.log("loadTroughdetail:" + this.deviceID);
    //console.log("showDetail");
    this.getCurrentDevice();
    this.postData.deviceID = this.deviceID;
   // console.log(" for:")
   // console.log(this.postData.deviceID);
    this.postData.req = "settings";
  
    this.xcisService.retrieveTroughs(this.postData).subscribe((res:any) => {
      this.trough = res.troughData;
      this.deviceID = this.trough[0].deviceID;
      this.deviceName = this.trough[0].deviceName;
      this.troughValue = this.trough[0].troughValue;
      this.deviceStatusDate = this.trough[0].deviceStatusDate;
      this.deviceMode = this.trough[0].deviceMode;
      this.deviceLevel = this.trough[0].deviceLevel;
      this.availDepth = this.trough[0].availDepth;
      this.totalDepth = this.trough[0].totalDepth;
      this.troughStatus = this.trough[0].troughStatus;
      this.deviceType = this.trough[0].deviceType;
      this.deviceIP = this.trough[0].deviceIP;
      this.loraID = this.trough[0].loraID;
      if (this.trough[0].deviceStatus == "Active")
      {
        this.deviceStatus = true;
      }
      else
      {
        this.deviceStatus = false;
      }
      this.deviceLAT = this.trough[0].deviceLAT;
      this.deviceLONG = this.trough[0].deviceLONG;
      this.troughOverFlowHeight = this.trough[0].troughOverFlowHeight;
      this.troughFullHeight = this.trough[0].troughFullHeight;
      this.troughEmptyHeight = this.trough[0].troughEmptyHeight;

      },
      (error: any) => {
       // console.log("Network connection error retrieving trough detail");
      //  console.log(error);
        this.toastService.presentToast('Network connection error retrieving trough detail');
      }
      )
  }
  resetValues()
  {

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
    this.postSettings.troughOverFlowHeight = this.troughOverFlowHeight;
    this.postSettings.troughFullHeight = this.troughFullHeight;
    this.postSettings.troughEmptyHeight = this.troughEmptyHeight;
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

    this.xcisService.saveTroughSettings(this.postSettings).subscribe((res:any) => {
    this.troughData = res.troughData;
    this.deviceID = this.troughData[0].deviceiD;
    this.responseStatus = this.troughData[0].responseStatus;
      },
      (error: any) => {
       // console.log("Network connection error retrieving trough detail");
        //console.log(error);
        this.toastService.presentToast('Network connection error retrieving trough detail');
      }
      )
      //this.loadTroughDetail();
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
        "troughValue":this.troughValue,
        "deviceStatusDate": this.deviceStatusDate,
        "deviceMode":this.deviceMode,
        "troughOverFlowHeight":this.troughOverFlowHeight,
        "deviceLevel":this.deviceLevel,
        "availDepth":this.availDepth,
        "totalDepth":this.totalDepth,
        "troughEmptyHeight":this.troughEmptyHeight,
        "troughFullHeight":this.troughFullHeight,
        "troughStatus":this.troughStatus,
        "deviceType":this.deviceType,
        "deviceIP":this.deviceIP,
        "loraID":this.loraID,
        "deviceStatus":this.postSettings.deviceStatus,
        "deviceLAT":this.deviceLAT,
        "deviceLONG":this.deviceLONG,
        "displayContext":this.displayContext
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Trough" etc)
    this.router.navigate(['home/trough-detail'],navigationExtras);
  }

}
