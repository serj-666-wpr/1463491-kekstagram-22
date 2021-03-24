/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var e={942:(e,t,r)=>{var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,f=Math.min,m=function(){return u.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||s.test(e)?a(e.slice(2),r?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,r){var n,o,i,s,a,l,c=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=n,i=o;return n=o=void 0,c=t,s=e.apply(i,r)}function b(e){return c=e,a=setTimeout(x,t),u?y(e):s}function S(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=i}function x(){var e=m();if(S(e))return w(e);a=setTimeout(x,function(e){var r=t-(e-l);return d?f(r,i-(e-c)):r}(e))}function w(e){return a=void 0,g&&n?y(e):(n=o=void 0,s)}function E(){var e=m(),r=S(e);if(n=arguments,o=this,l=e,r){if(void 0===a)return b(l);if(d)return a=setTimeout(x,t),y(l)}return void 0===a&&(a=setTimeout(x,t)),s}return t=v(t)||0,h(r)&&(u=!!r.leading,i=(d="maxWait"in r)?p(v(r.maxWait)||0,t):i,g="trailing"in r?!!r.trailing:g),E.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=o=a=void 0},E.flush=function(){return void 0===a?s:w(m())},E}},146:(e,t)=>{var r,n;void 0===(n="function"==typeof(r=function(){"use strict";var e="14.6.4";function t(e){e.parentElement.removeChild(e)}function r(e){return null!=e}function n(e){e.preventDefault()}function o(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function i(e,t,r){r>0&&(c(e,t),setTimeout((function(){u(e,t)}),r))}function s(e){return Math.max(Math.min(e,100),0)}function a(e){return Array.isArray(e)?e:[e]}function l(e){var t=(e=String(e)).split(".");return t.length>1?t[1].length:0}function c(e,t){e.classList&&!/\s/.test(t)?e.classList.add(t):e.className+=" "+t}function u(e,t){e.classList&&!/\s/.test(t)?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function d(e){var t=void 0!==window.pageXOffset,r="CSS1Compat"===(e.compatMode||"");return{x:t?window.pageXOffset:r?e.documentElement.scrollLeft:e.body.scrollLeft,y:t?window.pageYOffset:r?e.documentElement.scrollTop:e.body.scrollTop}}function p(e,t){return 100/(t-e)}function f(e,t,r){return 100*t/(e[r+1]-e[r])}function m(e,t){for(var r=1;e>=t[r];)r+=1;return r}function h(e,t,r){if(r>=e.slice(-1)[0])return 100;var n=m(r,e),o=e[n-1],i=e[n],s=t[n-1],a=t[n];return s+function(e,t){return f(e,e[0]<0?t+Math.abs(e[0]):t-e[0],0)}([o,i],r)/p(s,a)}function v(e,t,r,n){if(100===n)return n;var o=m(n,e),i=e[o-1],s=e[o];return r?n-i>(s-i)/2?s:i:t[o-1]?e[o-1]+function(e,t){return Math.round(e/t)*t}(n-e[o-1],t[o-1]):n}function g(e,t,r){var n;if("number"==typeof t&&(t=[t]),!Array.isArray(t))throw new Error("noUiSlider (14.6.4): 'range' contains invalid value.");if(!o(n="min"===e?0:"max"===e?100:parseFloat(e))||!o(t[0]))throw new Error("noUiSlider (14.6.4): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(t[0]),n?r.xSteps.push(!isNaN(t[1])&&t[1]):isNaN(t[1])||(r.xSteps[0]=t[1]),r.xHighestCompleteStep.push(0)}function y(e,t,r){if(t)if(r.xVal[e]!==r.xVal[e+1]){r.xSteps[e]=f([r.xVal[e],r.xVal[e+1]],t,0)/p(r.xPct[e],r.xPct[e+1]);var n=(r.xVal[e+1]-r.xVal[e])/r.xNumSteps[e],o=Math.ceil(Number(n.toFixed(3))-1),i=r.xVal[e]+r.xNumSteps[e]*o;r.xHighestCompleteStep[e]=i}else r.xSteps[e]=r.xHighestCompleteStep[e]=r.xVal[e]}function b(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=t;var o=[];for(n in e)e.hasOwnProperty(n)&&o.push([e[n],n]);for(o.length&&"object"==typeof o[0][0]?o.sort((function(e,t){return e[0][0]-t[0][0]})):o.sort((function(e,t){return e[0]-t[0]})),n=0;n<o.length;n++)g(o[n][1],o[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)y(n,this.xNumSteps[n],this)}b.prototype.getDistance=function(e){var t,r=[];for(t=0;t<this.xNumSteps.length-1;t++){var n=this.xNumSteps[t];if(n&&e/n%1!=0)throw new Error("noUiSlider (14.6.4): 'limit', 'margin' and 'padding' of "+this.xPct[t]+"% range must be divisible by step.");r[t]=f(this.xVal,e,t)}return r},b.prototype.getAbsoluteDistance=function(e,t,r){var n,o=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[o+1];)o++;else e===this.xPct[this.xPct.length-1]&&(o=this.xPct.length-2);r||e!==this.xPct[o+1]||o++;var i=1,s=t[o],a=0,l=0,c=0,u=0;for(n=r?(e-this.xPct[o])/(this.xPct[o+1]-this.xPct[o]):(this.xPct[o+1]-e)/(this.xPct[o+1]-this.xPct[o]);s>0;)a=this.xPct[o+1+u]-this.xPct[o+u],t[o+u]*i+100-100*n>100?(l=a*n,i=(s-100*n)/t[o+u],n=1):(l=t[o+u]*a/100*i,i=0),r?(c-=l,this.xPct.length+u>=1&&u--):(c+=l,this.xPct.length-u>=1&&u++),s=t[o+u]*i;return e+c},b.prototype.toStepping=function(e){return h(this.xVal,this.xPct,e)},b.prototype.fromStepping=function(e){return function(e,t,r){if(r>=100)return e.slice(-1)[0];var n=m(r,t),o=e[n-1],i=e[n],s=t[n-1];return function(e,t){return t*(e[1]-e[0])/100+e[0]}([o,i],(r-s)*p(s,t[n]))}(this.xVal,this.xPct,e)},b.prototype.getStep=function(e){return v(this.xPct,this.xSteps,this.snap,e)},b.prototype.getDefaultStep=function(e,t,r){var n=m(e,this.xPct);return(100===e||t&&e===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},b.prototype.getNearbySteps=function(e){var t=m(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},b.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(l);return Math.max.apply(null,e)},b.prototype.convert=function(e){return this.getStep(this.toStepping(e))};var S={to:function(e){return void 0!==e&&e.toFixed(2)},from:Number},x={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},w=".__tooltips",E=".__aria";function C(e){if(function(e){return"object"==typeof e&&"function"==typeof e.to&&"function"==typeof e.from}(e))return!0;throw new Error("noUiSlider (14.6.4): 'format' requires 'to' and 'from' methods.")}function k(e,t){if(!o(t))throw new Error("noUiSlider (14.6.4): 'step' is not numeric.");e.singleStep=t}function L(e,t){if(!o(t))throw new Error("noUiSlider (14.6.4): 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=t}function _(e,t){if(!o(t))throw new Error("noUiSlider (14.6.4): 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=t}function N(e,t){if("object"!=typeof t||Array.isArray(t))throw new Error("noUiSlider (14.6.4): 'range' is not an object.");if(void 0===t.min||void 0===t.max)throw new Error("noUiSlider (14.6.4): Missing 'min' or 'max' in 'range'.");if(t.min===t.max)throw new Error("noUiSlider (14.6.4): 'range' 'min' and 'max' cannot be equal.");e.spectrum=new b(t,e.snap,e.singleStep)}function P(e,t){if(t=a(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider (14.6.4): 'start' option is incorrect.");e.handles=t.length,e.start=t}function U(e,t){if(e.snap=t,"boolean"!=typeof t)throw new Error("noUiSlider (14.6.4): 'snap' option must be a boolean.")}function V(e,t){if(e.animate=t,"boolean"!=typeof t)throw new Error("noUiSlider (14.6.4): 'animate' option must be a boolean.")}function q(e,t){if(e.animationDuration=t,"number"!=typeof t)throw new Error("noUiSlider (14.6.4): 'animationDuration' option must be a number.")}function A(e,t){var r,n=[!1];if("lower"===t?t=[!0,!1]:"upper"===t&&(t=[!1,!0]),!0===t||!1===t){for(r=1;r<e.handles;r++)n.push(t);n.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==e.handles+1)throw new Error("noUiSlider (14.6.4): 'connect' option doesn't match handle count.");n=t}e.connect=n}function D(e,t){switch(t){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider (14.6.4): 'orientation' option is invalid.")}}function O(e,t){if(!o(t))throw new Error("noUiSlider (14.6.4): 'margin' option must be numeric.");0!==t&&(e.margin=e.spectrum.getDistance(t))}function M(e,t){if(!o(t))throw new Error("noUiSlider (14.6.4): 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(t),!e.limit||e.handles<2)throw new Error("noUiSlider (14.6.4): 'limit' option is only supported on linear sliders with 2 or more handles.")}function j(e,t){var r;if(!o(t)&&!Array.isArray(t))throw new Error("noUiSlider (14.6.4): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&2!==t.length&&!o(t[0])&&!o(t[1]))throw new Error("noUiSlider (14.6.4): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==t){for(Array.isArray(t)||(t=[t,t]),e.padding=[e.spectrum.getDistance(t[0]),e.spectrum.getDistance(t[1])],r=0;r<e.spectrum.xNumSteps.length-1;r++)if(e.padding[0][r]<0||e.padding[1][r]<0)throw new Error("noUiSlider (14.6.4): 'padding' option must be a positive number(s).");var n=t[0]+t[1],i=e.spectrum.xVal[0];if(n/(e.spectrum.xVal[e.spectrum.xVal.length-1]-i)>1)throw new Error("noUiSlider (14.6.4): 'padding' option must not exceed 100% of the range.")}}function F(e,t){switch(t){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider (14.6.4): 'direction' option was not recognized.")}}function R(e,t){if("string"!=typeof t)throw new Error("noUiSlider (14.6.4): 'behaviour' must be a string containing options.");var r=t.indexOf("tap")>=0,n=t.indexOf("drag")>=0,o=t.indexOf("fixed")>=0,i=t.indexOf("snap")>=0,s=t.indexOf("hover")>=0,a=t.indexOf("unconstrained")>=0;if(o){if(2!==e.handles)throw new Error("noUiSlider (14.6.4): 'fixed' behaviour must be used with 2 handles");O(e,e.start[1]-e.start[0])}if(a&&(e.margin||e.limit))throw new Error("noUiSlider (14.6.4): 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:r||i,drag:n,fixed:o,snap:i,hover:s,unconstrained:a}}function T(e,t){if(!1!==t)if(!0===t){e.tooltips=[];for(var r=0;r<e.handles;r++)e.tooltips.push(!0)}else{if(e.tooltips=a(t),e.tooltips.length!==e.handles)throw new Error("noUiSlider (14.6.4): must pass a formatter for all handles.");e.tooltips.forEach((function(e){if("boolean"!=typeof e&&("object"!=typeof e||"function"!=typeof e.to))throw new Error("noUiSlider (14.6.4): 'tooltips' must be passed a formatter or 'false'.")}))}}function z(e,t){e.ariaFormat=t,C(t)}function H(e,t){e.format=t,C(t)}function $(e,t){if(e.keyboardSupport=t,"boolean"!=typeof t)throw new Error("noUiSlider (14.6.4): 'keyboardSupport' option must be a boolean.")}function B(e,t){e.documentElement=t}function I(e,t){if("string"!=typeof t&&!1!==t)throw new Error("noUiSlider (14.6.4): 'cssPrefix' must be a string or `false`.");e.cssPrefix=t}function X(e,t){if("object"!=typeof t)throw new Error("noUiSlider (14.6.4): 'cssClasses' must be an object.");if("string"==typeof e.cssPrefix)for(var r in e.cssClasses={},t)t.hasOwnProperty(r)&&(e.cssClasses[r]=e.cssPrefix+t[r]);else e.cssClasses=t}function W(e){var t={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:S,format:S},n={step:{r:!1,t:k},keyboardPageMultiplier:{r:!1,t:L},keyboardDefaultStep:{r:!1,t:_},start:{r:!0,t:P},connect:{r:!0,t:A},direction:{r:!0,t:F},snap:{r:!1,t:U},animate:{r:!1,t:V},animationDuration:{r:!1,t:q},range:{r:!0,t:N},orientation:{r:!1,t:D},margin:{r:!1,t:O},limit:{r:!1,t:M},padding:{r:!1,t:j},behaviour:{r:!0,t:R},ariaFormat:{r:!1,t:z},format:{r:!1,t:H},tooltips:{r:!1,t:T},keyboardSupport:{r:!0,t:$},documentElement:{r:!1,t:B},cssPrefix:{r:!0,t:I},cssClasses:{r:!0,t:X}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:x,keyboardPageMultiplier:5,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach((function(i){if(!r(e[i])&&void 0===o[i]){if(n[i].r)throw new Error("noUiSlider (14.6.4): '"+i+"' is required.");return!0}n[i].t(t,r(e[i])?e[i]:o[i])})),t.pips=e.pips;var i=document.createElement("div"),s=void 0!==i.style.msTransform,a=void 0!==i.style.transform;t.transformRule=a?"transform":s?"msTransform":"webkitTransform";return t.style=[["left","top"],["right","bottom"]][t.dir][t.ort],t}function Y(e,o,l){var p,f,m,h,v,g,y,b,S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},x=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}(),C=e,k=o.spectrum,L=[],_=[],N=[],P=0,U={},V=e.ownerDocument,q=o.documentElement||V.documentElement,A=V.body,D="rtl"===V.dir||1===o.ort?0:100;function O(e,t){var r=V.createElement("div");return t&&c(r,t),e.appendChild(r),r}function M(e,t){var r=O(e,o.cssClasses.origin),n=O(r,o.cssClasses.handle);return O(n,o.cssClasses.touchArea),n.setAttribute("data-handle",t),o.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",(function(e){return function(e,t){if(R()||T(t))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],s=["Home","End"];o.dir&&!o.ort?r.reverse():o.ort&&!o.dir&&(n.reverse(),i.reverse());var a,l=e.key.replace("Arrow",""),c=l===i[0],u=l===i[1],d=l===n[0]||l===r[0]||c,p=l===n[1]||l===r[1]||u,f=l===s[0],m=l===s[1];if(!(d||p||f||m))return!0;if(e.preventDefault(),p||d){var h=o.keyboardPageMultiplier,v=d?0:1,g=he(t)[v];if(null===g)return!1;!1===g&&(g=k.getDefaultStep(_[t],d,o.keyboardDefaultStep)),(u||c)&&(g*=h),g=Math.max(g,1e-7),g*=d?-1:1,a=L[t]+g}else a=m?o.spectrum.xVal[o.spectrum.xVal.length-1]:o.spectrum.xVal[0];return ue(t,k.toStepping(a),!0,!0),oe("slide",t),oe("update",t),oe("change",t),oe("set",t),!1}(e,t)}))),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",o.ort?"vertical":"horizontal"),0===t?c(n,o.cssClasses.handleLower):t===o.handles-1&&c(n,o.cssClasses.handleUpper),r}function j(e,t){return!!t&&O(e,o.cssClasses.connect)}function F(e,t){return!!o.tooltips[t]&&O(e.firstChild,o.cssClasses.tooltip)}function R(){return C.hasAttribute("disabled")}function T(e){return f[e].hasAttribute("disabled")}function z(){v&&(ne("update"+w),v.forEach((function(e){e&&t(e)})),v=null)}function H(){z(),v=f.map(F),re("update"+w,(function(e,t,r){if(v[t]){var n=e[t];!0!==o.tooltips[t]&&(n=o.tooltips[t].to(r[t])),v[t].innerHTML=n}}))}function $(e,t,r){var n=V.createElement("div"),i=[];i[0]=o.cssClasses.valueNormal,i[1]=o.cssClasses.valueLarge,i[2]=o.cssClasses.valueSub;var s=[];s[0]=o.cssClasses.markerNormal,s[1]=o.cssClasses.markerLarge,s[2]=o.cssClasses.markerSub;var a=[o.cssClasses.valueHorizontal,o.cssClasses.valueVertical],l=[o.cssClasses.markerHorizontal,o.cssClasses.markerVertical];function u(e,t){var r=t===o.cssClasses.value,n=r?i:s;return t+" "+(r?a:l)[o.ort]+" "+n[e]}return c(n,o.cssClasses.pips),c(n,0===o.ort?o.cssClasses.pipsHorizontal:o.cssClasses.pipsVertical),Object.keys(e).forEach((function(i){!function(e,i,s){if(-1!==(s=t?t(i,s):s)){var a=O(n,!1);a.className=u(s,o.cssClasses.marker),a.style[o.style]=e+"%",s>0&&((a=O(n,!1)).className=u(s,o.cssClasses.value),a.setAttribute("data-value",i),a.style[o.style]=e+"%",a.innerHTML=r.to(i))}}(i,e[i][0],e[i][1])})),n}function B(){h&&(t(h),h=null)}function I(e){B();var t=e.mode,r=e.density||1,n=e.filter||!1,o=function(e,t,r){var n,o={},i=k.xVal[0],s=k.xVal[k.xVal.length-1],a=!1,l=!1,c=0;return(n=r.slice().sort((function(e,t){return e-t})),r=n.filter((function(e){return!this[e]&&(this[e]=!0)}),{}))[0]!==i&&(r.unshift(i),a=!0),r[r.length-1]!==s&&(r.push(s),l=!0),r.forEach((function(n,i){var s,u,d,p,f,m,h,v,g,y,b=n,S=r[i+1],x="steps"===t;if(x&&(s=k.xNumSteps[i]),s||(s=S-b),!1!==b)for(void 0===S&&(S=b),s=Math.max(s,1e-7),u=b;u<=S;u=(u+s).toFixed(7)/1){for(v=(f=(p=k.toStepping(u))-c)/e,y=f/(g=Math.round(v)),d=1;d<=g;d+=1)o[(m=c+d*y).toFixed(5)]=[k.fromStepping(m),0];h=r.indexOf(u)>-1?1:x?2:0,!i&&a&&u!==S&&(h=0),u===S&&l||(o[p.toFixed(5)]=[u,h]),c=p}})),o}(r,t,function(e,t,r){if("range"===e||"steps"===e)return k.xVal;if("count"===e){if(t<2)throw new Error("noUiSlider (14.6.4): 'values' (>= 2) required for mode 'count'.");var n=t-1,o=100/n;for(t=[];n--;)t[n]=n*o;t.push(100),e="positions"}return"positions"===e?t.map((function(e){return k.fromStepping(r?k.getStep(e):e)})):"values"===e?r?t.map((function(e){return k.fromStepping(k.getStep(k.toStepping(e)))})):t:void 0}(t,e.values||!1,e.stepped||!1)),i=e.format||{to:Math.round};return h=C.appendChild($(o,n,i))}function X(){var e=p.getBoundingClientRect(),t="offset"+["Width","Height"][o.ort];return 0===o.ort?e.width||p[t]:e.height||p[t]}function Y(e,t,r,n){var i=function(i){return!!(i=function(e,t,r){var n,o,i=0===e.type.indexOf("touch"),s=0===e.type.indexOf("mouse"),a=0===e.type.indexOf("pointer");if(0===e.type.indexOf("MSPointer")&&(a=!0),"mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(i){var l=function(e){return e.target===r||r.contains(e.target)||e.target.shadowRoot&&e.target.shadowRoot.contains(r)};if("touchstart"===e.type){var c=Array.prototype.filter.call(e.touches,l);if(c.length>1)return!1;n=c[0].pageX,o=c[0].pageY}else{var u=Array.prototype.find.call(e.changedTouches,l);if(!u)return!1;n=u.pageX,o=u.pageY}}return t=t||d(V),(s||a)&&(n=e.clientX+t.x,o=e.clientY+t.y),e.pageOffset=t,e.points=[n,o],e.cursor=s||a,e}(i,n.pageOffset,n.target||t))&&!(R()&&!n.doNotReject)&&(s=C,a=o.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!n.doNotReject))&&!(e===S.start&&void 0!==i.buttons&&i.buttons>1)&&(!n.hover||!i.buttons)&&(x||i.preventDefault(),i.calcPoint=i.points[o.ort],void r(i,n));var s,a},s=[];return e.split(" ").forEach((function(e){t.addEventListener(e,i,!!x&&{passive:!0}),s.push([e,i])})),s}function G(e){var t,r,n,i,a,l,c=100*(e-(t=p,r=o.ort,n=t.getBoundingClientRect(),i=t.ownerDocument,a=i.documentElement,l=d(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),r?n.top+l.y-a.clientTop:n.left+l.x-a.clientLeft))/X();return c=s(c),o.dir?100-c:c}function J(e,t){"mouseout"===e.type&&"HTML"===e.target.nodeName&&null===e.relatedTarget&&Q(e,t)}function K(e,t){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===e.buttons&&0!==t.buttonsProperty)return Q(e,t);var r=(o.dir?-1:1)*(e.calcPoint-t.startCalcPoint);ae(r>0,100*r/t.baseSize,t.locations,t.handleNumbers)}function Q(e,t){t.handle&&(u(t.handle,o.cssClasses.active),P-=1),t.listeners.forEach((function(e){q.removeEventListener(e[0],e[1])})),0===P&&(u(C,o.cssClasses.drag),ce(),e.cursor&&(A.style.cursor="",A.removeEventListener("selectstart",n))),t.handleNumbers.forEach((function(e){oe("change",e),oe("set",e),oe("end",e)}))}function Z(e,t){if(t.handleNumbers.some(T))return!1;var r;1===t.handleNumbers.length&&(r=f[t.handleNumbers[0]].children[0],P+=1,c(r,o.cssClasses.active)),e.stopPropagation();var i=[],s=Y(S.move,q,K,{target:e.target,handle:r,listeners:i,startCalcPoint:e.calcPoint,baseSize:X(),pageOffset:e.pageOffset,handleNumbers:t.handleNumbers,buttonsProperty:e.buttons,locations:_.slice()}),a=Y(S.end,q,Q,{target:e.target,handle:r,listeners:i,doNotReject:!0,handleNumbers:t.handleNumbers}),l=Y("mouseout",q,J,{target:e.target,handle:r,listeners:i,doNotReject:!0,handleNumbers:t.handleNumbers});i.push.apply(i,s.concat(a,l)),e.cursor&&(A.style.cursor=getComputedStyle(e.target).cursor,f.length>1&&c(C,o.cssClasses.drag),A.addEventListener("selectstart",n,!1)),t.handleNumbers.forEach((function(e){oe("start",e)}))}function ee(e){e.stopPropagation();var t=G(e.calcPoint),r=function(e){var t=100,r=!1;return f.forEach((function(n,o){if(!T(o)){var i=_[o],s=Math.abs(i-e);(s<t||s<=t&&e>i||100===s&&100===t)&&(r=o,t=s)}})),r}(t);if(!1===r)return!1;o.events.snap||i(C,o.cssClasses.tap,o.animationDuration),ue(r,t,!0,!0),ce(),oe("slide",r,!0),oe("update",r,!0),oe("change",r,!0),oe("set",r,!0),o.events.snap&&Z(e,{handleNumbers:[r]})}function te(e){var t=G(e.calcPoint),r=k.getStep(t),n=k.fromStepping(r);Object.keys(U).forEach((function(e){"hover"===e.split(".")[0]&&U[e].forEach((function(e){e.call(g,n)}))}))}function re(e,t){U[e]=U[e]||[],U[e].push(t),"update"===e.split(".")[0]&&f.forEach((function(e,t){oe("update",t)}))}function ne(e){var t=e&&e.split(".")[0],r=t?e.substring(t.length):e;Object.keys(U).forEach((function(e){var n=e.split(".")[0],o=e.substring(n.length);t&&t!==n||r&&r!==o||function(e){return e===E||e===w}(o)&&r!==o||delete U[e]}))}function oe(e,t,r){Object.keys(U).forEach((function(n){var i=n.split(".")[0];e===i&&U[n].forEach((function(e){e.call(g,L.map(o.format.to),t,L.slice(),r||!1,_.slice(),g)}))}))}function ie(e,t,r,n,i,a){var l;return f.length>1&&!o.events.unconstrained&&(n&&t>0&&(l=k.getAbsoluteDistance(e[t-1],o.margin,0),r=Math.max(r,l)),i&&t<f.length-1&&(l=k.getAbsoluteDistance(e[t+1],o.margin,1),r=Math.min(r,l))),f.length>1&&o.limit&&(n&&t>0&&(l=k.getAbsoluteDistance(e[t-1],o.limit,0),r=Math.min(r,l)),i&&t<f.length-1&&(l=k.getAbsoluteDistance(e[t+1],o.limit,1),r=Math.max(r,l))),o.padding&&(0===t&&(l=k.getAbsoluteDistance(0,o.padding[0],0),r=Math.max(r,l)),t===f.length-1&&(l=k.getAbsoluteDistance(100,o.padding[1],1),r=Math.min(r,l))),!((r=s(r=k.getStep(r)))===e[t]&&!a)&&r}function se(e,t){var r=o.ort;return(r?t:e)+", "+(r?e:t)}function ae(e,t,r,n){var o=r.slice(),i=[!e,e],s=[e,!e];n=n.slice(),e&&n.reverse(),n.length>1?n.forEach((function(e,r){var n=ie(o,e,o[e]+t,i[r],s[r],!1);!1===n?t=0:(t=n-o[e],o[e]=n)})):i=s=[!0];var a=!1;n.forEach((function(e,n){a=ue(e,r[e]+t,i[n],s[n])||a})),a&&n.forEach((function(e){oe("update",e),oe("slide",e)}))}function le(e,t){return o.dir?100-e-t:e}function ce(){N.forEach((function(e){var t=_[e]>50?-1:1,r=3+(f.length+t*e);f[e].style.zIndex=r}))}function ue(e,t,r,n,i){return i||(t=ie(_,e,t,r,n,!1)),!1!==t&&(function(e,t){_[e]=t,L[e]=k.fromStepping(t);var r="translate("+se(10*(le(t,0)-D)+"%","0")+")";f[e].style[o.transformRule]=r,de(e),de(e+1)}(e,t),!0)}function de(e){if(m[e]){var t=0,r=100;0!==e&&(t=_[e-1]),e!==m.length-1&&(r=_[e]);var n=r-t,i="translate("+se(le(t,n)+"%","0")+")",s="scale("+se(n/100,"1")+")";m[e].style[o.transformRule]=i+" "+s}}function pe(e,t){return null===e||!1===e||void 0===e?_[t]:("number"==typeof e&&(e=String(e)),e=o.format.from(e),!1===(e=k.toStepping(e))||isNaN(e)?_[t]:e)}function fe(e,t,r){var n=a(e),s=void 0===_[0];t=void 0===t||!!t,o.animate&&!s&&i(C,o.cssClasses.tap,o.animationDuration),N.forEach((function(e){ue(e,pe(n[e],e),!0,!1,r)}));for(var l=1===N.length?0:1;l<N.length;++l)N.forEach((function(e){ue(e,_[e],!0,!0,r)}));ce(),N.forEach((function(e){oe("update",e),null!==n[e]&&t&&oe("set",e)}))}function me(){var e=L.map(o.format.to);return 1===e.length?e[0]:e}function he(e){var t=_[e],r=k.getNearbySteps(t),n=L[e],i=r.thisStep.step,s=null;if(o.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),s=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===t?i=null:0===t&&(s=null);var a=k.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,i]}return c(b=C,o.cssClasses.target),0===o.dir?c(b,o.cssClasses.ltr):c(b,o.cssClasses.rtl),0===o.ort?c(b,o.cssClasses.horizontal):c(b,o.cssClasses.vertical),c(b,"rtl"===getComputedStyle(b).direction?o.cssClasses.textDirectionRtl:o.cssClasses.textDirectionLtr),p=O(b,o.cssClasses.base),function(e,t){var r=O(t,o.cssClasses.connects);f=[],(m=[]).push(j(r,e[0]));for(var n=0;n<o.handles;n++)f.push(M(t,n)),N[n]=n,m.push(j(r,e[n+1]))}(o.connect,p),(y=o.events).fixed||f.forEach((function(e,t){Y(S.start,e.children[0],Z,{handleNumbers:[t]})})),y.tap&&Y(S.start,p,ee,{}),y.hover&&Y(S.move,p,te,{hover:!0}),y.drag&&m.forEach((function(e,t){if(!1!==e&&0!==t&&t!==m.length-1){var r=f[t-1],n=f[t],i=[e];c(e,o.cssClasses.draggable),y.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach((function(e){Y(S.start,e,Z,{handles:[r,n],handleNumbers:[t-1,t]})}))}})),fe(o.start),o.pips&&I(o.pips),o.tooltips&&H(),ne("update"+E),re("update"+E,(function(e,t,r,n,i){N.forEach((function(e){var t=f[e],n=ie(_,e,0,!0,!0,!0),s=ie(_,e,100,!0,!0,!0),a=i[e],l=o.ariaFormat.to(r[e]);n=k.fromStepping(n).toFixed(1),s=k.fromStepping(s).toFixed(1),a=k.fromStepping(a).toFixed(1),t.children[0].setAttribute("aria-valuemin",n),t.children[0].setAttribute("aria-valuemax",s),t.children[0].setAttribute("aria-valuenow",a),t.children[0].setAttribute("aria-valuetext",l)}))})),g={destroy:function(){for(var e in ne(E),ne(w),o.cssClasses)o.cssClasses.hasOwnProperty(e)&&u(C,o.cssClasses[e]);for(;C.firstChild;)C.removeChild(C.firstChild);delete C.noUiSlider},steps:function(){return N.map(he)},on:re,off:ne,get:me,set:fe,setHandle:function(e,t,r,n){if(!((e=Number(e))>=0&&e<N.length))throw new Error("noUiSlider (14.6.4): invalid handle number, got: "+e);ue(e,pe(t,e),!0,!0,n),oe("update",e),r&&oe("set",e)},reset:function(e){fe(o.start,e)},__moveHandles:function(e,t,r){ae(e,t,_,r)},options:l,updateOptions:function(e,t){var n=me(),i=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];i.forEach((function(t){void 0!==e[t]&&(l[t]=e[t])}));var s=W(l);i.forEach((function(t){void 0!==e[t]&&(o[t]=s[t])})),k=s.spectrum,o.margin=s.margin,o.limit=s.limit,o.padding=s.padding,o.pips?I(o.pips):B(),o.tooltips?H():z(),_=[],fe(r(e.start)?e.start:n,t)},target:C,removePips:B,removeTooltips:z,getTooltips:function(){return v},getOrigins:function(){return f},pips:I}}return{__spectrum:b,version:e,cssClasses:x,create:function(e,t){if(!e||!e.nodeName)throw new Error("noUiSlider (14.6.4): create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider (14.6.4): Slider was already initialized.");var r=Y(e,W(t),t);return e.noUiSlider=r,r}}})?r.apply(t,[]):r)||(e.exports=n)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(942),t=r.n(e);const n=e=>{e.stopPropagation()},o=e=>"Escape"===e.key||"Esc"===e.key;var i=r(146),s=r.n(i);const a=document.querySelector(".img-upload__preview img"),l=document.querySelectorAll(".effects__radio"),c=document.querySelector(".img-upload__effect-level"),u=c.querySelector(".effect-level__slider"),d=c.querySelector(".effect-level__value"),p=.1,f="marvin",m="phobos",h="heat",v={default:{range:{min:0,max:1},start:1,step:p},marvin:{range:{min:0,max:100},start:100,step:1},phobos:{range:{min:0,max:3},start:3,step:p},heat:{range:{min:1,max:3},start:3,step:p}},g=()=>{s().create(u,{range:{min:0,max:1},start:1,step:p,connect:"lower",format:{to:function(e){return Number.isInteger(e)?e.toFixed(0):e.toFixed(1)},from:function(e){return parseFloat(e)}}}),c.style.display="none",l.forEach((e=>{e.addEventListener("click",(()=>{"none"===e.value?(c.style.display="none",a.style.filter="none"):(a.classList.add(`effects__preview--${e.value}`),c.style.display="block",(e=>{(e=>{switch(e){case f:u.noUiSlider.updateOptions(v.marvin);break;case m:u.noUiSlider.updateOptions(v.phobos);break;case h:u.noUiSlider.updateOptions(v.heat);break;default:u.noUiSlider.updateOptions(v.default)}})(e),u.noUiSlider.on("update",((t,r)=>{d.value=t[r],a.style.filter=((e,t,r)=>{switch(e){case"chrome":return`grayscale(${t[r]})`;case"sepia":return`sepia(${t[r]})`;case f:return`invert(${t[r]}%)`;case m:return`blur(${t[r]}px)`;case h:return`brightness(${t[r]})`}})(e,t,r)}))})(e.value))}))}))},y=document.querySelector(".scale__control--smaller"),b=document.querySelector(".scale__control--bigger"),S=document.querySelector(".scale__control--value"),x=document.querySelector(".img-upload__preview img");let w=100;const E=(e,t)=>{t.disabled=w===e},C=e=>{w+=e,S.value=`${w}%`,S.setAttribute("value",`${w}%`),x.style.transform=`scale(${w/100})`,E(100,b),E(25,y)},k=()=>{C(25)},L=()=>{C(-25)},_=document.querySelector(".img-upload__preview img"),N=["jpg","jpeg","png"],P=document.querySelector("body"),U=document.querySelector("#upload-file"),V=document.querySelector(".img-upload__overlay"),q=document.querySelector("#upload-cancel"),A=document.querySelector(".text__hashtags"),D=document.querySelector(".text__description"),O=/^#[a-z0-9а-я]+$/,M=()=>{const e=A.value.split(" ").map((e=>e.toLowerCase()));e.forEach((t=>{A.value?t.length>20?A.setCustomValidity("Хеш-тег должен быть не длинее 20 символов"):e.length>5?A.setCustomValidity("Хеш-тегов должно быть не больше 5"):"#"!==t[0]?A.setCustomValidity("Хеш-тег должен начинаться с #"):1===t.length?A.setCustomValidity("Хеш-тег не может сосотоять только из #"):t.includes("#",1)?A.setCustomValidity("Хеш-теги разделяются пробелами"):O.test(t)?e.slice(0,-1).includes(t)?A.setCustomValidity("Хеш-теги не могут быть одинаковыми"):A.setCustomValidity(""):A.setCustomValidity("Хеш-тег не может содержать спецсимволов и знаков пунктуации"):A.setCustomValidity("")})),A.reportValidity()},j=e=>{o(e)&&(e.preventDefault(),F())},F=()=>{V.classList.add("hidden"),document.removeEventListener("keydown",j),P.classList.remove("modal-open"),q.removeEventListener("click",F),U.value="",A.value="",D.value="",b.removeEventListener("click",k),y.removeEventListener("click",L),S.value="100%",u.noUiSlider.destroy(),a.style.filter="none",A.removeEventListener("keydown",n),D.removeEventListener("keydown",n),A.removeEventListener("input",M)},R=document.querySelector("main"),T={SUCCESS:document.querySelector("#success").content.querySelector(".success").cloneNode(!0),ERROR:document.querySelector("#error").content.querySelector(".error").cloneNode(!0)},z=e=>{const t=e=>{o(e)&&(e.preventDefault(),r())},r=()=>{e.remove(),document.removeEventListener("keydown",t),R.removeEventListener("click",n)},n=t=>{t.target===e&&r()};R.appendChild(e),e.querySelector("button").addEventListener("click",r),document.addEventListener("keydown",t),R.addEventListener("click",n)},H=()=>{F(),z(T.ERROR)},$=()=>{F(),z(T.SUCCESS)},B="https://22.javascript.pages.academy/kekstagram",I=document.querySelector(".img-upload__form"),X=document.querySelector(".social__comments"),W=X.querySelector(".social__comment"),Y=document.querySelector(".social__comment-count"),G=document.querySelector(".comments-current-count"),J=document.querySelector(".comments-loader"),K=()=>{let e=0,t=0;Array.from(X.children).forEach((r=>{"none"===r.style.display&&e<5&&(r.style.display="flex",e++),"none"!==r.style.display&&(t+=1)})),G.textContent=t,Array.from(X.children).some((e=>"none"===e.style.display))||J.classList.add("hidden")},Q=document.querySelector("body"),Z=document.querySelector(".big-picture"),ee=document.querySelector("#picture-cancel"),te=e=>{o(e)&&(e.preventDefault(),re())},re=()=>{Z.classList.add("hidden"),document.removeEventListener("keydown",te),Q.classList.remove("modal-open"),ee.removeEventListener("click",re),J.removeEventListener("click",K),G.textContent=5},ne=document.querySelector(".big-picture"),oe=ne.querySelector(".big-picture__img img"),ie=ne.querySelector(".likes-count"),se=ne.querySelector(".social__caption"),ae=ne.querySelector(".comments-count"),le=e=>{Z.classList.remove("hidden"),document.addEventListener("keydown",te),Q.classList.add("modal-open"),ee.addEventListener("click",re),(e=>{oe.src=e.url,ae.textContent=e.comments.length,ie.textContent=e.likes,se.textContent=e.description,(e=>{const t=document.createDocumentFragment();X.innerHTML="",e.forEach(((e,r)=>{const n=W.cloneNode(!0),o=n.querySelector(".social__picture"),i=n.querySelector(".social__text");o.src=e.avatar,o.alt=e.name,i.textContent=e.message,((e,t)=>{e>4&&(t.style.display="none")})(r,n),t.appendChild(n)})),X.appendChild(t),J.addEventListener("click",K),(e=>{e.length<5?(Y.classList.add("hidden"),J.classList.add("hidden")):(Y.classList.remove("hidden"),J.classList.remove("hidden"))})(e)})(e.comments)})(e)},ce=document.querySelector("#picture").content.querySelector(".picture"),ue=document.querySelector(".pictures"),de=e=>{const t=document.createDocumentFragment();e.forEach((e=>{const r=ce.cloneNode(!0),n=r.querySelector(".picture__img"),o=r.querySelector(".picture__comments"),i=r.querySelector(".picture__likes");n.src=e.url,o.textContent=e.comments.length,i.textContent=e.likes,r.addEventListener("click",(()=>le(e))),t.appendChild(r)})),Array.from(ue.children).forEach((e=>{e.classList.contains("picture")&&e.remove()})),ue.appendChild(t)},pe=document.querySelector(".img-filters"),fe=document.querySelector(".img-filters__form"),me=fe.querySelectorAll(".img-filters__button"),he=()=>Math.random()-.5,ve=(e,t)=>t.comments.length-e.comments.length;var ge;ge=e=>{var r;de(e.slice(0,25)),pe.classList.remove("img-filters--inactive"),r=t()((t=>((e,t)=>{switch(t){case"filter-random":de(e.slice().sort(he).slice(0,10));break;case"filter-discussed":de(e.slice().sort(ve));break;default:de(e.slice(0,25))}})(e,t)),500),fe.addEventListener("click",(e=>{if(e.target.classList.contains("img-filters__button")){const{id:t}=e.target;me.forEach((e=>{e.id!==t?e.classList.remove("img-filters__button--active"):e.classList.add("img-filters__button--active")})),r(t)}}))},fetch(`${B}/data`).then((e=>{if(e.ok)return e.json();throw new Error})).then(ge).catch((()=>{(e=>{const t=document.createElement("div");t.style.zIndex=100,t.style.position="fixed",t.style.left="50%",t.style.top="50%",t.style.transform="translate(-50%, -50%)",t.style.border="4px solid yellow",t.style.borderRadius="10px",t.style.padding="10px 5px",t.style.fontSize="23px",t.style.lineHeight="1.3em",t.style.color="black",t.style.backgroundColor="white",t.textContent="Не удалось загрузить фотографии. Перезагрузите страницу",document.body.append(t),setTimeout((()=>{t.remove()}),5e3)})()})),U.addEventListener("change",(()=>{(e=>{const t=e.files[0],r=t.name.toLowerCase();if(N.some((e=>r.endsWith(e)))){const e=new FileReader,r=e=>{_.src=e.target.result};e.addEventListener("load",r),e.readAsDataURL(t)}})(U),V.classList.remove("hidden"),document.addEventListener("keydown",j),P.classList.add("modal-open"),q.addEventListener("click",F),w=100,S.setAttribute("value",`${w}%`),x.style.transform=`scale(${w/100})`,b.disabled=!0,b.addEventListener("click",k),y.addEventListener("click",L),g(),A.addEventListener("keydown",n),D.addEventListener("keydown",n),A.addEventListener("input",M)})),I.addEventListener("submit",(e=>{e.preventDefault(),((e,t)=>{fetch(B,{method:"POST",body:e}).then((e=>{if(!e.ok)throw new Error;t()})).catch(H)})(new FormData(I),$)}))})()})();
//# sourceMappingURL=main.bundle.js.map