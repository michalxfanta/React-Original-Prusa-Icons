(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[84,103,104,105],{126:function(o,e,r){"use strict";r.r(e);var t=r(10),a=r(6),i=r(0),n=r(38),c=r(39),l=r(40),d=r(2),h=307.7,s=function(o){var e=Object(i.useState)(o.primaryColor),r=Object(t.a)(e,2),a=r[0],s=r[1],u=Object(i.useState)(o.secondaryColor),C=Object(t.a)(u,2),g=C[0],b=C[1],T=Object(i.useState)(o.backgroundColor),R=Object(t.a)(T,2),w=R[0],m=R[1];return Object(i.useEffect)((function(){Object(l.ThemeSwitcherDuoColor)(o.theme,s,b,m)}),[o.theme,o.withBackground,o.withPadding]),Object(d.jsx)(c.Svg,{viewBox:h,width:o.width,height:o.height,withPadding:o.withPadding,children:Object(d.jsxs)(n.Scale,{viewBox:h,backgroundColor:w,withPadding:o.withPadding,withBackground:o.withBackground,backgroundRounded:o.backgroundRounded,backgroundRadius:o.backgroundRadius,width:o.width,height:o.height,children:[Object(d.jsx)("path",{fill:null===a||void 0===a?void 0:a.toString(),d:"M211.3 38.46l-18.98 19.26c17.9,14.11 29.26,34.7 29.26,57.67 0,22.96 -11.36,43.55 -29.26,57.67l18.98 19.26c23.84,-18.81 38.97,-46.26 38.97,-76.92 0,-30.67 -15.11,-58.12 -38.97,-76.92zm-133.82 173.03l-19 19.3c-35.78,-28.22 -58.48,-69.4 -58.48,-115.4 0,-46 22.69,-87.18 58.48,-115.39l19 19.28c-29.82,23.52 -48.77,57.85 -48.77,96.1 0,38.26 18.95,72.58 48.77,96.1l0 0zm8.65 -96.11c0,-22.96 11.37,-43.55 29.26,-57.67l-18.99 -19.26c-23.84,18.81 -38.97,46.26 -38.97,76.92 0,30.67 15.13,58.12 38.97,76.92l18.99 -19.26c-17.9,-14.12 -29.26,-34.7 -29.26,-57.67zm163.09 -115.38l-19 19.28c29.82,23.52 48.77,57.85 48.77,96.1 0,38.26 -18.95,72.58 -48.77,96.1l19 19.3c35.78,-28.22 58.48,-69.4 58.48,-115.4 0,-46 -22.69,-87.18 -58.48,-115.39l0 0z"}),Object(d.jsx)("path",{fill:null===g||void 0===g?void 0:g.toString(),d:"M192.31 115.39c0,-21.24 -17.23,-38.46 -38.46,-38.46 -21.23,0 -38.46,17.22 -38.46,38.46 0,16.72 10.74,30.81 25.64,36.1l0 156.21 25.64 0 0 -156.21c14.9,-5.3 25.64,-19.39 25.64,-36.1z"})]})})};e.default=s,s.defaultProps={name:"Sensor icon",componentName:"SensorIcon",description:"Icon for sensor settings for all types of printers.",tags:[a.Tag.ICONS,a.Tag.SL1],folder:a.Folder.ICONS,width:48,height:48,theme:a.Theme.LIGHT,primaryColor:a.Color.DARK_GRAY,secondaryColor:a.Color.ORANGE,withBackground:!0,backgroundColor:a.Color.WHITE,backgroundRounded:!0,backgroundRadius:h*a.DefaultRadiusRatio}},38:function(o,e,r){"use strict";r.r(e),r.d(e,"Scale",(function(){return i}));var t=r(6),a=(r(0),r(2)),i=function(o){var e=Math.round((o.viewBox-o.viewBox*(1-t.DefaultPaddingRatio))/2);return Object(a.jsxs)(a.Fragment,{children:[function(){var r;if(o.withBackground)return Object(a.jsx)("rect",{transform:o.withPadding?"translate(".concat(-2*e,", ").concat(-2*e,")"):"",fill:null===(r=o.backgroundColor)||void 0===r?void 0:r.toString(),width:o.viewBox*(1+(o.withPadding?Math.abs(t.DefaultPaddingRatio):0)),height:o.viewBox*(1+(o.withPadding?Math.abs(t.DefaultPaddingRatio):0)),rx:o.backgroundRounded?o.backgroundRadius:0,ry:o.backgroundRounded?o.backgroundRadius:0})}(),o.withPadding?Object(a.jsx)("g",{transform:"translate(".concat(-e,", ").concat(-e,")"),children:o.children}):Object(a.jsx)(a.Fragment,{children:o.children})]})}},39:function(o,e,r){"use strict";r.r(e),r.d(e,"Svg",(function(){return i}));var t=r(6),a=(r(0),r(2)),i=function(o){return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.width,height:o.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:o.withPadding?"".concat(0-o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(0-o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(t.DefaultPaddingRatio)):"".concat(0," ",0," ",o.viewBox," ").concat(o.viewBox),children:o.children})}},40:function(o,e,r){"use strict";r.r(e),r.d(e,"ThemeSwitcherMonoColor",(function(){return a})),r.d(e,"ThemeSwitcherMonoInverseColor",(function(){return i})),r.d(e,"ThemeSwitcherDuoColor",(function(){return n}));var t=r(6),a=function(o,e,r){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.DARK_GRAY),r(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.WHITE),r(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.WHITE),r(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.BLACK)}},i=function(o,e,r){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.ORANGE),r(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.ORANGE),r(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.GRAY),r(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.BLACK)}},n=function(o,e,r,a){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.DARK_GRAY),r(t.Color.ORANGE),a(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.WHITE),r(t.Color.ORANGE),a(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.WHITE),a(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.BLACK),a(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.WHITE),r(t.Color.DARK_GRAY),a(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.WHITE),a(t.Color.BLACK)}}}}]);
//# sourceMappingURL=84.7dd8269d.chunk.js.map