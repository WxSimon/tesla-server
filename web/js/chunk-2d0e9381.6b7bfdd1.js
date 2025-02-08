(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9381"],{"8d32":function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return a}));var c=n("ec02"),r=n("442e"),o=n("e379");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(e,t,n,a,i)=>{const s=e.ownerDocument.defaultView;let u=Object(r["a"])(e);const d=e=>{const t=50,{startX:n}=e;return u?n>=s.innerWidth-t:n<=t},h=e=>u?-e.deltaX:e.deltaX,w=e=>u?-e.velocityX:e.velocityX,l=n=>(u=Object(r["a"])(e),d(n)&&t()),b=e=>{const t=h(e),n=t/s.innerWidth;a(n)},p=e=>{const t=h(e),n=s.innerWidth,r=t/n,o=w(e),a=n/2,u=o>=0&&(o>.2||t>a),d=u?1-r:r,l=d*n;let b=0;if(l>5){const e=l/Math.abs(o);b=Math.min(e,540)}i(u,r<=0?.01:Object(c["h"])(0,r,.9999),b)};return Object(o["createGesture"])({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:l,onStart:n,onMove:b,onEnd:p})}}}]);
//# sourceMappingURL=chunk-2d0e9381.6b7bfdd1.js.map