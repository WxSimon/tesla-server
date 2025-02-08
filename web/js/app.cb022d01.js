(function(t){function n(n){for(var o,s,c=n[0],r=n[1],l=n[2],d=0,u=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);_&&_(n);while(u.length)u.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,s=1;s<e.length;s++){var r=e[s];0!==a[r]&&(o=!1)}o&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c8871":"56ecb7cb","chunk-2d0d3c84":"9b33aca6","chunk-2d0d6d65":"b3d2288c","chunk-2d0d78b2":"78f1259e","chunk-2d0e9381":"6b7bfdd1","chunk-2d20732c":"a022c9b7","chunk-2d2080c7":"c3cbe28b","chunk-2d21d677":"5e67fb1b"}[t]+".js"}function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e=a[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=a[t]=[n,o]}));n.push(e[2]=o);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=s(t);var l=new Error;i=function(n){r.onerror=r.onload=null,clearTimeout(d);var e=a[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,e[1](l)}a[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:r})}),12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(n)},c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/",c.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var d=0;d<r.length;d++)n(r[d]);var _=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0149":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);var o=e("2b0e"),a=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("Main")],1)},i=[],s=function(){var t=this,n=t._self._c;return n("div",{staticClass:"main",attrs:{id:"main"}},[n("ion-card",{attrs:{color:"dark"}},[n("ion-card-header",[n("ion-card-title",[n("div",{staticClass:"card-header"},[n("span",{staticClass:"card-header-title"},[t._v(t._s(t.statData.car_name))]),n("div",{staticClass:"card-header-charge"},[n("div",{staticClass:"card-header-charge-details"},[n("ion-icon",{attrs:{icon:t.icons.batteryChargingOutline,color:"success"}}),n("span",[t._v(t._s(t.statData.electric)+" %")])],1)])])]),n("span",{staticClass:"card-km"},[t._v(t._s(t.statData.less_distance)+" km")])],1),n("ion-card-content",[n("img",{staticStyle:{width:"100%"},attrs:{alt:"Silhouette of mountains",src:e("71b7")}})])],1),n("div",{staticClass:"content"},[n("div",{staticClass:"content-stat"},[n("ion-grid",[n("ion-row",[n("ion-col",[n("ion-icon",{attrs:{icon:t.icons.speedometerOutline,color:"success"}}),t._v(" 里程: "),n("span",[t._v(t._s(t.statData.distance)+" km")])],1),n("ion-col",[n("ion-icon",{attrs:{icon:t.icons.batteryFullOutline,color:"success"}}),t._v(" 耗电: "),n("span",[t._v(t._s(t.statData.energy)+" Kwh")])],1)],1),n("ion-row",[n("ion-col",[n("ion-icon",{attrs:{icon:t.icons.walletOutline,color:"success"}}),t._v(" 花费: "),n("span",[t._v(t._s(t.statData.cost)+" ¥")])],1),n("ion-col",[n("ion-icon",{attrs:{icon:t.icons.calculatorOutline,color:"success"}}),t._v(" 百公里: "),n("span",[t._v(t._s(t.statData.price)+" ¥")])],1)],1)],1)],1),t._l(t.driveDatas,(function(e,o){return n("div",{key:o,staticClass:"content-item"},[n("span",{staticClass:"content-item-title"},[t._v(t._s(e.time))]),t._l(e.drives,(function(o,a){return n("div",{key:a,staticClass:"content-item-box"},[n("div",{staticStyle:{position:"relative"}},["drive"===o.type?n("div",{staticClass:"content-item-box-right-tag"},[n("span",[n("ion-icon",{attrs:{icon:t.icons.carSportOutline}}),t._v("行驶数据")],1)]):n("div",{staticClass:"content-item-box-right-tag-battery"},[n("span",[n("ion-icon",{attrs:{icon:t.icons.batteryChargingOutline}}),t._v("充电数据")],1)])]),"drive"==o.type?n("div",[n("div",{staticClass:"content-item-box-location"},[n("div",{staticClass:"content-item-box-location-icon"},[t._v(" 起 ")]),n("span",{staticClass:"content-item-box-location-text"},[t._v(t._s(o.d_from_addr))]),o.d_from_tag?n("div",{staticClass:"content-item-box-location-tag"},[t._v(" "+t._s(o.d_from_tag)+" ")]):t._e()]),n("div",{staticClass:"content-item-box-location",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"content-item-box-location-icon"},[t._v(" 终 ")]),n("span",{staticClass:"content-item-box-location-text"},[t._v(t._s(o.d_to_addr))]),o.d_to_tag?n("div",{staticClass:"content-item-box-location-tag"},[t._v(" "+t._s(o.d_to_tag)+" ")]):t._e()]),n("div",{staticStyle:{"margin-top":"10px"}},[n("span",{staticClass:"content-item-box-time"},[t._v(t._s(e.time)+" "+t._s(o.start_time)+"-"+t._s(o.end_time))]),n("span",{staticClass:"content-item-box-duration"},[t._v("耗时: "+t._s(o.duration))])]),n("div",{staticClass:"content-item-box-details"},[n("ion-grid",[n("ion-row",[n("ion-col",[t._v("里程: "),n("span",{staticStyle:{color:"#43CF7C"}},[t._v(t._s(o.d_distance)+" km")])]),n("ion-col",[t._v("用时: "+t._s(o.duration)+" ")]),n("ion-col",[t._v("能耗:"),n("span",{staticStyle:{"font-size":"8px"}},[t._v(" "+t._s(o.d_avg_energy)+" wh/km")])])],1),n("ion-row",[n("ion-col",[t._v("表显消耗: "),n("span",{staticStyle:{color:"#D6D6D6"}},[t._v(t._s(o.d_car_distance)+" km")])]),n("ion-col",[t._v("预估费用: "),n("span",{staticStyle:{color:"#FFFF05"}},[t._v(t._s(o.d_cost)+" ¥")])]),n("ion-col",[t._v("消耗: "+t._s(o.d_energy)+" wh")])],1)],1)],1)]):t._e(),"charge"==o.type?n("div",[n("div",{staticClass:"content-item-box-location"},[n("span",{staticClass:"content-item-box-location-text"},[t._v(t._s(o.location))]),o.location_tag?n("div",{staticClass:"content-item-box-location-tag"},[t._v(" "+t._s(o.location_tag)+" ")]):t._e()]),n("div",{staticStyle:{"margin-top":"10px"}},[n("span",{staticClass:"content-item-box-time"},[t._v(t._s(e.time)+" "+t._s(o.start_time)+"-"+t._s(o.end_time))]),n("span",{staticClass:"content-item-box-duration"},[t._v("耗时: "+t._s(o.duration)+" ")])]),n("div",{staticClass:"content-item-box-details"},[n("ion-grid",[n("ion-row",[n("ion-col",[t._v("冲入电量: "),n("span",{staticStyle:{color:"#43CF7C"}},[t._v(t._s(o.charge)+" Kwh")])]),n("ion-col",[t._v("花费: "),n("span",{staticStyle:{color:"#FFFF05"}},[t._v(t._s(o.cost)+" ¥")])])],1),n("ion-row",[n("ion-col",[t._v("增加里程: "+t._s(o.add_distance)+" km")]),n("ion-col",[t._v("充电类型: "+t._s("Ac"==o.charge_type?"交流":"直流"))])],1),n("ion-row",[n("ion-col",[t._v("电量提升: "+t._s(o.charge_start_power)+"%->"+t._s(o.charge_end_power)+"%")]),n("ion-col",[t._v("里程提升: "),n("span",{staticStyle:{"font-size":"8px"}},[t._v(" "+t._s(o.charge_start_distance)+"km->"+t._s(o.charge_end_distance)+"km ")])])],1)],1)],1)]):t._e()])}))],2)}))],2)],1)},c=[],r=e("cee4"),l=e("ff79"),d={data:function(){return{statData:{},driveDatas:[],icons:l}},components:{},async mounted(){const t=await r["a"].get("./data");this.driveDatas=t.data.driveDatas,this.statData=t.data.statData},methods:{}},_=d,u=e("2877"),v=Object(u["a"])(_,s,c,!1,null,null,null),p=v.exports,m={name:"App",components:{Main:p}},f=m,b=(e("e01e"),Object(u["a"])(f,a,i,!1,null,null,null)),h=b.exports,g=e("d867");e("a2f0");o["c"].config.productionTip=!1,o["c"].use(g["a"]),new o["c"]({render:t=>t(h)}).$mount("#app")},"71b7":function(t,n,e){t.exports=e.p+"img/model3_b.7edcfafb.png"},a2f0:function(t,n,e){},bc66:function(t,n){function e(t){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}))}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="bc66"},e01e:function(t,n,e){"use strict";e("0149")}});
//# sourceMappingURL=app.cb022d01.js.map