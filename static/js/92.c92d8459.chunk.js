(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[92,103,104,105],{134:function(e,o,r){"use strict";r.r(o);var a=r(10),t=r(6),i=r(0),n=r(38),c=r(39),d=r(40),l=r(2),h=571.36,u=function(e){var o=Object(i.useState)(e.primaryColor),r=Object(a.a)(o,2),t=r[0],u=r[1],s=Object(i.useState)(e.backgroundColor),C=Object(a.a)(s,2),g=C[0],T=C[1];return Object(i.useEffect)((function(){Object(d.ThemeSwitcherMonoColor)(e.theme,u,T)}),[e.theme,e.withBackground,e.withPadding]),Object(l.jsx)(c.Svg,{viewBox:h,width:e.width,height:e.height,withPadding:e.withPadding,children:Object(l.jsx)(n.Scale,{viewBox:h,backgroundColor:g,withPadding:e.withPadding,withBackground:e.withBackground,backgroundRounded:e.backgroundRounded,backgroundRadius:e.backgroundRadius,width:e.width,height:e.height,children:Object(l.jsx)("path",{fill:null===t||void 0===t?void 0:t.toString(),d:"M428.16 428.41l-285.44 0c-78.81,-0.01 -142.73,-63.92 -142.73,-142.74 0,-78.81 63.92,-142.73 142.73,-142.73l286.36 0c78.65,0.24 142.27,64.08 142.27,142.73 0,78.81 -63.92,142.73 -142.73,142.73 -0.14,0 -0.33,0 -0.47,0l0 0.01zm0 -49.72c-51.37,0 -93.02,-41.65 -93.02,-93.02 0,-51.37 41.65,-93.02 93.02,-93.02 51.37,0 93.02,41.65 93.02,93.02 0,51.37 -41.65,93.02 -93.02,93.02z"})})})};o.default=u,u.defaultProps={name:"Switch on icon",componentName:"SwitchOnIcon",description:"Switch icon at on state for all types of printers.",tags:[t.Tag.ICONS,t.Tag.MINI,t.Tag.SL1],folder:t.Folder.ICONS,width:48,height:48,theme:t.Theme.LIGHT,primaryColor:t.Color.DARK_GRAY,withBackground:!0,backgroundColor:t.Color.WHITE,backgroundRounded:!0,backgroundRadius:h*t.DefaultRadiusRatio}},38:function(e,o,r){"use strict";r.r(o),r.d(o,"Scale",(function(){return i}));var a=r(6),t=(r(0),r(2)),i=function(e){var o=Math.round((e.viewBox-e.viewBox*(1-a.DefaultPaddingRatio))/2);return Object(t.jsxs)(t.Fragment,{children:[function(){var r;if(e.withBackground)return Object(t.jsx)("rect",{transform:e.withPadding?"translate(".concat(-2*o,", ").concat(-2*o,")"):"",fill:null===(r=e.backgroundColor)||void 0===r?void 0:r.toString(),width:e.viewBox*(1+(e.withPadding?Math.abs(a.DefaultPaddingRatio):0)),height:e.viewBox*(1+(e.withPadding?Math.abs(a.DefaultPaddingRatio):0)),rx:e.backgroundRounded?e.backgroundRadius:0,ry:e.backgroundRounded?e.backgroundRadius:0})}(),e.withPadding?Object(t.jsx)("g",{transform:"translate(".concat(-o,", ").concat(-o,")"),children:e.children}):Object(t.jsx)(t.Fragment,{children:e.children})]})}},39:function(e,o,r){"use strict";r.r(o),r.d(o,"Svg",(function(){return i}));var a=r(6),t=(r(0),r(2)),i=function(e){return Object(t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:e.withPadding?"".concat(0-e.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(0-e.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(e.viewBox+e.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(e.viewBox+e.viewBox*Math.abs(a.DefaultPaddingRatio)):"".concat(0," ",0," ",e.viewBox," ").concat(e.viewBox),children:e.children})}},40:function(e,o,r){"use strict";r.r(o),r.d(o,"ThemeSwitcherMonoColor",(function(){return t})),r.d(o,"ThemeSwitcherMonoInverseColor",(function(){return i})),r.d(o,"ThemeSwitcherDuoColor",(function(){return n}));var a=r(6),t=function(e,o,r){switch(e){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:o(a.Color.DARK_GRAY),r(a.Color.WHITE);break;case a.Theme.DARK:o(a.Color.WHITE),r(a.Color.GRAY);break;case a.Theme.WHITE:o(a.Color.WHITE),r(a.Color.BLACK);break;case a.Theme.BLACK:o(a.Color.BLACK),r(a.Color.WHITE);break;case a.Theme.GRAYSCALE:o(a.Color.WHITE),r(a.Color.GRAY);break;case a.Theme.MONOCHROME:o(a.Color.WHITE),r(a.Color.BLACK)}},i=function(e,o,r){switch(e){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:o(a.Color.ORANGE),r(a.Color.WHITE);break;case a.Theme.DARK:o(a.Color.ORANGE),r(a.Color.GRAY);break;case a.Theme.WHITE:o(a.Color.WHITE),r(a.Color.BLACK);break;case a.Theme.BLACK:o(a.Color.BLACK),r(a.Color.WHITE);break;case a.Theme.GRAYSCALE:o(a.Color.GRAY),r(a.Color.GRAY);break;case a.Theme.MONOCHROME:o(a.Color.WHITE),r(a.Color.BLACK)}},n=function(e,o,r,t){switch(e){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:o(a.Color.DARK_GRAY),r(a.Color.ORANGE),t(a.Color.WHITE);break;case a.Theme.DARK:o(a.Color.WHITE),r(a.Color.ORANGE),t(a.Color.GRAY);break;case a.Theme.WHITE:o(a.Color.WHITE),r(a.Color.WHITE),t(a.Color.BLACK);break;case a.Theme.BLACK:o(a.Color.BLACK),r(a.Color.BLACK),t(a.Color.WHITE);break;case a.Theme.GRAYSCALE:o(a.Color.WHITE),r(a.Color.DARK_GRAY),t(a.Color.GRAY);break;case a.Theme.MONOCHROME:o(a.Color.WHITE),r(a.Color.WHITE),t(a.Color.BLACK)}}}}]);
//# sourceMappingURL=92.c92d8459.chunk.js.map