import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthConstants } from  '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>('');

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router:Router)
    { }

    getUserData(){
      this.storageService.get(AuthConstants.AUTH).then(res => {
        console.log(res);
        this.userData$.next(res);
      })

    }


    login(postData: any): Observable<any> 
    {
      console.log('auth_service login:');
      console.log(postData.userID);
      console.log(postData.password);
      return this.httpService.post('xcisloginrest', postData);
      
    }
      
    signup(postData: any): Observable<any>
    {
      return this.httpService.post('signup', postData);
    }
  
    
    logout(displayUserData:any) : Observable<any>
    {
      var logoffData = {
        "userID"  :  displayUserData.userID,
        "token"   :  displayUserData.token
      }
        console.log('auth_service logout:');
        console.log(displayUserData.userID);
        console.log(displayUserData.token);
        this.storageService.removeStorageItem(AuthConstants.AUTH).then(res => {
        this.userData$.next('');
        this.router.navigate(['']);
      });
      return this.httpService.post('xcislogoutrest',logoffData);
    }

}
