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
  selector: 'app-fence-history',
  templateUrl: './fence-history.page.html',
  styleUrls: ['./fence-history.page.scss'],
})
export class FenceHistoryPage implements OnInit {
  public deviceID: string;
  public deviceName: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceType: string;
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string;
  public deviceLONG: string;
  
  //Trough
    
  public deviceLevel :string;
  public availDepth: string;
  public totalDepth: string;

  public fenceValue: string;

  public fenceDailyAverage: string;
  public fenceWeeklyAverage: string;
  public fenceMonthlyAverage : string;
  public fenceQuarterlyAverage: string;
  public fenceYearlyAverage : string;
  public fenceAllTimeAverage : string;

  public postData = {
    userID: 'jsharp',
    req: 'all',
    deviceID : "all"
  };
  public dataSwitch: string;
  public displayMode: string;
  public dataChart: any = [];

  public columnChart: GoogleChartInterface;
  
  public fenceDailyHistory: any;
  public fenceDetail: any;
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
   // console.log("ngOnInit called");
    this.dataSwitch = "Daily";
    this.displayMode = "List";
    this.setScrollStyle('visible');
  }
  ionViewWillEnter()
  {
   // console.log("Loading detail on enter");
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
      
      this.deviceLevel = params["deviceLevel"];

    });
  //  console.log(this.deviceID);
  //  console.log(this.deviceName);
  //  console.log(this.deviceType);
    this.loadFenceDetail(this.deviceID); // Calculated data
    this.loadFenceHistory(this.deviceID); // Data to display

  }
  displayList()
  {
  //  console.log("displayList");
  //  console.log(this.dataSwitch);
    this.displayMode = "List";
    this.setScrollStyle('visible'); // Scroll on
    this.ionViewWillEnter();
  }
  displayGraph()
  {
   // console.log("displayGraph");
   // console.log(this.dataSwitch);
    this.displayMode = "Graph";
    this.loadColumnChart();
    this.setScrollStyle('hidden'); // Scroll off
    this.setScrollStyle('visible'); // Scroll on
    //this.ionViewWillEnter();
   
  }
  loadFenceHistory(deviceID:string)
  {
  //  console.log("loadFenceHistory for");
    this.deviceID = deviceID;
  //  console.log(deviceID);
    this.postData.deviceID = deviceID;
    this.postData.req = this.dataSwitch;
    this.dataChart = [];
    
    this.xcisService.retrieveFenceDailyHistory(this.postData).subscribe((res:any) => {
    this.fenceDailyHistory = res.fenceDailyHistory;
   // console.log(this.fenceDailyHistory);
    let numberOfRecords : number = 0;
    let xvalue : number = 0;
    this.dataChart.push(['Date','Level']);
    
    for(var k in this.fenceDailyHistory)
    {
        numberOfRecords++;
        xvalue = parseFloat(this.fenceDailyHistory[k].averageLevel);
        // switch based on data to be displayed ( time or by date)
        if (this.dataSwitch == "Daily")
        {
          this.dataChart.push([this.fenceDailyHistory[k].levelTime,xvalue]);
        }
        else
        {
          this.dataChart.push([this.fenceDailyHistory[k].levelDate,xvalue]);
        }
        //this.dataChart[k].rainDate = this.rainGaugeDailyHistory[k].rainDate;
        //this.dataChart[k].rainDailyMM = this.rainGaugeDailyHistory[k].rainDailyMM;
      
    }
  
   // console.log(this.dataChart);
    this.historyRecords = numberOfRecords;
   // console.log('Retrieved records:' + this.historyRecords);
    },
    (error: any) => {
     // console.log("Network connection error retrieving rain gauges");
    //  console.log(error);
      this.toastService.presentToast('Network connection error retrieving rain gauges');
    }
    
    )
    
  }
  loadFenceDetail(deviceID:string)
  {
   // console.log("loadFenceDetail");
    this.deviceID = deviceID;
   // console.log("showDetail");
    this.postData.deviceID = deviceID;
   // console.log(" for:")
  //  console.log(this.postData.deviceID);
    this.postData.req = "detail";
    this.xcisService.retrieveFenceDetail(this.postData).subscribe((res:any) => {
    this.fenceDetail = res.fenceDetail;
    this.fenceDailyAverage = this.fenceDetail[0].fenceDailyAverage;
    this.fenceWeeklyAverage = this.fenceDetail[0].fenceWeeklyAverage;
    this.fenceMonthlyAverage = this.fenceDetail[0].fenceMonthlyAverage;
    this.fenceQuarterlyAverage = this.fenceDetail[0].fenceQuarterlyAverage;
    this.fenceYearlyAverage = this.fenceDetail[0].fenceYearlyAverage;
    this.fenceAllTimeAverage = this.fenceDetail[0].fenceAllTimeAverage;

   // console.log(this.fenceDailyAverage);
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
        vAxis: { ticks:[0,100,200,300,400,500,600,700,800,900,1000]}
      },
    };
  }
  displayDaily()
  {
    this.dataSwitch = "Daily";
    this.loadFenceDetail(this.deviceID); // Calculated data
    this.loadFenceHistory(this.deviceID); // Data to display
  }
  displayWeekly()
  {
    this.dataSwitch = "Weekly";
    this.loadFenceDetail(this.deviceID); // Calculated data
    this.loadFenceHistory(this.deviceID); // Data to display
  }
  displayMonthly()
  {
    this.dataSwitch = "Monthly";
    this.loadFenceDetail(this.deviceID); // Calculated data
    this.loadFenceHistory(this.deviceID); // Data to display
  }
  displayQuarterly()
  {
    this.dataSwitch = "Quarterly";
    this.loadFenceDetail(this.deviceID); // Calculated data
    this.loadFenceHistory(this.deviceID); // Data to display
  }
  displayYearly()
  {
    this.dataSwitch = "Yearly";
    this.loadFenceDetail(this.deviceID); // Calculated data
    this.loadFenceHistory(this.deviceID); // Data to display
  }
  displayAllTime()
  {
    this.dataSwitch = "AllTime";
    this.loadFenceDetail(this.deviceID); // Calculated data
    this.loadFenceHistory(this.deviceID); // Data to display
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
