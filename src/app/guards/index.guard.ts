import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {

  constructor(private storageService: StorageService, private router:Router){}

  //canActivate(
  //  next: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  return true;
  //}
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
    this.storageService.get(AuthConstants.AUTH).then(res => {
    if (res) {
    this.router.navigate(['home/devices']);
    resolve(false);
    } else {
      resolve(true);
    }
    }).catch(err => {
    resolve(true);
    });
    });
    }
}
