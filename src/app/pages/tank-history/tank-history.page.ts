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
  selector: 'app-tank-history',
  templateUrl: './tank-history.page.html',
  styleUrls: ['./tank-history.page.scss'],
})
export class TankHistoryPage implements OnInit {
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

  public tankDailyAverage: string;
  public tankWeeklyAverage: string;
  public tankMonthlyAverage : string;
  public tankQuarterlyAverage: string;
  public tankYearlyAverage : string;
  public tankAllTimeAverage : string;

  public postData = {
    userID: 'jsharp',
    req: 'all',
    deviceID : "all"
  };
  public dataSwitch: string;
  public displayMode: string;
  public dataChart: any = [];

  public columnChart: GoogleChartInterface;
  
  public tankDailyHistory: any;
  public tankDetail: any;
  public historyRecords: number;

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

      // Tanks
      this.totalVolume = params ["totalVolume"];
      this.availVolume = params["availVolume"];
      this.reserveDepth = params["reserveDepth"];
      this.reserveVolume = params["reserveVolume"];
      this.deviceLevel = params["deviceLevel"];
      this.availDepth = params["availDepth"];
      this.totalDepth = params["totalDepth"];
  

    });
    //console.log(this.deviceID);
   // console.log(this.deviceName);
   // console.log(this.deviceType);
    this.loadTankDetail(this.deviceID); // Calculated data
    this.loadTankHistory(this.deviceID); // Data to display

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
  //  console.log("displayGraph");
  ///  console.log(this.dataSwitch);
    this.displayMode = "Graph";
    this.loadColumnChart();
    this.setScrollStyle('hidden'); // Scroll off
    this.setScrollStyle('visible'); // Scroll on
    //this.ionViewWillEnter();
   
  }
  loadTankHistory(deviceID:string)
  {
    //console.log("loadTankHistory for");
    this.deviceID = deviceID;
   // console.log(deviceID);
    this.postData.deviceID = deviceID;
    this.postData.req = this.dataSwitch;
    this.dataChart = [];
    
    this.xcisService.retrieveTankDailyHistory(this.postData).subscribe((res:any) => {
    this.tankDailyHistory = res.tankDailyHistory;
    //console.log(this.rainGaugeDailyHistory);
    let numberOfRecords : number = 0;
    let xvalue : number = 0;
    this.dataChart.push(['Date','Level']);
    
    for(var k in this.tankDailyHistory)
    {
        numberOfRecords++;
        xvalue = parseFloat(this.tankDailyHistory[k].averageLevel);
        // switch based on data to be displayed ( time or by date)
        if (this.dataSwitch == "Daily")
        {
          this.dataChart.push([this.tankDailyHistory[k].levelTime,xvalue]);
        }
        else
        {
          this.dataChart.push([this.tankDailyHistory[k].levelDate,xvalue]);
        }
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
  loadTankDetail(deviceID:string)
  {
    //console.log("loadTankDetail");
    this.deviceID = deviceID;
    //console.log("showDetail");
    this.postData.deviceID = deviceID;
    //console.log(" for:")
   // console.log(this.postData.deviceID);
    this.postData.req = "detail";
    this.xcisService.retrieveTankDetail(this.postData).subscribe((res:any) => {
    this.tankDetail = res.tankDetail;
    this.tankDailyAverage = this.tankDetail[0].tankDailyAverage;
    this.tankWeeklyAverage = this.tankDetail[0].tankWeeklyAverage;
    this.tankMonthlyAverage = this.tankDetail[0].tankMonthlyAverage;
    this.tankQuarterlyAverage = this.tankDetail[0].tankQuarterlyAverage;
    this.tankYearlyAverage = this.tankDetail[0].tankYearlyAverage;
    this.tankAllTimeAverage = this.tankDetail[0].tankAllTimeAverage;

    //console.log(this.tankDailyAverage);
    },
    (error: any) => {
     // console.log("Network connection error retrieving rain gauge detail");
     // console.log(error);
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
        vAxis: { ticks:[0,10,20,30,40,50,60,70,80,90,100]}
      },
    };
  }
  displayDaily()
  {
    this.dataSwitch = "Daily";
    this.loadTankDetail(this.deviceID); // Calculated data
    this.loadTankHistory(this.deviceID); // Data to display
  }
  displayWeekly()
  {
    this.dataSwitch = "Weekly";
    this.loadTankDetail(this.deviceID); // Calculated data
    this.loadTankHistory(this.deviceID); // Data to display
  }
  displayMonthly()
  {
    this.dataSwitch = "Monthly";
    this.loadTankDetail(this.deviceID); // Calculated data
    this.loadTankHistory(this.deviceID); // Data to display
  }
  displayQuarterly()
  {
    this.dataSwitch = "Quarterly";
    this.loadTankDetail(this.deviceID); // Calculated data
    this.loadTankHistory(this.deviceID); // Data to display
  }
  displayYearly()
  {
    this.dataSwitch = "Yearly";
    this.loadTankDetail(this.deviceID); // Calculated data
    this.loadTankHistory(this.deviceID); // Data to display
  }
  displayAllTime()
  {
    this.dataSwitch = "AllTime";
    this.loadTankDetail(this.deviceID); // Calculated data
    this.loadTankHistory(this.deviceID); // Data to display
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
  setScrollStyle(value: string): void {
    this.elementRef.nativeElement.style.setProperty('--myvar', value);
  }
}
