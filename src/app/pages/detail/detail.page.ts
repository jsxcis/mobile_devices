import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public deviceID: string;
  public deviceName: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceType: string;
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string;
  public deviceLONG: string;
  //Tanks
  public totalVolume: string;
  public availVolume: string;
  public reserveDepth: string;
  public deviceLevel :string;
  public availDepth: string;
  public totalDepth: string;
  public reserveVolume: string;

  constructor(private route: ActivatedRoute) { }

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

      // Tanks
      this.totalVolume = params ["totalVolume"];
      this.availVolume = params["availVolume"];
      this.reserveDepth = params["reserveDepth"];
      this.reserveVolume = params["reserveVolume"];
      this.deviceLevel = params["deviceLevel"];
      this.availDepth = params["availDepth"];
      this.totalDepth = params["totalDepth"];
  

    });
    console.log(this.deviceID);
    console.log(this.deviceName);
    console.log(this.deviceType);
  }

}
