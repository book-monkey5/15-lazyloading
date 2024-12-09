import{a as A}from"./chunk-5QQRY6KJ.js";import{$ as P,Aa as ie,B as p,C as b,H as m,I as C,M as d,P as s,Q as V,R as o,S as n,T as S,W as h,X as v,Y as M,Z as $,_ as r,aa as W,c as N,da as q,ea as z,fa as U,h as R,i as F,j as B,k as j,ka as Z,la as k,m as L,ma as G,p as D,pa as J,q as _,qa as K,ra as Q,s as O,sa as X,ta as Y,v as u,va as ee,w as f,xa as l,ya as te,za as T}from"./chunk-JPVAMHGS.js";var pe=e=>["/books",e];function se(e,i){if(e&1&&(o(0,"li")(1,"a",6),r(2),o(3,"p",7),r(4),n()()()),e&2){let t=i.$implicit;p(),s("routerLink",q(3,pe,t.isbn)),p(),W(" ",t.title," "),p(2),P(t.subtitle)}}function ce(e,i){e&1&&(o(0,"li"),r(1,"No results"),n())}function me(e,i){if(e&1&&(o(0,"ul",3),d(1,se,5,5,"li",4)(2,ce,2,0,"li",5),n()),e&2){let t=i.ngIf;p(),s("ngForOf",t),p(),s("ngIf",!t.length)}}var I=class e{constructor(i){this.service=i;this.results$=this.input$.pipe(R(t=>t.length>=3),F(500),B(),L(()=>this.isLoading=!0),j(t=>this.service.getAllSearch(t)),L(()=>this.isLoading=!1))}input$=new N;isLoading=!1;results$;static \u0275fac=function(t){return new(t||e)(b(ie))};static \u0275cmp=m({type:e,selectors:[["bm-search"]],standalone:!1,decls:4,vars:5,consts:[["searchInput",""],["type","search","autocomplete","off","aria-label","Search",3,"input"],["class","search-results",4,"ngIf"],[1,"search-results"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["role","doc-subtitle"]],template:function(t,a){if(t&1){let c=h();o(0,"input",1,0),v("input",function(){u(c);let re=$(1);return f(a.input$.next(re.value))}),n(),d(2,me,3,2,"ul",2),z(3,"async")}t&2&&(V("loading",a.isLoading),p(2),s("ngIf",U(3,3,a.results$)))},dependencies:[Z,k,l,G],encapsulation:2})};var x=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["bm-home"]],standalone:!1,decls:7,vars:0,consts:[["routerLink","/books",1,"button","red"]],template:function(t,a){t&1&&(o(0,"h1"),r(1,"Home"),n(),o(2,"a",0),r(3,` Show book list
`),n(),o(4,"h2"),r(5,"Search"),n(),S(6,"bm-search"))},dependencies:[l,I],encapsulation:2})};var ue=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:x},{path:"books",loadChildren:()=>import("./chunk-SYU6IVWG.js").then(e=>e.BooksModule)},{path:"admin",loadChildren:()=>import("./chunk-VIRMXRZD.js").then(e=>e.AdminModule)}],y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=C({type:e});static \u0275inj=_({imports:[T.forRoot(ue),T]})};function de(e,i){if(e&1){let t=h();o(0,"button",6),v("click",function(){u(t);let c=M();return f(c.auth.login())}),r(1,"Login"),n()}}function he(e,i){if(e&1){let t=h();o(0,"button",7),v("click",function(){u(t);let c=M();return f(c.auth.logout())}),r(1,"Logout"),n()}}var w=class e{constructor(i){this.auth=i}static \u0275fac=function(t){return new(t||e)(b(A))};static \u0275cmp=m({type:e,selectors:[["bm-root"]],standalone:!1,decls:12,vars:2,consts:[["routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/books","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/admin","routerLinkActive","active","ariaCurrentWhenActive","page"],[1,"actions"],["class","green",3,"click",4,"ngIf"],["class","red",3,"click",4,"ngIf"],[1,"green",3,"click"],[1,"red",3,"click"]],template:function(t,a){t&1&&(o(0,"nav")(1,"a",0),r(2,"Home"),n(),o(3,"a",1),r(4,"Books"),n(),o(5,"a",2),r(6,"Administration"),n(),o(7,"div",3),d(8,de,2,0,"button",4)(9,he,2,0,"button",5),n()(),o(10,"main"),S(11,"router-outlet"),n()),t&2&&(p(8),s("ngIf",!a.auth.isAuthenticated),p(),s("ngIf",a.auth.isAuthenticated))},dependencies:[k,ee,l,te],encapsulation:2})};var H=class e{constructor(i){this.authService=i}intercept(i,t){let a="1234567890";if(this.authService.isAuthenticated){let c=i.clone({setHeaders:{Authorization:`Bearer ${a}`}});return t.handle(c)}else return t.handle(i)}static \u0275fac=function(t){return new(t||e)(O(A))};static \u0275prov=D({token:e,factory:e.\u0275fac})};var E=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=C({type:e,bootstrap:[w]});static \u0275inj=_({providers:[K(Q()),{provide:J,useClass:H,multi:!0}],imports:[Y,y]})};X().bootstrapModule(E,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));
