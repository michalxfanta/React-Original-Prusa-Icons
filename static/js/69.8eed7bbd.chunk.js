(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[69,103,104,105],{111:function(o,e,r){"use strict";r.r(e);var a=r(10),t=r(6),i=r(0),n=r(38),c=r(39),d=r(40),l=r(2),h=363.64,u=function(o){var e=Object(i.useState)(o.primaryColor),r=Object(a.a)(e,2),t=r[0],u=r[1],s=Object(i.useState)(o.secondaryColor),C=Object(a.a)(s,2),g=C[0],b=C[1],T=Object(i.useState)(o.backgroundColor),R=Object(a.a)(T,2),w=R[0],m=R[1];return Object(i.useEffect)((function(){Object(d.ThemeSwitcherDuoColor)(o.theme,u,b,m)}),[o.theme,o.withBackground,o.withPadding]),Object(l.jsx)(c.Svg,{viewBox:h,width:o.width,height:o.height,withPadding:o.withPadding,children:Object(l.jsxs)(n.Scale,{viewBox:h,backgroundColor:w,withPadding:o.withPadding,withBackground:o.withBackground,backgroundRounded:o.backgroundRounded,backgroundRadius:o.backgroundRadius,width:o.width,height:o.height,children:[Object(l.jsx)("path",{fill:null===t||void 0===t?void 0:t.toString(),"fill-rule":"nonzero",d:"M181.87 51.14c-116.01,0 -174.48,140.93 -92.37,223 82.11,82.11 223,23.64 223,-92.37 0,-72.16 -58.51,-130.63 -130.63,-130.63zm-73.88 56.74c65.66,-65.66 178.42,-18.9 178.42,73.89 0,92.82 -112.76,139.54 -178.42,73.88 -40.81,-40.81 -40.81,-106.99 0,-147.8l0 0.03z"}),Object(l.jsx)("path",{fill:null===g||void 0===g?void 0:g.toString(),d:"M201.91 260.14L220.4 241.69 159.41 181.73 220.4 121.87 201.91 103.39 122.43 181.73z"})]})})};e.default=u,u.defaultProps={name:"Previous Icon",componentName:"PreviousIcon",description:"Icon for backward navigation.",tags:[t.Tag.ICONS,t.Tag.SL1],folder:t.Folder.ICONS,width:48,height:48,theme:t.Theme.LIGHT,primaryColor:t.Color.DARK_GRAY,secondaryColor:t.Color.ORANGE,withBackground:!0,backgroundColor:t.Color.WHITE,backgroundRounded:!0,backgroundRadius:h*t.DefaultRadiusRatio}},38:function(o,e,r){"use strict";r.r(e),r.d(e,"Scale",(function(){return i}));var a=r(6),t=(r(0),r(2)),i=function(o){var e=Math.round((o.viewBox-o.viewBox*(1-a.DefaultPaddingRatio))/2);return Object(t.jsxs)(t.Fragment,{children:[function(){var r;if(o.withBackground)return Object(t.jsx)("rect",{transform:o.withPadding?"translate(".concat(-2*e,", ").concat(-2*e,")"):"",fill:null===(r=o.backgroundColor)||void 0===r?void 0:r.toString(),width:o.viewBox*(1+(o.withPadding?Math.abs(a.DefaultPaddingRatio):0)),height:o.viewBox*(1+(o.withPadding?Math.abs(a.DefaultPaddingRatio):0)),rx:o.backgroundRounded?o.backgroundRadius:0,ry:o.backgroundRounded?o.backgroundRadius:0})}(),o.withPadding?Object(t.jsx)("g",{transform:"translate(".concat(-e,", ").concat(-e,")"),children:o.children}):Object(t.jsx)(t.Fragment,{children:o.children})]})}},39:function(o,e,r){"use strict";r.r(e),r.d(e,"Svg",(function(){return i}));var a=r(6),t=(r(0),r(2)),i=function(o){return Object(t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.width,height:o.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:o.withPadding?"".concat(0-o.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(0-o.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(a.DefaultPaddingRatio)):"".concat(0," ",0," ",o.viewBox," ").concat(o.viewBox),children:o.children})}},40:function(o,e,r){"use strict";r.r(e),r.d(e,"ThemeSwitcherMonoColor",(function(){return t})),r.d(e,"ThemeSwitcherMonoInverseColor",(function(){return i})),r.d(e,"ThemeSwitcherDuoColor",(function(){return n}));var a=r(6),t=function(o,e,r){switch(o){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:e(a.Color.DARK_GRAY),r(a.Color.WHITE);break;case a.Theme.DARK:e(a.Color.WHITE),r(a.Color.GRAY);break;case a.Theme.WHITE:e(a.Color.WHITE),r(a.Color.BLACK);break;case a.Theme.BLACK:e(a.Color.BLACK),r(a.Color.WHITE);break;case a.Theme.GRAYSCALE:e(a.Color.WHITE),r(a.Color.GRAY);break;case a.Theme.MONOCHROME:e(a.Color.WHITE),r(a.Color.BLACK)}},i=function(o,e,r){switch(o){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:e(a.Color.ORANGE),r(a.Color.WHITE);break;case a.Theme.DARK:e(a.Color.ORANGE),r(a.Color.GRAY);break;case a.Theme.WHITE:e(a.Color.WHITE),r(a.Color.BLACK);break;case a.Theme.BLACK:e(a.Color.BLACK),r(a.Color.WHITE);break;case a.Theme.GRAYSCALE:e(a.Color.GRAY),r(a.Color.GRAY);break;case a.Theme.MONOCHROME:e(a.Color.WHITE),r(a.Color.BLACK)}},n=function(o,e,r,t){switch(o){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:e(a.Color.DARK_GRAY),r(a.Color.ORANGE),t(a.Color.WHITE);break;case a.Theme.DARK:e(a.Color.WHITE),r(a.Color.ORANGE),t(a.Color.GRAY);break;case a.Theme.WHITE:e(a.Color.WHITE),r(a.Color.WHITE),t(a.Color.BLACK);break;case a.Theme.BLACK:e(a.Color.BLACK),r(a.Color.BLACK),t(a.Color.WHITE);break;case a.Theme.GRAYSCALE:e(a.Color.WHITE),r(a.Color.DARK_GRAY),t(a.Color.GRAY);break;case a.Theme.MONOCHROME:e(a.Color.WHITE),r(a.Color.WHITE),t(a.Color.BLACK)}}}}]);
//# sourceMappingURL=69.8eed7bbd.chunk.js.map