import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.page.html',
  styleUrls: ['./weather-detail.page.scss'],
})
export class WeatherDetailPage implements OnInit {
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
  //Weather Station
  public rainMMPerHour: string;
  public rainTotalMM: string;
  public temperature: string;
  public humidity :string;
  public pressure: string;
  public windSpeed: string;
  public direction: string;

  constructor(private route: ActivatedRoute,
    private menu:MenuController,
    private router: Router,
    private storageService: StorageService,
    public navCtrl: NavController) { }


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

      // Weather station
      this.rainMMPerHour = params ["rainMMPerHour"];
      this.rainTotalMM = params["rainTotalMM"];
      this.temperature = params["temperature"];
      this.humidity = params["humidity"];
      this.pressure = params["pressure"];
      this.windSpeed = params["windSpeed"];
      this.direction = params["direction"];

    });
    //console.log(this.deviceID);
    //console.log(this.deviceName);
    //console.log(this.deviceType);
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
