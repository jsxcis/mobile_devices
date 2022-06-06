// Reference for this code from http://joshmorony.com/using-google-maps-and-gelocation-in-ionic-with-capacitor

import { Component, OnInit, Renderer2,ElementRef,Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {Plugins} from  '@capacitor/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';

import { ThrowStmt } from '@angular/compiler';


const {Geolocation, Network } = Plugins;

declare var google: any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {

 @Input('apiKey') apiKey: string;
 //apiKey: string = "AIzaSyBUoE0tE4u8zzxgsO3qkJ9cEeWIqjDgNbA";
public map: any;
public markers: any[] = [];
private mapsLoaded: boolean = false;
private networkHandler = null;
public fences: any;
public tanks: any;
public bores: any;
public troughs: any;
public weatherStns: any;
public device: any;
public deviceID:string;
public labelColor:string;

 public postData = {
    userID: 'jsharp',
    req: 'all',
    deviceID:'all'
   };

public postDeviceData = {
    deviceID: 'NOTSET',
    req: 'one'
  };

 constructor(private xcisService: XcisService,
    private toastService: ToastService,
     private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private _document){

        this.labelColor = 'white';

 }

 ngOnInit(){

     this.init().then((res) => {
         console.log("Google Maps ready.")
     }, (err) => {    
         console.log(err);
     });
     

 }
 ionViewWillEnter()
  {
    console.log("ionViewWillEnter");
    
  }

 private init(): Promise<any> {

     return new Promise((resolve, reject) => {

         this.loadSDK().then((res) => {

             this.initMap().then((res) => {``
                 resolve(true);
             }, (err) => {
                 reject(err);
             });

         }, (err) => {

             reject(err);

         });

     });

 }

 private loadSDK(): Promise<any> {

     console.log("Loading Google Maps SDK");

     return new Promise((resolve, reject) => {

         if(!this.mapsLoaded){

             Network.getStatus().then((status) => {

                 if(status.connected){

                     this.injectSDK().then((res) => {
                         resolve(true);
                     }, (err) => {
                         reject(err);
                     });

                 } else {

                     if(this.networkHandler == null){

                         this.networkHandler = Network.addListener('networkStatusChange', (status) => {

                             if(status.connected){

                                 this.networkHandler.remove();

                                 this.init().then((res) => {
                                     console.log("Google Maps ready.")
                                 }, (err) => {    
                                     console.log(err);
                                 });

                             }

                         });

                     }

                     reject('Not online');
                 }

             }, (err) => {

                 // NOTE: navigator.onLine temporarily required until Network plugin has web implementation
                 if(navigator.onLine){

                     this.injectSDK().then((res) => {
                         resolve(true);
                     }, (err) => {
                         reject(err);
                     });

                 } else {
                     reject('Not online');
                 }

             });

         } else {
             reject('SDK already loaded');
         }

     });


 }

 private injectSDK(): Promise<any> {

     return new Promise((resolve, reject) => {

         window['mapInit'] = () => {
             this.mapsLoaded = true;
             resolve(true);
         }

         let script = this.renderer.createElement('script');
         script.id = 'googleMaps';

         if(this.apiKey){
             script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
         } else {
             script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';       
         }

         this.renderer.appendChild(this._document.body, script);

     });

 }

 private initMap(): Promise<any> {

     return new Promise((resolve, reject) => {

            console.log("map init");

             let latLng = new google.maps.LatLng(-33.805702,148.777022);

             let mapOptions = {
                 center: latLng,
                 zoom: 15,
                 mapTypeId: google.maps.MapTypeId.HYBRID
             };
             this.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
             this.map.addListener('maptypeid_changed',function(){
                 console.log("Map type changed");
               
             })
             this.loadFenceMarkers();
             this.loadTroughMarkers();
             this.loadTankMarkers();
             this.loadBoreMarkers();
             this.loadWeatherMarkers();         
             resolve(true);

     });

 }
 
 public addMarker(contentString: string, lat: number, lng: number, name: String, micon: String): void {

     let latLng = new google.maps.LatLng(lat,lng);

     var infowindow = new google.maps.InfoWindow({ content: contentString});

    // Adds markers to the map.

        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        var image = {
            url: micon,
            //url: 'assets/icon/watertankicon_marker.jpg',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(60, 60),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 20)
          };
          // Shapes define the clickable region of the icon. The type defines an HTML
          // <area> element 'poly' which traces out a polygon as a series of X,Y points.
          // The final coordinate closes the poly by connecting to the first coordinate.
          var shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
          };

     let marker = new google.maps.Marker({
         title:name,
         label: { text:name,color:this.labelColor},
         //label: { text:name},
         map: this.map,
         animation: google.maps.Animation.DROP,
         position: latLng,
         icon: image,
         //icon: 'assets/icon/watertankicon_marker.jpg',
         //icon: {
         //   url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
         // },
         shape: shape,
         draggable: false
     });
     //var that = this;
     marker.addListener('click', function(){
         infowindow.open(this.map,marker);
         //console.log("opened marker:");
         //console.log(deviceID);
         //that.loadDevice(deviceID);
    
     });
     this.markers.push(marker);
 }
 public loadDevice(deviceID:string)
 {
    console.log("Loading Device....");
    this.postDeviceData.deviceID = deviceID;
    console.log(this.postDeviceData.deviceID);
     
     this.xcisService.retrieveDevice(this.postDeviceData).subscribe((res:any) => {
     this.device = res.deviceData;
     for(var k in this.device)
     {
       console.log(this.device[k].deviceName);
       console.log(this.device[k].deviceMode);
       console.log(this.device[k].deviceLAT);
       console.log(this.device[k].deviceLONG);
       var name = this.device[k].deviceName;
       var deviceID = this.device[k].deviceID;
       var lat = this.device[k].deviceLAT;
       var long = this.device[k].deviceLONG;

     }
   },
   (error: any) => {
     console.log("Network connection error retrieving weatherStns");
     console.log(error);
     this.toastService.presentToast('Network connection error retrieving weatherStns');
   }
   )
 }
 
 loadWeatherMarkers()
 {
     console.log("Loading Weather Markers....");
     
     this.xcisService.retrieveWeatherStns(this.postData).subscribe((res:any) => {
     this.weatherStns = res.weatherStnData;
     for(var k in this.weatherStns)
     {
       console.log(this.weatherStns[k].deviceName);
       console.log(this.weatherStns[k].deviceMode);
       console.log(this.weatherStns[k].deviceLAT);
       console.log(this.weatherStns[k].deviceLONG);
       var name = this.weatherStns[k].deviceName;
       var deviceID = this.weatherStns[k].deviceID;
       var lat = this.weatherStns[k].deviceLAT;
       var long = this.weatherStns[k].deviceLONG;
       var temperature = this.weatherStns[k].temperature;
       var humidity = this.weatherStns[k].humidity;
       var pressure = this.weatherStns[k].pressure;
       var windSpeed = this.weatherStns[k].windSpeed;
       var direction = this.weatherStns[k].direction;
       var rainTotalMM = this.weatherStns[k].rainTotalMM;
       var rainMMPerHour = this.weatherStns[k].rainMMPerHour;
       var deviceStatusDate = this.weatherStns[k].deviceStatusDate;


       var contentString = '<div id ="content">' +
                            '<p><b>' + name + '</b></p>'+
                            '<p>Temp: ' + temperature + '&#x2103;</p>'+
                            '<p>Humidity: ' + humidity+ '%</p>'+
                            '<p>Pressure: ' + pressure+ 'mb</p>'+
                            '<p>Wind Speed: ' + windSpeed+ 'kts</p>'+
                            '<p>Wind Direction: ' + direction+ '</p>'+
                            '<p>Rain Total: ' + rainTotalMM+ 'mm</p>'+
                            '<p>Rain/Hour: ' + rainMMPerHour+ 'mm</p>'+
                            '<p>Status Date: ' + deviceStatusDate+ '</p>'+
                            '</div>';
       
       this.addMarker(contentString,lat,long,name + " Weather Stn", "assets/icon/weatherstnicon_marker.png"); 

     }
   },
   (error: any) => {
     console.log("Network connection error retrieving weatherStns");
     console.log(error);
     this.toastService.presentToast('Network connection error retrieving weatherStns');
   }
   )
 }
 loadBoreMarkers()
 {
     console.log("Loading Bore Markers....");
     
     this.xcisService.retrieveBores(this.postData).subscribe((res:any) => {
     this.bores = res.boreData;
     for(var k in this.bores)
     {
       console.log(this.bores[k].deviceName);
       console.log(this.bores[k].deviceMode);
       console.log(this.bores[k].deviceLAT);
       console.log(this.bores[k].deviceLONG);
       var deviceID = this.bores[k].deviceID;
       var name = this.bores[k].deviceName;
       var lat = this.bores[k].deviceLAT;
       var long = this.bores[k].deviceLONG;
       var deviceMode = this.bores[k].deviceMode;
       var boreStatus = this.bores[k].boreStatus;
       var boreCurrent = this.bores[k].boreCurrent;
       var boreFlowRate = this.bores[k].boreFlowRate;
       var boreState = this.bores[k].boreState;
       var deviceStatusDate = this.bores[k].deviceStatusDate;

       var contentString = '<div id ="content">' +
                            '<p><b>' + name + '</b></p>'+
                            '<p>Mode: ' + deviceMode + '</p>'+
                            '<p>Status: ' + boreStatus+ '</p>'+
                            '<p>State: ' + boreState+ '</p>'+
                            '<p>Current: ' + boreCurrent+ 'A</p>'+
                            '<p>Flow Rate: ' + boreFlowRate+ 'L/min</p>'+
                            '<p>Status Date: ' + deviceStatusDate+ '</p>'+
                            '</div>';
       
       this.addMarker(contentString,lat,long,name + " Bore","assets/icon/boreicon_marker.png"); 

     }
   },
   (error: any) => {
     console.log("Network connection error retrieving bores");
     console.log(error);
     this.toastService.presentToast('Network connection error retrieving bores');
   }
   )
 }
 loadTankMarkers()
 {
     console.log("Loading Tank Markers....");
     
     this.xcisService.retrieveTanks(this.postData).subscribe((res:any) => {
     this.tanks = res.tankData;
     for(var k in this.tanks)
     {
       console.log(this.tanks[k].deviceName);
       console.log(this.tanks[k].deviceMode);
       console.log(this.tanks[k].deviceLAT);
       console.log(this.tanks[k].deviceLONG);
       var deviceID = this.tanks[k].deviceID;
       var name = this.tanks[k].deviceName;
       var lat = this.tanks[k].deviceLAT;
       var long = this.tanks[k].deviceLONG;
       var deviceMode = this.tanks[k].deviceMode;
       var deviceLevel = this.tanks[k].deviceLevel;
       var availDepth = this.tanks[k].availDepth;
       var availVolume = this.tanks[k].availVolume;
       var reserveDepth = this.tanks[k].reserveDepth;
       var reserveVolume = this.tanks[k].reserveVolume;
       var totalDepth = this.tanks[k].totalDepth;
       var totalVolume = this.tanks[k].totalVolume;
       var deviceStatusDate = this.tanks[k].deviceStatusDate;
       
       var contentString = '<div id ="content">' +
                            '<p><b>' + name + '</b></p>'+
                            '<p>Mode: ' + deviceMode + '</p>'+
                            '<p>Level: ' + deviceLevel+ '%</p>'+
                            '<p>Available Depth: ' + availDepth+ 'M</p>'+
                            '<p>Available Volume: ' + availVolume+ 'L</p>'+
                            '<p>Reserve Depth: ' + reserveDepth+ 'M</p>'+
                            '<p>Reserve Volume: ' + reserveVolume+ 'L</p>'+
                            '<p>Total Depth: ' + totalDepth+ 'M</p>'+
                            '<p>Total Volume: ' + totalVolume+ 'L</p>'+
                            '<p>Status Date: ' + deviceStatusDate+ '</p>'+
                            '</div>';
       
       this.addMarker(contentString,lat,long,name + "Tank", "assets/icon/watertankicon_marker.jpg"); 

     }
   },
   (error: any) => {
     console.log("Network connection error retrieving tanks");
     console.log(error);
     this.toastService.presentToast('Network connection error retrieving tanks');
   }
   )
 }
 loadTroughMarkers()
 {
     console.log("Loading Trough Markers....");
     
     this.xcisService.retrieveTroughs(this.postData).subscribe((res:any) => {
     this.troughs = res.troughData;
     for(var k in this.fences)
     {
       console.log(this.troughs[k].deviceName);
       console.log(this.troughs[k].deviceMode);
       console.log(this.troughs[k].deviceLAT);
       console.log(this.troughs[k].deviceLONG);
       var deviceID = this.troughs[k].deviceID;
       var name = this.troughs[k].deviceName;
       var lat = this.troughs[k].deviceLAT;
       var long = this.troughs[k].deviceLONG;

       var deviceMode = this.troughs[k].deviceMode;
       var deviceLevel = this.troughs[k].deviceLevel;
       var availDepth = this.troughs[k].availDepth;
       var totalDepth = this.troughs[k].totalDepth;
       var troughStatus = this.troughs[k].troughStatus;
       var deviceStatusDate = this.troughs[k].deviceStatusDate;


       var contentString = '<div id ="content">' +
                            '<p><b>' + name + '</b></p>'+
                            '<p>Mode: ' + deviceMode + '</p>'+
                            '<p>Level: ' + deviceLevel+ '%</p>'+
                            '<p>Available Depth: ' + availDepth+ 'mm</p>'+
                            '<p>Total Depth: ' + totalDepth+ 'mm</p>'+
                            '<p>Trough Status: ' + troughStatus+ '</p>'+
                            '<p>Status Date: ' + deviceStatusDate+ '</p>'+
                            '</div>';
       
       this.addMarker(contentString, lat,long,name + "Trough","assets/icon/troughicon_marker.png"); 

     }
   },
   (error: any) => {
     console.log("Network connection error retrieving tanks");
     console.log(error);
     this.toastService.presentToast('Network connection error retrieving troughs');
   }
   )
 }
 loadFenceMarkers()
 {
     console.log("Loading Fence Markers....");
     
     this.xcisService.retrieveFences(this.postData).subscribe((res:any) => {
     this.fences = res.fenceData;
     for(var k in this.fences)
     {
       console.log(this.fences[k].deviceName);
       console.log(this.fences[k].deviceMode);
       console.log(this.fences[k].deviceLAT);
       console.log(this.fences[k].deviceLONG);
       var deviceID = this.fences[k].deviceID;
       var name = this.fences[k].deviceName;
       var lat = this.fences[k].deviceLAT;
       var long = this.fences[k].deviceLONG;
       
       var deviceMode = this.fences[k].deviceMode;
       var fenceVoltage = this.fences[k].fenceVoltage;
       var fenceStatus = this.fences[k].fenceStatus;
       var deviceStatusDate = this.fences[k].deviceStatusDate;


       var contentString = '<div id ="content">' +
                            '<p><b>' + name + '</b></p>'+
                            '<p>Mode: ' + deviceMode + '</p>'+
                            '<p>Voltage: ' + fenceVoltage+ 'KV</p>'+
                            '<p>Status: ' + fenceStatus+ '</p>'+
                            '<p>Status Date: ' + deviceStatusDate+ '</p>'+
                            '</div>';
       
       this.addMarker(contentString, lat,long,name + "E-Fence","assets/icon/electricfenceicon_marker.png"); 

     }
   },
   (error: any) => {
     console.log("Network connection error retrieving tanks");
     console.log(error);
     this.toastService.presentToast('Network connection error retrieving tanks');
   }
   )
 }
 
}
