(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[41,103,104,105],{38:function(o,e,r){"use strict";r.r(e),r.d(e,"Scale",(function(){return i}));var t=r(6),a=(r(0),r(2)),i=function(o){var e=Math.round((o.viewBox-o.viewBox*(1-t.DefaultPaddingRatio))/2);return Object(a.jsxs)(a.Fragment,{children:[function(){var r;if(o.withBackground)return Object(a.jsx)("rect",{transform:o.withPadding?"translate(".concat(-2*e,", ").concat(-2*e,")"):"",fill:null===(r=o.backgroundColor)||void 0===r?void 0:r.toString(),width:o.viewBox*(1+(o.withPadding?Math.abs(t.DefaultPaddingRatio):0)),height:o.viewBox*(1+(o.withPadding?Math.abs(t.DefaultPaddingRatio):0)),rx:o.backgroundRounded?o.backgroundRadius:0,ry:o.backgroundRounded?o.backgroundRadius:0})}(),o.withPadding?Object(a.jsx)("g",{transform:"translate(".concat(-e,", ").concat(-e,")"),children:o.children}):Object(a.jsx)(a.Fragment,{children:o.children})]})}},39:function(o,e,r){"use strict";r.r(e),r.d(e,"Svg",(function(){return i}));var t=r(6),a=(r(0),r(2)),i=function(o){return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.width,height:o.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:o.withPadding?"".concat(0-o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(0-o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(t.DefaultPaddingRatio)):"".concat(0," ",0," ",o.viewBox," ").concat(o.viewBox),children:o.children})}},40:function(o,e,r){"use strict";r.r(e),r.d(e,"ThemeSwitcherMonoColor",(function(){return a})),r.d(e,"ThemeSwitcherMonoInverseColor",(function(){return i})),r.d(e,"ThemeSwitcherDuoColor",(function(){return n}));var t=r(6),a=function(o,e,r){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.DARK_GRAY),r(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.WHITE),r(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.WHITE),r(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.BLACK)}},i=function(o,e,r){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.ORANGE),r(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.ORANGE),r(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.GRAY),r(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.BLACK)}},n=function(o,e,r,a){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.DARK_GRAY),r(t.Color.ORANGE),a(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.WHITE),r(t.Color.ORANGE),a(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.WHITE),a(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.BLACK),a(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.WHITE),r(t.Color.DARK_GRAY),a(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.WHITE),a(t.Color.BLACK)}}},83:function(o,e,r){"use strict";r.r(e);var t=r(10),a=r(6),i=r(0),n=r(38),c=r(39),d=r(40),l=r(2),h=4e3,s=function(o){var e=Object(i.useState)(o.primaryColor),r=Object(t.a)(e,2),a=r[0],s=r[1],u=Object(i.useState)(o.secondaryColor),C=Object(t.a)(u,2),g=C[0],b=C[1],T=Object(i.useState)(o.backgroundColor),R=Object(t.a)(T,2),w=R[0],m=R[1];return Object(i.useEffect)((function(){Object(d.ThemeSwitcherDuoColor)(o.theme,s,b,m)}),[o.theme,o.withBackground,o.withPadding]),Object(l.jsx)(c.Svg,{viewBox:h,width:o.width,height:o.height,withPadding:o.withPadding,children:Object(l.jsxs)(n.Scale,{viewBox:h,backgroundColor:w,withPadding:o.withPadding,withBackground:o.withBackground,backgroundRounded:o.backgroundRounded,backgroundRadius:o.backgroundRadius,width:o.width,height:o.height,children:[Object(l.jsx)("path",{fill:null===g||void 0===g?void 0:g.toString(),d:"M2000 1647.5c195.02,0 352.5,157.42 352.5,352.5 0,195.02 -157.42,352.5 -352.5,352.5 -195.02,0 -352.5,-157.42 -352.5,-352.5 0,-195.02 157.42,-352.5 352.5,-352.5z"}),Object(l.jsx)("path",{fill:null===a||void 0===a?void 0:a.toString(),d:"M2011.78 1276.22c397.12,0 721.4,324.28 721.4,721.4 0,197.4 -79.9,378.3 -211.48,509.9l256.1 256.12c197.4,-197.4 317.22,-467.62 317.22,-766.02 0,-596.9 -484.1,-1080.92 -1080.92,-1080.92 -596.88,0 -1080.92,484.1 -1080.92,1080.92 0,298.4 119.82,568.68 317.22,766.02l256.1 -256.12c-131.58,-131.6 -211.48,-310.2 -211.48,-509.9 0,-397.12 324.28,-721.4 721.4,-721.4l-4.7 0 0.06 0zm0 -721.4c794.22,0 1440.5,646.2 1440.5,1440.48 0,397.1 -162.12,756.62 -423,1019.8l256.12 256.12c324.28,-324.3 528.7,-775.42 528.7,-1273.6 0,-994 -806,-1800 -1800,-1800 -994,0 -1800,806 -1800,1800 0,498.18 202.1,947 528.7,1273.6l256.12 -256.12c-260.82,-260.8 -423,-622.7 -423,-1019.8 0,-794.22 646.2,-1440.48 1440.5,-1440.48l-4.64 0z"})]})})};e.default=s,s.defaultProps={name:"Hotspot Icon",componentName:"HotspotIcon",description:"Setting up an access point in the printer.",tags:[a.Tag.ICONS,a.Tag.SL1],folder:a.Folder.ICONS,width:48,height:48,theme:a.Theme.LIGHT,primaryColor:a.Color.DARK_GRAY,secondaryColor:a.Color.ORANGE,withBackground:!0,backgroundColor:a.Color.WHITE,backgroundRounded:!0,backgroundRadius:h*a.DefaultRadiusRatio}}}]);
//# sourceMappingURL=41.586f20b5.chunk.js.map