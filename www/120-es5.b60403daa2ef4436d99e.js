(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{FH9X:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class u{}var o=e("pMnS"),a=e("MKJQ"),r=e("sZkV"),i=e("iInd");class b{constructor(){}ngOnInit(){}}var c=t.nb({encapsulation:0,styles:[[""]],data:{}});function s(n){return t.Gb(0,[(n()(),t.pb(0,0,null,null,3,"ion-content",[],null,null,null,a.D,a.e)),t.ob(1,49152,null,0,r.r,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),t.ob(3,212992,null,0,i.q,[i.b,t.M,t.j,[8,null],t.h],null,null)],(function(n,l){n(l,3,0)}),null)}var p=t.lb("app-index",b,(function(n){return t.Gb(0,[(n()(),t.pb(0,0,null,null,1,"app-index",[],null,null,null,s,c)),t.ob(1,114688,null,0,b,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),d=e("SVse"),h=e("s7LF"),g=e("n90K"),z=e("eYLY");let v=(()=>{class n{constructor(n,l){this.storageService=n,this.router=l}canActivate(){return new Promise(n=>{this.storageService.get(z.a.AUTH).then(l=>{l?(this.router.navigate(["home/devices"]),n(!1)):n(!0)}).catch(l=>{n(!0)})})}}return n.ngInjectableDef=t.Kb({factory:function(){return new n(t.Lb(g.a),t.Lb(i.m))},token:n,providedIn:"root"}),n})();const f=()=>Promise.all([e.e(0),e.e(117)]).then(e.bind(null,"718a")).then(n=>n.WelcomePageModuleNgFactory),m=()=>Promise.all([e.e(0),e.e(115)]).then(e.bind(null,"/yGZ")).then(n=>n.LoginPageModuleNgFactory),y=()=>Promise.all([e.e(0),e.e(116)]).then(e.bind(null,"4cNi")).then(n=>n.SignupPageModuleNgFactory);class j{}e.d(l,"IndexPageModuleNgFactory",(function(){return w}));var w=t.mb(u,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,p]],[3,t.j],t.v]),t.zb(4608,d.k,d.j,[t.s,[2,d.r]]),t.zb(4608,h.j,h.j,[]),t.zb(4608,r.a,r.a,[t.x,t.g]),t.zb(4608,r.Bb,r.Bb,[r.a,t.j,t.p]),t.zb(4608,r.Fb,r.Fb,[r.a,t.j,t.p]),t.zb(1073742336,d.b,d.b,[]),t.zb(1073742336,h.i,h.i,[]),t.zb(1073742336,h.b,h.b,[]),t.zb(1073742336,r.yb,r.yb,[]),t.zb(1073742336,i.p,i.p,[[2,i.u],[2,i.m]]),t.zb(1073742336,j,j,[]),t.zb(1073742336,u,u,[]),t.zb(1024,i.k,(function(){return[[{path:"",component:b,canActivate:[v],children:[{path:"",loadChildren:f},{path:"login",loadChildren:m},{path:"signup",loadChildren:y}]}]]}),[])])}))}}]);