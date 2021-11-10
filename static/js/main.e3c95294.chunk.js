(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{15:function(e,t,n){e.exports={wrapper:"style_wrapper__3ocmn",hidden:"style_hidden__3oGHd",searchBox:"style_searchBox__24emO",logo:"style_logo__3CF3P",root:"style_root__2rMqp"}},37:function(e,t,n){e.exports={container:"styles_container__3sy7a"}},53:function(e,t,n){},54:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(11),r=n.n(s),o=(n(53),n(8)),i=(n(54),n(15)),l=n.n(i),d=n(12),u=n(16),j=n(36),h=n.n(j),b={data:{},errorMessage:null},_=function(e){return{type:"SET_WEATHER",data:e}},O=function(e){return{type:"SET_ERROR",error:e}},f=n(37),y=n.n(f),p=n(2),m=function(e){var t=e.className,n=e.children;return Object(p.jsx)("div",{className:[y.a.container,null!==t&&void 0!==t?t:""].join(" "),children:n})},x=n(106),v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return(null===e||void 0===e?void 0:e.length)>0})).join(" ")},w=function(e){var t=e.setShouldInfo,n=e.shouldInfo,c=Object(d.b)(),s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],u=r[1],j=Object(a.useCallback)((function(e){var n;"Enter"===e.key&&(c((n=i,function(e){h.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=460af259479a2574e456a34ffff0205c&units=metric")).then((function(t){e(_(t.data)),e(O(null))})).catch((function(t){e(_(null)),e(O(t.response.data.message))}))})),u(""),t(!0))}),[t,i,c]);return Object(p.jsx)("div",{className:v(l.a.wrapper,n&&l.a.hidden),children:Object(p.jsx)(m,{children:Object(p.jsxs)("div",{className:l.a.searchBox,children:[Object(p.jsx)("h1",{className:l.a.logo,children:"Weather"}),Object(p.jsx)(x.a,{id:"standard-basic",label:"Search...",variant:"standard",className:l.a.root,color:"primary",type:"text",onChange:function(e){u(e.currentTarget.value)},value:i,onKeyPress:j})]})})})},g=n(9),N=n.n(g),S=function(e){var t,n,c=e.setShouldInfo,s=e.shouldInfo,r=e.iconCountry,i=Object(d.c)((function(e){return e.weather.data})),l=Object(d.c)((function(e){return e.weather})),u=Object(a.useState)(),j=Object(o.a)(u,2),h=j[0],b=j[1],_=new Date;Object(a.useEffect)((function(){setInterval((function(){b(_.toLocaleTimeString())}),1e3)}),[_]);var O=_.getDay(),f=_.getMonth(),y=_.getFullYear();return Object(p.jsxs)("div",{className:v(N.a.box,s&&N.a.show),children:[Object(p.jsx)("span",{className:N.a.exit,onClick:function(){return c(!1)},children:"\u2715"}),Object(p.jsxs)(m,{children:[Object(p.jsxs)("div",{className:"".concat(l.errorMessage?N.a.hidden:N.a.boxItems),children:[Object(p.jsx)("img",{src:"https://www.countryflagicons.com/FLAT/64/".concat(r,".png"),alt:""}),Object(p.jsx)("p",{className:N.a.city,children:i.name}),Object(p.jsxs)("div",{className:N.a.timeBox,children:[Object(p.jsxs)("span",{className:N.a.date,children:[" ","".concat(["Sunday"," Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][O]," ").concat(f," ").concat(y)]}),Object(p.jsx)("p",{className:N.a.time,children:h})]}),Object(p.jsxs)("p",{className:N.a.temp,children:[Math.floor(null===(t=i.main)||void 0===t?void 0:t.temp)," \u2103 "]}),Object(p.jsx)("p",{className:N.a.sky,children:i.weather&&i.weather[0].description}),Object(p.jsxs)("div",{className:N.a.wind,children:[Object(p.jsx)("span",{children:"wind"}),Object(p.jsx)("span",{children:"|"}),Object(p.jsxs)("span",{children:[null===(n=i.wind)||void 0===n?void 0:n.speed," km/h"]})]})]}),Object(p.jsx)("div",{className:N.a.error,children:null!==l.errorMessage?l.errorMessage:""})]})]})};var E=function(){var e,t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],r=Object(d.c)((function(e){return e.weather.data}));return Object(a.useEffect)((function(){document.addEventListener("keyup",(function(e){"Escape"===e.key&&s(!1)}))}),[c]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(w,{setShouldInfo:s,shouldInfo:c}),Object(p.jsx)(S,{setShouldInfo:s,shouldInfo:c,iconCountry:null===(e=r.sys)||void 0===e?void 0:e.country})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},T=n(22),k=n(39),M=Object(T.b)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER":return Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)({},t.data)});case"SET_ERROR":return Object(u.a)(Object(u.a)({},e),{},{errorMessage:t.error});default:return e}}}),B=Object(T.c)(M,Object(T.a)(k.a));window.store=B,r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(d.a,{store:B,children:Object(p.jsx)(E,{})})}),document.getElementById("root")),I()},9:function(e,t,n){e.exports={box:"style_box__1YfMU",show:"style_show__2kOaW",timeBox:"style_timeBox__2KN9v",date:"style_date__AyvsT",time:"style_time__3hoGm",exit:"style_exit__20sM_",hidden:"style_hidden__13bOG",error:"style_error__1NXHq",boxItems:"style_boxItems__pV2B5",city:"style_city__-Rjur",temp:"style_temp__2rpQU",sky:"style_sky__33Ddt",wind:"style_wind__3VOnz"}}},[[81,1,2]]]);
//# sourceMappingURL=main.e3c95294.chunk.js.map