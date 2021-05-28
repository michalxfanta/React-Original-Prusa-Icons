(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[22,103,104,105],{38:function(o,e,r){"use strict";r.r(e),r.d(e,"Scale",(function(){return i}));var t=r(6),a=(r(0),r(2)),i=function(o){var e=Math.round((o.viewBox-o.viewBox*(1-t.DefaultPaddingRatio))/2);return Object(a.jsxs)(a.Fragment,{children:[function(){var r;if(o.withBackground)return Object(a.jsx)("rect",{transform:o.withPadding?"translate(".concat(-2*e,", ").concat(-2*e,")"):"",fill:null===(r=o.backgroundColor)||void 0===r?void 0:r.toString(),width:o.viewBox*(1+(o.withPadding?Math.abs(t.DefaultPaddingRatio):0)),height:o.viewBox*(1+(o.withPadding?Math.abs(t.DefaultPaddingRatio):0)),rx:o.backgroundRounded?o.backgroundRadius:0,ry:o.backgroundRounded?o.backgroundRadius:0})}(),o.withPadding?Object(a.jsx)("g",{transform:"translate(".concat(-e,", ").concat(-e,")"),children:o.children}):Object(a.jsx)(a.Fragment,{children:o.children})]})}},39:function(o,e,r){"use strict";r.r(e),r.d(e,"Svg",(function(){return i}));var t=r(6),a=(r(0),r(2)),i=function(o){return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o.width,height:o.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:o.withPadding?"".concat(0-o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(0-o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(t.DefaultPaddingRatio)," ").concat(o.viewBox+o.viewBox*Math.abs(t.DefaultPaddingRatio)):"".concat(0," ",0," ",o.viewBox," ").concat(o.viewBox),children:o.children})}},40:function(o,e,r){"use strict";r.r(e),r.d(e,"ThemeSwitcherMonoColor",(function(){return a})),r.d(e,"ThemeSwitcherMonoInverseColor",(function(){return i})),r.d(e,"ThemeSwitcherDuoColor",(function(){return n}));var t=r(6),a=function(o,e,r){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.DARK_GRAY),r(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.WHITE),r(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.WHITE),r(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.BLACK)}},i=function(o,e,r){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.ORANGE),r(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.ORANGE),r(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.GRAY),r(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.BLACK)}},n=function(o,e,r,a){switch(o){case t.Theme.CUSTOM:break;case t.Theme.LIGHT:e(t.Color.DARK_GRAY),r(t.Color.ORANGE),a(t.Color.WHITE);break;case t.Theme.DARK:e(t.Color.WHITE),r(t.Color.ORANGE),a(t.Color.GRAY);break;case t.Theme.WHITE:e(t.Color.WHITE),r(t.Color.WHITE),a(t.Color.BLACK);break;case t.Theme.BLACK:e(t.Color.BLACK),r(t.Color.BLACK),a(t.Color.WHITE);break;case t.Theme.GRAYSCALE:e(t.Color.WHITE),r(t.Color.DARK_GRAY),a(t.Color.GRAY);break;case t.Theme.MONOCHROME:e(t.Color.WHITE),r(t.Color.WHITE),a(t.Color.BLACK)}}},64:function(o,e,r){"use strict";r.r(e);var t=r(10),a=r(6),i=r(0),n=r(38),c=r(39),d=r(40),l=r(2),h=235.29,u=function(o){var e=Object(i.useState)(o.primaryColor),r=Object(t.a)(e,2),a=r[0],u=r[1],s=Object(i.useState)(o.secondaryColor),C=Object(t.a)(s,2),g=C[0],b=C[1],T=Object(i.useState)(o.backgroundColor),R=Object(t.a)(T,2),w=R[0],m=R[1];return Object(i.useEffect)((function(){Object(d.ThemeSwitcherDuoColor)(o.theme,u,b,m)}),[o.theme,o.withBackground,o.withPadding]),Object(l.jsx)(c.Svg,{viewBox:h,width:o.width,height:o.height,withPadding:o.withPadding,children:Object(l.jsxs)(n.Scale,{viewBox:h,backgroundColor:w,withPadding:o.withPadding,withBackground:o.withBackground,backgroundRounded:o.backgroundRounded,backgroundRadius:o.backgroundRadius,width:o.width,height:o.height,children:[Object(l.jsx)("path",{fill:null===g||void 0===g?void 0:g.toString(),d:"M191.18 110.29L191.18 80.88 235.29 117.65 191.18 154.41 191.18 125 117.65 125 117.65 110.29z"}),Object(l.jsx)("path",{fill:null===a||void 0===a?void 0:a.toString(),d:"M176.47 44.12L176.47 95.59 161.76 95.59 161.76 58.82 73.53 58.82 73.53 176.47 161.76 176.47 161.76 139.71 176.47 139.71 176.47 191.18 58.82 191.17 58.82 44.12z"})]})})};e.default=u,u.defaultProps={name:"Export Icon",componentName:"ExportIcon",description:"Universal export icon",tags:[a.Tag.ICONS,a.Tag.SL1],folder:a.Folder.ICONS,width:48,height:48,theme:a.Theme.LIGHT,primaryColor:a.Color.DARK_GRAY,secondaryColor:a.Color.ORANGE,withBackground:!0,backgroundColor:a.Color.WHITE,backgroundRounded:!0,backgroundRadius:h*a.DefaultRadiusRatio}}}]);
//# sourceMappingURL=22.fe66a39e.chunk.js.map