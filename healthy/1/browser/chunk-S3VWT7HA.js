import{d as M,e as T,f as F,wa as H}from"./chunk-US7S3GSJ.js";import{Gb as A,La as k,Na as y,Sa as S,V as c,Va as v,Wa as g,Xa as i,Ya as n,Za as E,ba as s,bb as h,ca as l,cb as m,db as u,lb as o,nb as b,pb as U,qb as P,rb as V,tb as f,xa as p,ya as C}from"./chunk-77BX4J3I.js";var D=(e,d)=>d.label;function j(e,d){if(e&1&&(i(0,"a",8),o(1),n()),e&2){let t=d.$implicit,r=u();S("font-bold uppercase no-underline hover:text-white ",r.isActive(t.route)?"text-white":"text-white-alpha-70",""),y("routerLink",t.route),p(),b(" ",t.label," ")}}function I(e,d){if(e&1){let t=h();i(0,"a",13),m("click",function(){s(t);let a=u(2);return l(a.hideAside())}),o(1),n()}if(e&2){let t=d.$implicit;p(),b(" ",t.label," ")}}function W(e,d){if(e&1){let t=h();i(0,"div")(1,"div",9)(2,"i",10),m("click",function(){s(t);let a=u();return l(a.hideAside())}),n()(),v(3,I,2,1,"a",11,D),i(5,"a",12),m("click",function(){s(t);let a=u();return l(a.logout())}),o(6," logout "),n()()}if(e&2){let t=u();p(3),g(t.data)}}var R=(()=>{class e{constructor(t){this.router=t,this.data=[{label:"home",route:"/user"},{label:"ebooks",route:"/user/ebooks"},{label:"coach",route:"/user/coach"},{label:"my profile",route:"/user/profile"}],this.isShowAside=!1}isActive(t){return this.router.url===t}showAside(){this.isShowAside=!0}hideAside(){this.isShowAside=!1}logout(){this.router.navigate(["/"])}static{this.\u0275fac=function(r){return new(r||e)(C(T))}}static{this.\u0275cmp=c({type:e,selectors:[["app-user-header"]],standalone:!0,features:[f],decls:11,vars:1,consts:[["headless",""],[1,"flex","justify-content-center","py-2","lg:py-4","border-bottom-1"],[1,"lg:flex","hidden","justify-content-center","gap-3"],[3,"routerLink","class"],["href","#",1,"font-bold","uppercase","no-underline","text-white-alpha-70","hover:text-white",3,"click"],[1,"lg:hidden"],[1,"pi","pi-bars","text-2xl",3,"click"],["header"," ",3,"visibleChange","visible"],[3,"routerLink"],[1,"flex","justify-content-end","p-3"],[1,"pi","pi-times","text-2xl",3,"click"],[1,"block","p-2","border-bottom-1","border-200","uppercase","no-underline","text-base","text-900","cursor-pointer"],["href","#",1,"block","p-2","border-bottom-1","border-200","uppercase","no-underline","text-base","text-900","cursor-pointer",3,"click"],[1,"block","p-2","border-bottom-1","border-200","uppercase","no-underline","text-base","text-900","cursor-pointer",3,"click"]],template:function(r,a){if(r&1){let _=h();i(0,"div",1)(1,"div",2),v(2,j,2,5,"a",3,D),i(4,"a",4),m("click",function(){return s(_),l(a.logout())}),o(5," logout "),n()(),i(6,"div",5)(7,"i",6),m("click",function(){return s(_),l(a.showAside())}),n()()(),i(8,"p-drawer",7),V("visibleChange",function(x){return s(_),P(a.isShowAside,x)||(a.isShowAside=x),l(x)}),k(9,W,7,0,"ng-template",null,0,A),n()}r&2&&(p(2),g(a.data),p(6),U("visible",a.isShowAside))},dependencies:[F,H],styles:["[_nghost-%COMP%]{width:100%;position:absolute;top:0;left:0}"]})}}return e})();var L=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-user-footer"]],standalone:!0,features:[f],decls:36,vars:0,consts:[[1,"container","py-5"],[1,"grid"],[1,"col-4"],[1,"uppercase","mb-3"],[1,"text-sm","line-height-3"],["href","#",1,"text-white","no-underline","hover:underline"],["href","tel:+48221522439",1,"text-white","no-underline","hover:underline"],["href","mailto:support@pcandhardware.com",1,"text-white","no-underline","hover:underline"],[1,"border-top-1","border-white-alpha-20","py-3","text-center","text-sm"]],template:function(r,a){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),o(4,"legal"),n(),i(5,"div",4)(6,"div")(7,"a",5),o(8," Terms & Conditions "),n()(),i(9,"div")(10,"a",5),o(11," Privacy Policy "),n()(),i(12,"div")(13,"a",5),o(14," Refund Policy "),n()()()(),i(15,"div",2)(16,"h3",3),o(17,"Contacts"),n(),i(18,"div",4)(19,"div")(20,"a",6),o(21," +48 2 21 52 24 39 "),n()(),i(22,"div")(23,"a",7),o(24," support@pcandhardware.com "),n()(),i(25,"div")(26,"a",5),o(27," Refund Policy "),n()()()(),i(28,"div",2)(29,"h3",3),o(30,"legal"),n(),i(31,"div",4)(32,"div"),o(33,"ul. Grzybowska, no.80/82, office. 700/50, 00-844, Warsaw, Poland"),n()()()()(),i(34,"div",8),o(35,"\xA9 2024 Istominia Ltd SP. Z.O.O."),n())},styles:["[_nghost-%COMP%]{display:block;background-color:#272727}"]})}}return e})();var X=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-user-page"]],standalone:!0,features:[f],decls:3,vars:0,template:function(r,a){r&1&&E(0,"app-user-header")(1,"router-outlet")(2,"app-user-footer")},dependencies:[R,L,M],styles:['[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:"";width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1}[_nghost-%COMP%]:before{background-image:url(/assets/bg-1.jpg);background-size:cover;background-position:center}[_nghost-%COMP%]:after{background-color:#0009}']})}}return e})();export{X as UserPageComponent};