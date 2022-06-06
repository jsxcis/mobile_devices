import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import {environment} from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.page.html',
  styleUrls: ['./app-details.page.scss'],
})
export class AppDetailsPage implements OnInit {
  displayUserData: any;
  public xcis_versionID:string;
  public version:string;
  public serverURL:string;
  public buildDate: any;

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
    settings(){
       // Use Device Type to navigate to the right settings page
       // If (this.deviceType = "Tank" etc)
       this.router.navigate(['home/settings']);
     }    

}
