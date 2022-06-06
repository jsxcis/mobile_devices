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
  selector: 'app-flowmeter-history',
  templateUrl: './flowmeter-history.page.html',
  styleUrls: ['./flowmeter-history.page.scss'],
})
export class FlowmeterHistoryPage implements OnInit {
  public deviceID: string;
  public deviceName: string;
  public deviceStatusDate: string;
  public deviceMode: string;
  public deviceType: string;
  public deviceIP: string;
  public loraID: string;
  public deviceLAT: string;
  public deviceLONG: string;
  // flow Meter
  public flowMeterDailyHistory: any;
  public flowMeterDetail: any;
  public historyRecords: number;

  public flowLPerPulse: string;
  public flowLPerScan: string;
  public flowPulsesPerScan: string;

  public flowingFlag: string;
  public flowTimeStamp: string;
  public flowAccumFreq: string;
  public flowDate: string;
  public flowRate: string;

  
  public flowDailyL: string;
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

      // flow Meter

      this.flowLPerPulse = params["flowLPerPulse"];
      this.flowLPerScan = params["flowLPerScan"];
      this.flowPulsesPerScan = params["flowPulsesPerScan"];

      this.flowingFlag = params["flowingFlag"];
      this.flowTimeStamp = params["flowTimeStamp"];
      this.flowAccumFreq = params["flowAccumFreq"];
      this.flowDate = params["flowDate"];
      this.flowRate = params["flowRate"];

    });
   // console.log(this.deviceID);
   // console.log(this.deviceName);
  //  console.log(this.deviceType);
    this.loadFlowMeterDetail(this.deviceID); // Calculated data
    this.loadFlowMeterHistory(this.deviceID); // Data to display
  }
  displayList()
  {
  //  console.log("displayList");
   // console.log(this.dataSwitch);
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
  loadFlowMeterHistory(deviceID:string)
  {
   // console.log("loadflowMeterHistory for");
    this.deviceID = deviceID;
   // console.log(deviceID);
    this.postData.deviceID = deviceID;
    this.postData.req = this.dataSwitch;
    this.dataChart = [];
    
    this.xcisService.retrieveFlowMeterDailyHistory(this.postData).subscribe((res:any) => {
    this.flowMeterDailyHistory = res.flowMeterDailyHistory;
    //console.log(this.flowMeterDailyHistory);
    let numberOfRecords : number = 0;
    let xvalue : number = 0;
    this.dataChart.push(['Date','L']);
    
    for(var k in this.flowMeterDailyHistory)
    {
        numberOfRecords++;
        xvalue = parseFloat(this.flowMeterDailyHistory[k].flowDailyL);
        this.dataChart.push([this.flowMeterDailyHistory[k].flowDate,xvalue]);
        //this.dataChart[k].flowDate = this.flowMeterDailyHistory[k].flowDate;
        //this.dataChart[k].flowDailyL = this.flowMeterDailyHistory[k].flowDailyL;
      
    }
  
   // console.log(this.dataChart);
    this.historyRecords = numberOfRecords;
   // console.log('Retrieved records:' + this.historyRecords);
    },
    (error: any) => {
     // console.log("Network connection error retrieving flow Meters");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving flow Meters');
    }
    
    )
    
  }
  loadFlowMeterDetail(deviceID:string)
  {
   // console.log("loadflowMeterDetail");
    this.deviceID = deviceID;
   // console.log("showDetail");
    this.postData.deviceID = deviceID;
   // console.log(" for:")
   // console.log(this.postData.deviceID);
    this.postData.req = "detail";
    this.xcisService.retrieveFlowMeterDetail(this.postData).subscribe((res:any) => {
    this.flowMeterDetail = res.flowMeterDetail;
    this.flowDailyL = this.flowMeterDetail[0].flowDailyL;
    this.weeklyTotal = this.flowMeterDetail[0].flowWeeklyTotal;
    this.monthlyTotal = this.flowMeterDetail[0].flowMonthlyTotal;
    this.quarterlyTotal = this.flowMeterDetail[0].flowQuarterlyTotal;
    this.yearlyTotal = this.flowMeterDetail[0].flowYearlyTotal;
    this.allTimeTotal = this.flowMeterDetail[0].flowAllTimeTotal;

   // console.log(this.flowDailyL);
    },
    (error: any) => {
    //  console.log("Network connection error retrieving flow Meter detail");
     // console.log(error);
      this.toastService.presentToast('Network connection error retrieving flow Meters');
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
    this.loadFlowMeterDetail(this.deviceID); // Calculated data
    this.loadFlowMeterHistory(this.deviceID); // Data to display
  }
  displayWeekly()
  {
    this.dataSwitch = "Weekly";
    this.loadFlowMeterDetail(this.deviceID); // Calculated data
    this.loadFlowMeterHistory(this.deviceID); // Data to display
  }
  displayMonthly()
  {
    this.dataSwitch = "Monthly";
    this.loadFlowMeterDetail(this.deviceID); // Calculated data
    this.loadFlowMeterHistory(this.deviceID); // Data to display
  }
  displayQuarterly()
  {
    this.dataSwitch = "Quarterly";
    this.loadFlowMeterDetail(this.deviceID); // Calculated data
    this.loadFlowMeterHistory(this.deviceID); // Data to display
  }
  displayYearly()
  {
    this.dataSwitch = "Yearly";
    this.loadFlowMeterDetail(this.deviceID); // Calculated data
    this.loadFlowMeterHistory(this.deviceID); // Data to display
  }
  displayAllTime()
  {
    this.dataSwitch = "AllTime";
    this.loadFlowMeterDetail(this.deviceID); // Calculated data
    this.loadFlowMeterHistory(this.deviceID); // Data to display
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
