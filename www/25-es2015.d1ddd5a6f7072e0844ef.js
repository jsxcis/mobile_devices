(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{VAjK:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class b{}var i=u("pMnS"),e=u("MKJQ"),t=u("sZkV"),d=u("n90K");class p{constructor(l,n,u,o,b){this.route=l,this.menu=n,this.router=u,this.storageService=o,this.navCtrl=b}ngOnInit(){}ionViewWillEnter(){this.route.queryParams.subscribe(l=>{this.deviceID=l.deviceID,this.deviceName=l.deviceName,this.deviceIP=l.deviceIP,this.deviceLAT=l.deviceLAT,this.deviceLONG=l.deviceLONG,this.deviceMode=l.deviceMode,this.deviceStatusDate=l.deviceStatusDate,this.deviceType=l.deviceType,this.loraID=l.loraID,this.deviceComm=l.deviceComm,this.deviceBattery=l.deviceBattery,this.deviceVersion=l.deviceVersion,this.deviceUID=l.deviceUID,this.rainMMPerHour=l.rainMMPerHour,this.rainTotalMM=l.rainTotalMM,this.temperature=l.temperature,this.humidity=l.humidity,this.pressure=l.pressure,this.windSpeed=l.windSpeed,this.direction=l.direction})}deviceList(){this.router.navigate(["home/devices"],{queryParams:{deviceID:this.deviceID}})}}var r=u("iInd"),a=o.nb({encapsulation:0,styles:[["ion-col[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border:1px solid #ddd;padding:10px;font-size:medium}"]],data:{}});function c(l){return o.Gb(0,[(l()(),o.pb(0,0,null,null,12,"ion-header",[],null,null,null,e.G,e.h)),o.ob(1,49152,null,0,t.y,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,e.X,e.y)),o.ob(3,49152,null,0,t.wb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,e.B,e.c)),o.ob(5,49152,null,0,t.i,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,3,"ion-button",[["slot","start"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.deviceList()&&o),o}),e.A,e.b)),o.ob(7,49152,null,0,t.h,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,e.H,e.i)),o.ob(9,49152,null,0,t.z,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(10,0,null,0,2,"ion-title",[],null,null,null,e.W,e.x)),o.ob(11,49152,null,0,t.ub,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,[" Weather Station"])),(l()(),o.pb(13,0,null,null,206,"ion-content",[],null,null,null,e.D,e.e)),o.ob(14,49152,null,0,t.r,[o.h,o.k,o.x],null,null),(l()(),o.pb(15,0,null,0,127,"ion-grid",[],null,null,null,e.F,e.g)),o.ob(16,49152,null,0,t.x,[o.h,o.k,o.x],null,null),(l()(),o.pb(17,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(18,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(19,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(20,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(21,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(22,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(23,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Name:"])),(l()(),o.pb(25,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(26,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(27,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(28,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(29,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(30,0,["",""])),(l()(),o.pb(31,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(32,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(33,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(34,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(35,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(36,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(37,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Temperature:"])),(l()(),o.pb(39,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(40,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(41,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(42,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(43,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(44,0,[""," \u2103"])),(l()(),o.pb(45,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(46,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(47,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(48,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(49,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(50,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(51,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Humidity:"])),(l()(),o.pb(53,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(54,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(55,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(56,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(57,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(58,0,[""," %"])),(l()(),o.pb(59,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(60,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(61,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(62,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(63,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(64,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(65,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Pressure:"])),(l()(),o.pb(67,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(68,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(69,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(70,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(71,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(72,0,[""," mb"])),(l()(),o.pb(73,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(74,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(75,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(76,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(77,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(78,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(79,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Windspeed:"])),(l()(),o.pb(81,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(82,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(83,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(84,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(85,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(86,0,[""," kts"])),(l()(),o.pb(87,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(88,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(89,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(90,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(91,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(92,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(93,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Direction:"])),(l()(),o.pb(95,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(96,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(97,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(98,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(99,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(100,0,["",""])),(l()(),o.pb(101,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(102,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(103,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(104,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(105,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(106,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(107,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Total Rain:"])),(l()(),o.pb(109,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(110,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(111,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(112,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(113,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(114,0,[""," mm"])),(l()(),o.pb(115,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(116,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(117,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(118,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(119,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(120,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(121,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Rain per hour:"])),(l()(),o.pb(123,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(124,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(125,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(126,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(127,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(128,0,[""," mm"])),(l()(),o.pb(129,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(130,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(131,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(132,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(133,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(134,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(135,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Date:"])),(l()(),o.pb(137,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(138,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(139,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(140,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(141,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(142,0,["",""])),(l()(),o.pb(143,0,null,0,4,"ion-item",[["color","medium"]],null,null,null,e.M,e.k)),o.ob(144,49152,null,0,t.E,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(145,0,null,0,2,"ion-title",[["class","ion-text-center"]],null,null,null,e.W,e.x)),o.ob(146,49152,null,0,t.ub,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Details"])),(l()(),o.pb(148,0,null,0,71,"ion-grid",[],null,null,null,e.F,e.g)),o.ob(149,49152,null,0,t.x,[o.h,o.k,o.x],null,null),(l()(),o.pb(150,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(151,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(152,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(153,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(154,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(155,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(156,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Mode:"])),(l()(),o.pb(158,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(159,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(160,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(161,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(162,49152,null,0,t.K,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Fb(163,0,["",""])),(l()(),o.pb(164,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(165,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(166,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(167,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(168,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(169,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(170,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Device IP:"])),(l()(),o.pb(172,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(173,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(174,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(175,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(176,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(177,0,["",""])),(l()(),o.pb(178,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(179,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(180,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(181,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(182,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(183,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(184,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Device LAT:"])),(l()(),o.pb(186,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(187,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(188,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(189,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(190,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(191,0,["",""])),(l()(),o.pb(192,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(193,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(194,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(195,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(196,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(197,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(198,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Device LONG:"])),(l()(),o.pb(200,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(201,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(202,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(203,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(204,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(205,0,["",""])),(l()(),o.pb(206,0,null,0,13,"ion-row",[],null,null,null,e.P,e.q)),o.ob(207,49152,null,0,t.db,[o.h,o.k,o.x],null,null),(l()(),o.pb(208,0,null,0,5,"ion-col",[],null,null,null,e.C,e.d)),o.ob(209,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(210,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(211,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(212,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Device Lora ID:"])),(l()(),o.pb(214,0,null,0,5,"ion-col",[["class","ion-text-right"]],null,null,null,e.C,e.d)),o.ob(215,49152,null,0,t.q,[o.h,o.k,o.x],null,null),(l()(),o.pb(216,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),o.pb(217,0,null,null,2,"ion-label",[],null,null,null,e.N,e.o)),o.ob(218,49152,null,0,t.K,[o.h,o.k,o.x],null,null),(l()(),o.Fb(219,0,["",""]))],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,9,0,"arrow-back"),l(n,144,0,"medium"),l(n,162,0,"Online"==u.deviceMode?"success":"danger")}),(function(l,n){var u=n.component;l(n,30,0,u.deviceName),l(n,44,0,u.temperature),l(n,58,0,u.humidity),l(n,72,0,u.pressure),l(n,86,0,u.windSpeed),l(n,100,0,u.direction),l(n,114,0,u.rainTotalMM),l(n,128,0,u.rainMMPerHour),l(n,142,0,u.deviceStatusDate),l(n,163,0,u.deviceMode),l(n,177,0,u.deviceIP),l(n,191,0,u.deviceLAT),l(n,205,0,u.deviceLONG),l(n,219,0,u.loraID)}))}function h(l){return o.Gb(0,[(l()(),o.pb(0,0,null,null,1,"app-weather-detail",[],null,null,null,c,a)),o.ob(1,114688,null,0,p,[r.a,t.Ab,r.m,d.a,t.Cb],null,null)],(function(l,n){l(n,1,0)}),null)}var s=o.lb("app-weather-detail",p,h,{},{},[]),x=u("SVse"),k=u("s7LF");class v{}u.d(n,"WeatherDetailPageModuleNgFactory",(function(){return m}));var m=o.mb(b,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[i.a,s]],[3,o.j],o.v]),o.zb(4608,x.k,x.j,[o.s,[2,x.r]]),o.zb(4608,k.j,k.j,[]),o.zb(4608,t.a,t.a,[o.x,o.g]),o.zb(4608,t.Bb,t.Bb,[t.a,o.j,o.p]),o.zb(4608,t.Fb,t.Fb,[t.a,o.j,o.p]),o.zb(1073742336,x.b,x.b,[]),o.zb(1073742336,k.i,k.i,[]),o.zb(1073742336,k.b,k.b,[]),o.zb(1073742336,t.yb,t.yb,[]),o.zb(1073742336,r.p,r.p,[[2,r.u],[2,r.m]]),o.zb(1073742336,v,v,[]),o.zb(1073742336,b,b,[]),o.zb(1024,r.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);