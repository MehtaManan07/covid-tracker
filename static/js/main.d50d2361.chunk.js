(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__1Yb1e",card:"Cards_card__1Dkdu",infected:"Cards_infected__6pxMc",recovered:"Cards_recovered__2xtky",deaths:"Cards_deaths__1v4XQ"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),u=(a(91),a(6)),s=a.n(u),i=a(10),l=a(72),d=a(73),m=a(83),f=a(82),p=a(224),v=a(228),h=a(225),b=a(226),E=a(13),y=a.n(E),g=a(32),x=a.n(g),w=a(33),C=a.n(w),_=function(e){return e.data.confirmed?r.a.createElement("div",{className:y.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{style:{color:"blue"},gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h4"},r.a.createElement(x.a,{start:0,end:e.data.confirmed.value,duration:2.3,seperator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of covid 19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{style:{color:"#00e676"},gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h4"},r.a.createElement(x.a,{start:0,end:e.data.recovered.value,duration:2.7,seperator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries from covid 19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(y.a.card,y.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"error",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h4"},r.a.createElement(x.a,{start:0,end:e.data.deaths.value,duration:3.1,seperator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths due to covid 19"))))):"Loading"},k=a(31),j=a(34),O=a.n(j),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,O.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,l={confirmed:c,recovered:o,deaths:u,lastUpdate:i},e.abrupt("return",l);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=a(45),I=a(79),M=a.n(I),A=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=c.length?r.a.createElement(U.b,{data:{labels:c.map((function(e){return e.date})),datasets:[{data:c.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:c.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#d50000",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,l=e.data.confirmed?r.a.createElement(U.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[e.data.confirmed.value,e.data.recovered.value,e.data.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current condition of ".concat(e.country)}}}):null;return r.a.createElement("div",{className:M.a.container},e.country?l:u)},J=a(229),R=a(227),V=a(80),W=a.n(V),Y=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),r.a.createElement("div",null,r.a.createElement(J.a,{className:W.a.formcontrol},r.a.createElement(R.a,{defaultValue:"",onChange:function(t){return e.handleCountryChange(t.target.value)}},r.a.createElement("option",{value:"global"},"Global"),c.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))," "))},F=a(81),G=a.n(F),L=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,console.log(n),e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:G.a.container},r.a.createElement(_,{data:this.state.data}),r.a.createElement(Y,{handleCountryChange:this.handleCountryChange}),r.a.createElement(A,{country:this.state.country,data:this.state.data}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports={container:"Chart_container__3dVFY"}},80:function(e,t,a){},81:function(e,t,a){e.exports={container:"App_container__1d1jZ"}},86:function(e,t,a){e.exports=a(207)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.d50d2361.chunk.js.map