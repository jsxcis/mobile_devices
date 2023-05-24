import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class XcisService {
  
  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }
  retrieveWeatherStns(postData: any): Observable<any> 
  {
  //console.log('retrieveWeatherStnds:' + postData.req);
    return this.httpService.post('xcisweatherstnrest', postData);
  }
  saveFlowMeterSettings(postData: any): Observable<any> 
  {
    //console.log('saveFlowMeterSettings:' + postData.req);
    return this.httpService.post('xcisflowmeterrest', postData);
  }
  retrieveFlowMeters(postData: any): Observable<any> 
  {
    //console.log('retrieveFlowMeters:' + postData.req);
    return this.httpService.post('xcisflowmeterrest', postData);
  }
  retrieveFlowMeterDetail(postData: any): Observable<any> 
  {
   // console.log('retrieveFlowMeterDetail:' + postData.req);
    return this.httpService.post('xcisflowmeterdetailrest', postData);
  }
  retrieveFlowMeterDailyHistory(postData: any): Observable<any> 
  {
    //console.log('retrieveFlowMeterDailyHistory:' + postData.req);
    return this.httpService.post('xcisflowmeterdailyhistoryrest', postData);
  }
  saveRainGaugeSettings(postData: any): Observable<any> 
  {
    //console.log('saveRainGaugeSettings:' + postData.req);
    return this.httpService.post('xcisraingaugerest', postData);
  }
  retrieveRainGauges(postData: any): Observable<any> 
  {
   // console.log('retrieveRainGauges:' + postData.req);
    return this.httpService.post('xcisraingaugerest', postData);
  }
  retrieveRainGaugeDetail(postData: any): Observable<any> 
  {
    //console.log('retrieveRainGaugeDetail:' + postData.req);
    return this.httpService.post('xcisraingaugedetailrest', postData);
  }
  retrieveRainGaugeDailyHistory(postData: any): Observable<any> 
  {
   // console.log('retrieveRainGaugeDailyHistory:' + postData.req);
    return this.httpService.post('xcisraingaugedailyhistoryrest', postData);
  }
  retrieveFenceDetail(postData: any): Observable<any> 
  {
   // console.log('retrieveFenceDetail:' + postData.req);
    return this.httpService.post('xcisfencedetailrest', postData);
  }
  retrieveFenceDailyHistory(postData: any): Observable<any> 
  {
   // console.log('retrieveFenceDailyHistory:' + postData.req);
    return this.httpService.post('xcisfencedailyhistoryrest', postData);
  }
  saveFenceSettings(postData: any): Observable<any> 
  {
   // console.log('saveFenceSettings:' + postData.req);
    return this.httpService.post('xcisfencerest', postData);
  }
  retrieveFences(postData: any): Observable<any> 
  {
   //console.log('retrieveFences:' + postData.req);
    return this.httpService.post('xcisfencerest', postData);
  }
  retrieveTroughDetail(postData: any): Observable<any> 
  {
   // console.log('retrieveTroughDetail:' + postData.req);
    return this.httpService.post('xcistroughdetailrest', postData);
  }
  retrieveTroughDailyHistory(postData: any): Observable<any> 
  {
   // console.log('retrieveTroughDailyHistory:' + postData.req);
    return this.httpService.post('xcistroughdailyhistoryrest', postData);
  }
  retrieveTroughs(postData: any): Observable<any> 
  {
   //console.log('retrieveTroughs:' + postData.req);
    return this.httpService.post('xcistroughrest', postData);
  }
  saveTroughSettings(postSettings: any): Observable<any> 
  {
   // console.log('retrieveTroughs:' + postSettings.req);
    return this.httpService.post('xcistroughrest', postSettings);
  }
  retrieveTankDetail(postData: any): Observable<any> 
  {
   // console.log('retrieveTankDetail:' + postData.req);
    return this.httpService.post('xcistankdetailrest', postData);
  }
  retrieveTankDailyHistory(postData: any): Observable<any> 
  {
    //console.log('retrieveTankDailyHistory:' + postData.req);
    return this.httpService.post('xcistankdailyhistoryrest', postData);
  }
  retrieveTanks(postData: any): Observable<any> 
  {
   // console.log('retrieveTanks:' + postData.req);
    return this.httpService.post('xcistankrest', postData);
  }
  saveTankSettings(postSettings: any): Observable<any> 
  {
   // console.log('retrieveTanks:' + postSettings.req);
    return this.httpService.post('xcistankrest', postSettings);
  }
  retrieveBores(postData: any): Observable<any> 
  {
    //console.log('retrieveBores:' + postData.req);
    return this.httpService.post('xcisborerest', postData);
  }
  startBore(postData: any): Observable<any> 
  {
    //console.log('startBore:' + postData.req);
    return this.httpService.post('xcisboreonrest', postData);
  }
  stopBore(postData: any): Observable<any> 
  {
   // console.log('startBore:' + postData.req);
    return this.httpService.post('xcisboreoffrest', postData);
  }
  saveBoreSettings(postSettings: any): Observable<any> 
  {
   // console.log('retrieveTanks:' + postSettings.req);
    return this.httpService.post('xcisborerest', postSettings);
  }
  retrieveDevice(postData: any): Observable<any> 
  {
    //console.log('retrieveDevice:' + postData.req);
    return this.httpService.post('xcisdevicerest', postData);
  }


}
