import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    userID: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService ) { }

  ngOnInit() {
  }

  validateInputs(){
    let userID = this.postData.userID.trim();
    let password = this.postData.password.trim();

    return (this.postData.userID && this.postData.password && userID.length > 0 && password.length > 0)
  }

  loginAction(){
      //this.router.navigate(['/home/feed']);
      console.log(this.postData);
      if (this.validateInputs()){
        this.authService.login(this.postData).subscribe((res:any) => {
          if (res.userData)
          {
            this.storageService.store(AuthConstants.AUTH, res.userData);
            this.router.navigate(['home/devices']);
          }
          else{
            console.log("Incorrect userID or password");
            this.toastService.presentToast('Incorrect userID or password');
            this.router.navigate(['']);
          }
        },
        (error: any) => {
          console.log("Network connection error");
          this.toastService.presentToast('Network connection error');
        }
        )
      }
      else {
        console.log("Please provide correct user ID and password")
        this.toastService.presentToast('Please provide correct user ID and password');
      }
  }
  navigateToWelcomePage(){
    console.log('Welcome');
    this.router.navigate(['']);
}

}
