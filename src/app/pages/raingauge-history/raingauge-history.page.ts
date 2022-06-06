import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { XcisService } from 'src/app/services/xcis.service';
import { ToastService } from 'src/app/services/toast.service';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { GoogleChartInterface} from 'ng2-google-charts';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-raingauge-history',
  templateUrl: './raingauge-history.page.html',
  styleUrls: ['./raingauge-history.page.scss'],
})
export class RaingaugeHistoryPage implements OnInit {
  public deviceID: string;
  public deviceName: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceType: string;
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string;
  public deviceLONG: string;
  // rain gauge
  public rainGaugeDailyHistory: any;
  public rainGaugeDetail: any;
  public historyRecords: number;

  public rainMMPerPulse: string;
  public rainMMPerScan: string;
  public rainPulsesPerScan: string;

  public rainingFlag: string;
  public rainTimeStamp: string;
  public rainAccumFreq: string;
  public rainDate: string;

  
  public rainDailyMM: string;
  public weeklyTotal: string;
  public monthlyTotal: string;
  public quarterlyTotal: string;
  public yearlyTotal: string;
  public allTimeTotal: string;

  public postData = {
    userID: 'jsharp',
    req: 'all',
    deviceID : "all"
  };
  public dataSwitch: string;
  public displayMode: string;
  public dataChart: any = [];

