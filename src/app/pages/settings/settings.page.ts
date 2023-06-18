import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import {environment} from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  displayUserData: any;
  public xcis_versionID:string;
  public version:string;
  public serverURL:string;
  public buildDate: any;
  public deviceStatus: string;

   item:DataTransferItem;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res:any)=> {
      this.displayUserData = res;
    })
    this.xcis_versionID = environment.xcis_version;
    this.serverURL = environment.apiUrl;
    this.version = environment.xcis_version;
    this.buildDate = environment.buildDate;
    console.log(this.xcis_versionID);
  }
  logoutAction()
  {
    //this.router.navigate(['/home/feed']);
    console.log(this.displayUserData);
    
      this.authService.logout(this.displayUserData).subscribe((res:any) => {
        //if (res.userData)
        //{
         // this.router.navigate(['home']);
         // this.toastService.presentToast('Logging out');
        //}
        //else
        //{
        //  console.log("Error logging out");
        //  this.toastService.presentToast('Error logging out');
        //}
      },
      (error: any) => {
        console.log("Network connection error");
        console.log(error);
        this.toastService.presentToast('Network connection error');
      }
      )
}
  showAppDetails()
  {
   
   console.log("showAppDetails");

    this.router.navigate(['home/app-details']);
  }
  addSensors()
  {
   
   console.log("addSensors");

    this.router.navigate(['home/add-sensors']);
  }
  configure()
  {
   console.log("addSensors");
   this.deviceStatus = "All";
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "state":this.deviceStatus
      }
    };

    this.router.navigate(['home/configuration'], navigationExtras);
  }
  listDevices()
  {
    console.log("listDevices");
    this.deviceStatus = "All";
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "state":this.deviceStatus
      }
    };
    this.router.navigate(['home/devices'], navigationExtras);

  }


}
