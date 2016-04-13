!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueRating=t():e.VueRating=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),s=i(r);t["default"]=s["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{rateValue:{type:Number,"default":0}},data:function(){return{starArr:[1,2,3,4,5],singleSize:12}},computed:{starSize:function(){return{width:this.singleSize+"px",height:this.singleSize+"px"}},containerSize:function(){return{width:5*this.singleSize+"px",height:this.singleSize+"px"}}},ready:function(){var e=document.querySelector('meta[name="viewport"]');if(e){var t=e.content.match(/initial-scale=(\d?\.?\d?)/)[1];this.singleSize*=1/parseFloat(t)}}}},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"div[_v-47ce46ea]{display:inline-block;vertical-align:middle}p[_v-47ce46ea]{position:relative;margin:0;width:60px;height:12px;white-space:nowrap}span[_v-47ce46ea]{position:absolute;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}span svg[_v-47ce46ea]{width:12px;height:12px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;fill:#d1d1d1}span[_v-47ce46ea]:last-child{overflow:hidden}span:last-child svg[_v-47ce46ea]{fill:#ff9a0d}","",{version:3,sources:["/./src/rating.vue.style"],names:[],mappings:"AA0DA,iBACA,qBAAA,AACA,qBAAA,CACA,AACA,eACA,kBAAA,AACA,SAAA,AACA,WAAA,AACA,YAAA,AACA,kBAAA,CACA,AACA,kBACA,kBAAA,AACA,MAAA,AACA,oBAAA,qBAAA,oBAAA,YAAA,CACA,AACA,sBACA,WAAA,AACA,YAAA,AACA,sBAAA,oBAAA,cAAA,AACA,YAAA,CACA,AACA,6BACA,eAAA,CACA,AACA,iCACA,YAAA,CACA",file:"rating.vue",sourcesContent:['<script>\n  export default {\n    props: {\n      rateValue: {\n        type: Number,\n        default: 0,\n      },\n    },\n    data() {\n      return {\n        starArr: [1, 2, 3, 4, 5],\n        singleSize: 12,\n      };\n    },\n    computed: {\n      starSize() {\n        return {\n          width: this.singleSize + \'px\',\n          height: this.singleSize + \'px\',\n        };\n      },\n      containerSize() {\n        return {\n          width: this.singleSize * 5 + \'px\',\n          height: this.singleSize + \'px\',\n        };\n      },\n    },\n    ready() {\n      var viewport = document.querySelector(\'meta[name="viewport"]\');\n      if (viewport) {\n        const viewportScale = viewport.content.match(/initial-scale=(\\d?\\.?\\d?)/)[1];\n        this.singleSize *= 1 / parseFloat(viewportScale);\n      }\n    },\n  };\n</script>\n\n<template>\n  <div :style="{zoom: zoomValue}">\n    <svg style="display: none;">\n      <symbol id="star" viewBox="0 0 1024 1024">\n        <path class="path1" d="M636 386.016h380l-304 226.016 100 368-306.016-220-304 220 110.016-366.016-304-228h384l122.016-368z"></path>\n      </symbol>\n    </svg>\n    <p :style="containerSize">\n      <span>\n        <svg :style="starSize" v-for="star in starArr"><use xlink:href="#star"></use></svg>\n      </span>\n\n      <span :style="{width: rateValue / 5 * 100 + \'%\'}">\n        <svg :style="starSize" v-for="star in starArr"><use xlink:href="#star"></use></svg>\n      </span>\n    </p>\n  </div>\n</template>\n\n<style scoped>\n  div {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  p {\n    position: relative;\n    margin: 0;\n    width: 60px;\n    height: 12px;\n    white-space: nowrap;\n  }\n  span {\n    position: absolute;\n    top: 0;\n    display: flex;\n  }\n  span svg {\n    width: 12px;\n    height: 12px;\n    flex-shrink: 0;\n    fill: #d1d1d1;\n  }\n  span:last-child {\n    overflow: hidden;\n  }\n  span:last-child svg {\n    fill: #ff9a0d;\n  }\n</style>\n'],sourceRoot:"webpack://"}])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(i[s]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=A[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(p(i.parts[s],t))}else{for(var a=[],s=0;s<i.parts.length;s++)a.push(p(i.parts[s],t));A[i.id]={id:i.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],s=r[0],a=r[1],o=r[2],l=r[3],p={css:a,media:o,sourceMap:l};n[s]?n[s].parts.push(p):t.push(n[s]={id:s,parts:[p]})}return t}function s(e,t){var n=v(),i=m[m.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function p(e,t){var n,i,r;if(t.singleton){var s=y++;n=g||(g=o(t)),i=u.bind(null,n,s,!1),r=u.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=f.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(t),i=c.bind(null,n),r=function(){a(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function c(e,t){var n=t.css,i=t.media;t.sourceMap;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,i=(t.media,t.sourceMap);i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var A={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return i(n,t),function(e){for(var s=[],a=0;a<n.length;a++){var o=n[a],l=A[o.id];l.refs--,s.push(l)}if(e){var p=r(e);i(p,t)}for(var a=0;a<s.length;a++){var l=s[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete A[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.id,i,""]]);n(4)(i,{});i.locals&&(e.exports=i.locals)},function(e,t){e.exports='<div :style="{zoom: zoomValue}" _v-47ce46ea=""> <svg style=display:none _v-47ce46ea=""> <symbol id=star viewBox="0 0 1024 1024" _v-47ce46ea=""> <path class=path1 d="M636 386.016h380l-304 226.016 100 368-306.016-220-304 220 110.016-366.016-304-228h384l122.016-368z" _v-47ce46ea=""></path> </symbol> </svg> <p :style=containerSize _v-47ce46ea=""> <span _v-47ce46ea=""> <svg :style=starSize v-for="star in starArr" _v-47ce46ea=""><use xlink:href=#star _v-47ce46ea=""></use></svg> </span> <span :style="{width: rateValue / 5 * 100 + \'%\'}" _v-47ce46ea=""> <svg :style=starSize v-for="star in starArr" _v-47ce46ea=""><use xlink:href=#star _v-47ce46ea=""></use></svg> </span> </p> </div>'},function(e,t,n){var i,r;n(5),i=n(1),r=n(6),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options:e.exports).template=r)}])});