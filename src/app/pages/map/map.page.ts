import { Component, OnInit, ViewChild } from '@angular/core';
/* Import all of the required Google Maps entities from the google-maps package */
import { Platform, NavController} from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { GoogleMapsComponent} from './../../components/google-maps/google-maps.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  
    @ViewChild(GoogleMapsComponent, {static:true}) mapComponent: GoogleMapsComponent;

    displayUserData: any;
    public xmlItems: any;
    public tanks: any;
    public bores: any;
    public troughs: any;
    public fences: any;
    public weatherStns: any;
    public deviceID:string;
    item:DataTransferItem;


  public postData = {
   userID: 'jsharp',
   req: 'all'
  };
  
    constructor(public platform: Platform,
      private router: Router,
      private authService: AuthService,
      private xcisService: XcisService,
      private toastService: ToastService,
      public http: HttpClient,
      public navCtrl: NavController
      ) { }

      ngOnInit() {
        this.authService.userData$.subscribe((res:any)=> {
        this.displayUserData = res;
        })
      }
    testMarker(){
  
      let center = this.mapComponent.map.getCenter();
      var deviceID;
      this.mapComponent.addMarker(deviceID,center.lat(), center.lng(),"test","http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
  
    }

}