  public columnChart: GoogleChartInterface;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private xcisService: XcisService,
    private toastService: ToastService,
    public http: HttpClient,
    public navCtrl: NavController,
    private elementRef:ElementRef) 
    { }

  ngOnInit() {
    //console.log("ngOnInit called");
    this.dataSwitch = "Daily";
    this.displayMode = "List";
    this.setScrollStyle('visible');
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

      // rain gauge

      this.rainMMPerPulse = params["rainMMPerPulse"];
      this.rainMMPerScan = params["rainMMPerScan"];
      this.rainPulsesPerScan = params["rainPulsesPerScan"];

      this.rainingFlag = params["rainingFlag"];
      this.rainTimeStamp = params["rainTimeStamp"];
      this.rainAccumFreq = params["rainAccumFreq"];
      this.rainDate = params["rainDate"];

    });
   // console.log(this.deviceID);
    //console.log(this.deviceName);
    //console.log(this.deviceType);
    this.loadRainGaugeDetail(this.deviceID); // Calculated data
    this.loadRainGaugeHistory(this.deviceID); // Data to display
  }
  displayList()
  {
   // console.log("displayList");
   // console.log(this.dataSwitch);
    this.displayMode = "List";
    this.setScrollStyle('visible'); // Scroll on
    this.ionViewWillEnter();
  }
  displayGraph()
  {
    console.log("displayGraph");
    console.log(this.dataSwitch);
    this.displayMode = "Graph";
    this.loadColumnChart();
    this.setScrollStyle('hidden'); // Scroll off
    this.setScrollStyle('visible'); // Scroll on
    //this.ionViewWillEnter();
   
  }
  loadRainGaugeHistory(deviceID:string)
  {
    //console.log("loadRainGaugeHistory for");
    this.deviceID = deviceID;
   // console.log(deviceID);
    this.postData.deviceID = deviceID;
    this.postData.req = this.dataSwitch;
    this.dataChart = [];
    
    this.xcisService.retrieveRainGaugeDailyHistory(this.postData).subscribe((res:any) => {
    this.rainGaugeDailyHistory = res.rainGaugeDailyHistory;
    //console.log(this.rainGaugeDailyHistory);
    let numberOfRecords : number = 0;
    let xvalue : number = 0;
    this.dataChart.push(['Date','mm']);
    
    for(var k in this.rainGaugeDailyHistory)
    {
        numberOfRecords++;
        xvalue = parseFloat(this.rainGaugeDailyHistory[k].rainDailyMM);
        this.dataChart.push([this.rainGaugeDailyHistory[k].rainDate,xvalue]);
        //this.dataChart[k].rainDate = this.rainGaugeDailyHistory[k].rainDate;
        //this.dataChart[k].rainDailyMM = this.rainGaugeDailyHistory[k].rainDailyMM;
      
    }
  
    //console.log(this.dataChart);
    this.historyRecords = numberOfRecords;
   // console.log('Retrieved records:' + this.historyRecords);
    },
    (error: any) => {
     // console.log("Network connection error retrieving rain gauges");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving rain gauges');
    }
    
    )
    
  }
  loadRainGaugeDetail(deviceID:string)
  {
   // console.log("loadRainGaugeDetail");
    this.deviceID = deviceID;
   // console.log("showDetail");
    this.postData.deviceID = deviceID;
   // console.log(" for:")
   // console.log(this.postData.deviceID);
    this.postData.req = "detail";
    this.xcisService.retrieveRainGaugeDetail(this.postData).subscribe((res:any) => {
    this.rainGaugeDetail = res.rainGaugeDetail;
    this.rainDailyMM = this.rainGaugeDetail[0].rainDailyMM;
    this.weeklyTotal = this.rainGaugeDetail[0].rainWeeklyTotal;
    this.monthlyTotal = this.rainGaugeDetail[0].rainMonthlyTotal;
    this.quarterlyTotal = this.rainGaugeDetail[0].rainQuarterlyTotal;
    this.yearlyTotal = this.rainGaugeDetail[0].rainYearlyTotal;
    this.allTimeTotal = this.rainGaugeDetail[0].rainAllTimeTotal;

   // console.log(this.rainDailyMM);
    },
    (error: any) => {
     // console.log("Network connection error retrieving rain gauge detail");
    //  console.log(error);
      this.toastService.presentToast('Network connection error retrieving rain gauges');
    }
    )
  }
  loadColumnChart() {
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: this.dataChart,
      options: {
        legend: 'none',
        explorer: { 
          maxZoomIn:8.0,
          keepInBounds: true
        },
        height: 370,
        width: '100%',
        chartArea: {top:40},
        vAxis: { ticks:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]}
      },
    };
  }
  displayDaily()
  {
    this.dataSwitch = "Daily";
    this.loadRainGaugeDetail(this.deviceID); // Calculated data
    this.loadRainGaugeHistory(this.deviceID); // Data to display
  }
  displayWeekly()
  {
    this.dataSwitch = "Weekly";
    this.loadRainGaugeDetail(this.deviceID); // Calculated data
    this.loadRainGaugeHistory(this.deviceID); // Data to display
  }
  displayMonthly()
  {
    this.dataSwitch = "Monthly";
    this.loadRainGaugeDetail(this.deviceID); // Calculated data
    this.loadRainGaugeHistory(this.deviceID); // Data to display
  }
  displayQuarterly()
  {
    this.dataSwitch = "Quarterly";
    this.loadRainGaugeDetail(this.deviceID); // Calculated data
    this.loadRainGaugeHistory(this.deviceID); // Data to display
  }
  displayYearly()
  {
    this.dataSwitch = "Yearly";
    this.loadRainGaugeDetail(this.deviceID); // Calculated data
    this.loadRainGaugeHistory(this.deviceID); // Data to display
  }
  displayAllTime()
  {
    this.dataSwitch = "AllTime";
    this.loadRainGaugeDetail(this.deviceID); // Calculated data
    this.loadRainGaugeHistory(this.deviceID); // Data to display
  }
  setScrollStyle(value: string): void {
    this.elementRef.nativeElement.style.setProperty('--myvar', value);
  }
  history(){
   // console.log("history for:" + this.deviceID + this.deviceType);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "deviceID":this.deviceID
      }
    };
    // Use Device Type to navigate to the right settings page
    // If (this.deviceType = "Tank" etc)
    this.router.navigate(['home/history'],navigationExtras);
  }

}
