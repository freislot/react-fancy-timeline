(this["webpackJsonpreact-fancy-timeline-example"]=this["webpackJsonpreact-fancy-timeline-example"]||[]).push([[0],{13:function(t,n,e){t.exports=e(22)},14:function(t,n,e){},19:function(t,n,e){},22:function(t,n,e){"use strict";e.r(n);e(14);var i,o,l,a,r,d,u,v,c,s,m,p,f,h,b=e(0),g=e.n(b),x=e(9),D=e.n(x),y=(e(19),e(6)),O=e(3),j=e(1),w=e(2),E=function(t){var n,e=t.startDate,i=t.endDate;return n=12*((null===i||void 0===i?void 0:i.year)-(null===e||void 0===e?void 0:e.year)),n-=null===e||void 0===e?void 0:e.month,(n+=null===i||void 0===i?void 0:i.month)<=0?0:n},k=w.a.div(v||(v=i||(i=Object(j.a)(["\n  flex-basis: 270px;\n  flex-grow: 0;\n  flex-shrink: 0;\n"])))),M=w.a.div(c||(c=o||(o=Object(j.a)(["\n  font-weight: 500;\n  font-size: 16px;\n  margin-left: -20px;\n"])))),T=w.a.div(s||(s=l||(l=Object(j.a)(["\n  position: relative;\n"])))),C=w.a.div(m||(m=a||(a=Object(j.a)(["\n  width: 1px;\n  margin-top: 48px;\n"])))),N=w.a.div.attrs((function(t){return{lightTheme:(null===t||void 0===t?void 0:t.lightTheme)||!1}}))(p||(p=r||(r=Object(j.a)(["\n  display: flex;\n  overflow-x: scroll;\n  padding-left: 20px;\n  \n  ","{\n    color: ",";\n  };\n  ","{\n    height: ","px;\n    background: ",";\n  };\n"]))),M,(function(t){return null!==t&&void 0!==t&&t.lightTheme?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.3)"}),C,(function(t){return 44*(null===t||void 0===t?void 0:t.itemsCount)}),(function(t){return null!==t&&void 0!==t&&t.lightTheme?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.3)"})),F=w.a.div(f||(f=d||(d=Object(j.a)(["\n  width: 6px;\n  height: 100%;\n  margin-right: 12px;\n  border-radius: 4px;\n"])))),z=w.a.div.attrs((function(t){var n;return{item:Object(O.a)(Object(O.a)({},null===t||void 0===t?void 0:t.item),{},{color:(null===t||void 0===t||null===(n=t.item)||void 0===n?void 0:n.color)||"#ffffff"})}}))(h||(h=u||(u=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 1;\n  height: ","px;\n  border-radius: 4px;\n  padding: 3px;\n  font-weight: 600;\n  font-size: 14px;\n  background: ",";\n  color: ",";\n  width: ","px;\n  top: ","px;\n  left: ","%;\n\n  ","{\n    background: ",";\n  }\n"]))),34,(function(t){var n;return function(t){var n=t.hex,e=t.alpha;return"rgba("+parseInt(n.slice(1,3),16)+", "+parseInt(n.slice(3,5),16)+", "+parseInt(n.slice(5,7),16)+", "+e+")"}({hex:null===t||void 0===t||null===(n=t.item)||void 0===n?void 0:n.color,alpha:.5})}),(function(t){var n;return null===t||void 0===t||null===(n=t.item)||void 0===n?void 0:n.color}),(function(t){var n;return 22.5*(null===t||void 0===t||null===(n=t.item)||void 0===n?void 0:n.monthLength)}),(function(t){var n;return 44*((null===t||void 0===t||null===(n=t.item)||void 0===n?void 0:n.order)-1)}),(function(t){var n;return(null===t||void 0===t||null===(n=t.item)||void 0===n?void 0:n.startMonth)/12*100}),F,(function(t){var n;return null===t||void 0===t||null===(n=t.item)||void 0===n?void 0:n.color})),I=function(t){var n=t.data,e=void 0===n?[]:n,i=t.lightTheme,o=void 0!==i&&i,l=new Set;e.forEach((function(t){l.add(null===t||void 0===t?void 0:t.startDate.split(".").at(1)),l.add(null===t||void 0===t?void 0:t.endDate.split(".").at(1))}));for(var a=Math.min.apply(Math,Object(y.a)(l)),r=Math.max.apply(Math,Object(y.a)(l)),d=(new Date).getFullYear(),u=r<d?d:r,v=[],c=function(t){var n=e.filter((function(n){return Number(null===n||void 0===n?void 0:n.startDate.split(".").at(1))===t})).map((function(t){return Object(O.a)(Object(O.a)({},t),{},{monthLength:E({startDate:{year:Number(null===t||void 0===t?void 0:t.startDate.split(".").at(1)),month:Number(null===t||void 0===t?void 0:t.startDate.split(".").at(0))},endDate:{year:Number(null===t||void 0===t?void 0:t.endDate.split(".").at(1)),month:Number(null===t||void 0===t?void 0:t.endDate.split(".").at(0))}}),startMonth:Number(null===t||void 0===t?void 0:t.startDate.split(".").at(0)),order:(null===t||void 0===t?void 0:t.order)||(null===e||void 0===e?void 0:e.indexOf(t))+1})}));v.push({year:t,items:n})},s=a;s<=u;s++)c(s);return g.a.createElement(N,{lightTheme:o,itemsCount:null===e||void 0===e?void 0:e.length},null===v||void 0===v?void 0:v.map((function(t){var n;return g.a.createElement(k,{key:null===t||void 0===t?void 0:t.year},g.a.createElement(M,null,null===t||void 0===t?void 0:t.year),g.a.createElement(T,null,g.a.createElement(C,null),null===t||void 0===t||null===(n=t.items)||void 0===n?void 0:n.map((function(t){return g.a.createElement(z,{key:null===t||void 0===t?void 0:t.title,item:t},g.a.createElement(F,null),null===t||void 0===t?void 0:t.title)}))))})))},S=[{title:"React (senior)",startDate:"06.2010",endDate:"06.2017",color:"#61DAFB"},{title:"JS",startDate:"06.2013",endDate:"10.2015",color:"#FFDF00"},{title:"HTML",startDate:"04.2007",endDate:"01.2010",color:"#ff6262"},{title:"CSS",startDate:"09.2007",endDate:"04.2009",color:"#CC649C"}],J=function(){return g.a.createElement(I,{data:S})};D.a.render(g.a.createElement(J,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.eecaea7a.chunk.js.map