(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[89,103,104,105],{131:function(o,e,r){"use strict";r.r(e);var a=r(10),t=r(6),i=r(0),n=r(38),c=r(39),l=r(40),d=r(2),h=800.1,u=function(o){var e=Object(i.useState)(o.primaryColor),r=Object(a.a)(e,2),t=r[0],u=r[1],s=Object(i.useState)(o.secondaryColor),C=Object(a.a)(s,2),g=C[0],b=C[1],T=Object(i.useState)(o.backgroundColor),R=Object(a.a)(T,2),w=R[0],m=R[1];return Object(i.useEffect)((function(){Object(l.ThemeSwitcherDuoColor)(o.theme,u,b,m)}),[o.theme,o.withBackground,o.withPadding]),Object(d.jsx)(c.Svg,{viewBox:h,width:o.width,height:o.height,withPadding:o.withPadding,children:Object(d.jsxs)(n.Scale,{viewBox:h,backgroundColor:w,withPadding:o.withPadding,withBackground:o.withBackground,backgroundRounded:o.backgroundRounded,backgroundRadius:o.backgroundRadius,width:o.width,height:o.height,children:[Object(d.jsx)("path",{fill:null===t||void 0===t?void 0:t.toString(),d:"M400.06 48.03c-194.43,0 -352.05,157.61 -352.05,352.04 0,65.23 17.74,126.3 48.67,178.67l0 -178.67 0 -0.73c0.4,-167.21 136.08,-302.64 303.35,-302.64 269.41,0 405.15,327.26 214.51,517.89 -144.67,144.71 -368.03,101.35 -467.31,-45.75l0 76.2c63.98,66.02 153.6,107.06 252.79,107.06 194.43,0 352.05,-157.61 352.05,-352.05 0,-194.43 -157.61,-352.05 -352.05,-352.05l0.03 0.03zm93.18 258.87c-82.76,-82.79 -224.91,-23.88 -224.91,93.18 0,117.03 142.15,175.96 224.91,93.18 51.43,-51.46 51.47,-134.88 0,-186.32l0 -0.04zm-93.18 -1.64c-52.34,0 -94.78,42.44 -94.78,94.78 0,52.34 42.44,94.78 94.78,94.78 52.34,0 94.79,-42.44 94.79,-94.78 0,-52.34 -42.45,-94.78 -94.79,-94.78z"}),Object(d.jsx)("path",{fill:null===g||void 0===g?void 0:g.toString(),d:"M400.06 96.7c269.42,0 405.16,327.26 214.52,517.89 -144.67,144.71 -368.03,101.35 -467.31,-45.75l0 156.22c0,13.97 -11.33,25.28 -25.28,25.28 -13.97,0 -25.28,-11.33 -25.28,-25.28l0 -324.97 0 -0.73c0.4,-167.21 136.08,-302.65 303.35,-302.65l0 -0zm93.18 210.2c-82.76,-82.79 -224.91,-23.88 -224.91,93.18 0,117.03 142.15,175.96 224.91,93.18 51.43,-51.46 51.47,-134.88 0,-186.32l0 -0.04z"})]})})};e.default=u,u.defaultProps={name:"Spool icon",componentName:"SpoolIcon",description:"Filament spool icon.",tags:[t.Tag.ICONS,t.Tag.MINI],folder:t.Folder.ICONS,width:48,height:48,theme:t.Theme.LIGHT,primaryColor:t.Color.DARK_GRAY,secondaryColor:t.Color.ORANGE,withBackground:!0,backgroundColor:t.Color.WHITE,backgroundRounded:!0,backgroundRadius:h*t.DefaultRadiusRatio}},38:function(o,e,r){"use strict";r.r(e),r.d(e,"Scale",(function(){return i}));var a=r(6),t=(r(0),r(2)),i=function(o){var e=Math.round((o.viewBox-o.viewBox*(1-a.DefaultPaddingRatio))/2);return Object(t.jsxs)(t.Fragment,{children:[function(){var r;if(o.withBackground)return Object(t.jsx)("rect",{transform:o.withPadding?"translate(".concat(-2*e,", ").concat(-2*e,")"):"",fill:null===(r=o.backgroundColor)||void 0===r?void 0:r.toString(),width:o.viewBox*(1+(o.withPadding?Math.abs(a.DefaultPaddingRatio):0)),height:o.viewBox*(1+(o.withPadding?Math.abs(a.DefaultPaddingRatio):0)),rx:o.backgroundRounded?o.backgroundRadius:0,ry:o.backgroundRounded?o.backgroundRadius:0})}(),o.withPadding?Object(t.jsx)("g",{transform:"translate(".concat(-e,", ").concat(-e,")"),children:o.children}):Object(t.jsx)(t.Fragment,{children:o.children})]})}},39:function(o,e,r){"use strict";r.r(e),r.d(e,"Svg",(function(){return i}));var a=r(6),t=(r(0),r(2)),i=function(o){return Object(t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.width,height:o.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:o.withPadding?"".concat(0-o.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(0-o.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(a.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(a.DefaultPaddingRatio)):"".concat(0," ",0," ",o.viewBox," ").concat(o.viewBox),children:o.children})}},40:function(o,e,r){"use strict";r.r(e),r.d(e,"ThemeSwitcherMonoColor",(function(){return t})),r.d(e,"ThemeSwitcherMonoInverseColor",(function(){return i})),r.d(e,"ThemeSwitcherDuoColor",(function(){return n}));var a=r(6),t=function(o,e,r){switch(o){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:e(a.Color.DARK_GRAY),r(a.Color.WHITE);break;case a.Theme.DARK:e(a.Color.WHITE),r(a.Color.GRAY);break;case a.Theme.WHITE:e(a.Color.WHITE),r(a.Color.BLACK);break;case a.Theme.BLACK:e(a.Color.BLACK),r(a.Color.WHITE);break;case a.Theme.GRAYSCALE:e(a.Color.WHITE),r(a.Color.GRAY);break;case a.Theme.MONOCHROME:e(a.Color.WHITE),r(a.Color.BLACK)}},i=function(o,e,r){switch(o){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:e(a.Color.ORANGE),r(a.Color.WHITE);break;case a.Theme.DARK:e(a.Color.ORANGE),r(a.Color.GRAY);break;case a.Theme.WHITE:e(a.Color.WHITE),r(a.Color.BLACK);break;case a.Theme.BLACK:e(a.Color.BLACK),r(a.Color.WHITE);break;case a.Theme.GRAYSCALE:e(a.Color.GRAY),r(a.Color.GRAY);break;case a.Theme.MONOCHROME:e(a.Color.WHITE),r(a.Color.BLACK)}},n=function(o,e,r,t){switch(o){case a.Theme.CUSTOM:break;case a.Theme.LIGHT:e(a.Color.DARK_GRAY),r(a.Color.ORANGE),t(a.Color.WHITE);break;case a.Theme.DARK:e(a.Color.WHITE),r(a.Color.ORANGE),t(a.Color.GRAY);break;case a.Theme.WHITE:e(a.Color.WHITE),r(a.Color.WHITE),t(a.Color.BLACK);break;case a.Theme.BLACK:e(a.Color.BLACK),r(a.Color.BLACK),t(a.Color.WHITE);break;case a.Theme.GRAYSCALE:e(a.Color.WHITE),r(a.Color.DARK_GRAY),t(a.Color.GRAY);break;case a.Theme.MONOCHROME:e(a.Color.WHITE),r(a.Color.WHITE),t(a.Color.BLACK)}}}}]);
//# sourceMappingURL=89.e99f6fc0.chunk.js.map