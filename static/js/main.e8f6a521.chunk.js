(this.webpackJsonp5box=this.webpackJsonp5box||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=(n(12),n(5)),u=n(6),i=function(e){var t=e.tiles,n=e.onClick;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"row"},t.slice(0,2).map((function(e,a){return r.a.createElement("div",{className:"box ".concat(0==t[a]?"off":"on"),key:a,id:"".concat(a),onClick:n})}))),r.a.createElement("div",{className:"row"},t.slice(2,6).map((function(e,a){return r.a.createElement("div",{className:"box ".concat(0==t[a+2]?"off":"on"),id:"".concat(a+2),key:a,onClick:n})}))))};n(13);var f=function(){var e=Object(a.useState)([0,0,0,0,0]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=[[1,2,3],[0,3,4],[0,3],[0,1,2,4],[1,3]];Object(a.useEffect)((function(){f()}),[]),Object(a.useEffect)((function(){n.every((function(e){return e==Number(1)}))&&0!=n.length&&alert("You won!!")}));var f=function(){var e=Array.from({length:5},(function(){return Math.floor(2*Math.random())}));e.every((function(e){return 1===e}))&&(e[Math.floor(5*Math.random())]=0),c(e)};return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"board"},r.a.createElement(i,{tiles:n,onClick:function(e){e.preventDefault();var t=Number(e.target.getAttribute("id"));if(console.log(t),null!==t){console.log("###");var a=Object(l.a)(n),r=n[t];r=1-r.valueOf(),a[t]=r;for(var u=0;u<o[t.valueOf()].length;u++){var i=a[o[t.valueOf()][u]];i=1-i.valueOf(),a[o[t.valueOf()][u]]=i}c(a)}}}),r.a.createElement("button",{onClick:f},"Restart"))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e8f6a521.chunk.js.map