(window.klaviyoOnsiteJSONP=window.klaviyoOnsiteJSONP||[]).push([[6],{"../../node_modules/core-js/modules/_fails-is-regexp.js":function(e,t,n){var r=n("../../node_modules/core-js/modules/_wks.js")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},"../../node_modules/core-js/modules/_string-context.js":function(e,t,n){var r=n("../../node_modules/core-js/modules/_is-regexp.js"),i=n("../../node_modules/core-js/modules/_defined.js");e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},"../../node_modules/core-js/modules/es6.function.name.js":function(e,t,n){var r=n("../../node_modules/core-js/modules/_object-dp.js").f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n("../../node_modules/core-js/modules/_descriptors.js")&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"../../node_modules/core-js/modules/es6.string.starts-with.js":function(e,t,n){"use strict";var r=n("../../node_modules/core-js/modules/_export.js"),i=n("../../node_modules/core-js/modules/_to-length.js"),o=n("../../node_modules/core-js/modules/_string-context.js"),a="".startsWith;r(r.P+r.F*n("../../node_modules/core-js/modules/_fails-is-regexp.js")("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},"../onsite-profiling/src/index.ts":function(e,t,n){"use strict";n.r(t),n.d(t,"configureRumProfiler",(function(){return ae})),n.d(t,"createBatchedTelemetricsLogger",(function(){return $})),n.d(t,"logToTelemetrics",(function(){return Z}));n("../../node_modules/core-js/modules/es6.function.name.js"),n("../../node_modules/core-js/modules/es6.string.starts-with.js");var r,i={t:!1,i:!1,o:15e3},o=window,a=o.console,s=document,c=o.navigator,u=o.performance,l=function(){return c.deviceMemory},d=function(){return c.hardwareConcurrency},f=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},m="4g",v=!1,p=function(){return!!(d()&&d()<=4)||!!(l()&&l()<=4)},g=function(e,t){return!!p()||!!["slow-2g","2g","3g"].includes(e)||!!t},h={u:!1},y=function(e){s.hidden&&(e(),h.u=s.hidden)},T=function(e){return parseFloat(e.toFixed(2))},b=function(e){return"number"!=typeof e?null:T(e/Math.pow(1024,2))},j=[1e3,2500],k=[2500,4e3],_=[100,300],w=[.1,.25],S=[300,600],P={fp:j,fcp:j,lcp:k,lcpFinal:k,fid:_,fidVitals:_,cls:w,clsFinal:w,tbt:S,tbt5S:S,tbt10S:S,tbtFinal:S},x=function(e,t){return P[e]?t<=P[e][0]?"good":t<=P[e][1]?"needsImprovement":"poor":null},E=function(e,t,n){var r;r=function(){h.u&&e.indexOf("Final")<0||!i.analyticsTracker||i.analyticsTracker({metricName:e,data:t,eventProperties:n||{},navigatorInformation:c?{deviceMemory:l()||0,hardwareConcurrency:d()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:p(),isLowEndExperience:g(m,v)}:{},vitalsScore:x(e,t)})},"requestIdleCallback"in o?o.requestIdleCallback(r,{timeout:3e3}):r()},O=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=T(t[e]))})),E(e,t,n)},B=function(e,t,n){var r=T(e);r<=i.o&&r>=0&&E(t,r,n)},F={},I={value:0},M={value:0},W={value:0},D={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},L={value:0},G=function(e){var t=e.pop();t&&!t.s&&t.value&&(I.value+=t.value)},q={},C=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){a.warn("Perfume.js:",e)}return null},N=function(e){q[e]&&q[e].disconnect(),delete q[e]},R=function(e){var t=e.pop();t&&(B(t.processingStart-t.startTime,"fidVitals",{performanceEntry:t}),B(t.duration,"fid",{performanceEntry:t})),N(1),B(W.value,"lcp"),q[3]&&"function"==typeof q[3].takeRecords&&q[3].takeRecords(),B(I.value,"cls"),B(L.value,"tbt"),setTimeout((function(){B(L.value,"tbt5S")}),5e3),setTimeout((function(){B(L.value,"tbt10S"),O("dataConsumption",D.value)}),1e4)},z=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<M.value)){var t=e.duration-50;t>0&&(L.value+=t)}}))},J=function(e){e.forEach((function(e){"first-paint"===e.name?B(e.startTime,"fp"):"first-contentful-paint"===e.name&&(M.value=e.startTime,B(M.value,"fcp"),q[4]=C("longtask",z),N(0))}))},A=function(e){var t=e.pop();t&&(W.value=t.renderTime||t.loadTime)},U=function(e){e.forEach((function(e){e.identifier&&B(e.startTime,e.identifier)}))},V=function(e){e.forEach((function(e){if(i.t&&O("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;D.value[e.initiatorType]+=t,D.value.total+=t}}))},H=function(){q[2]&&(B(W.value,"lcpFinal"),N(2)),q[3]&&("function"==typeof q[3].takeRecords&&q[3].takeRecords(),B(I.value,"clsFinal"),N(3)),q[4]&&(B(L.value,"tbtFinal"),N(4))},K=function(e){var t="usageDetails"in e?e.usageDetails:{};O("storageEstimate",{quota:b(e.quota),usage:b(e.usage),caches:b(t.caches),indexedDB:b(t.indexedDB),serviceWorker:b(t.serviceWorkerRegistrations)})},Q=function(){function e(e){void 0===e&&(e={}),this.l="5.3.0",i.analyticsTracker=e.analyticsTracker,i.t=!!e.resourceTiming,i.i=!!e.elementTiming,i.o=e.maxMeasureTime||i.o,f()&&("PerformanceObserver"in o&&(q[0]=C("paint",J),q[1]=C("first-input",R),q[2]=C("largest-contentful-paint",A),i.t&&C("resource",V),q[3]=C("layout-shift",G),i.i&&C("element",U)),void 0!==s.hidden&&s.addEventListener("visibilitychange",y.bind(this,H)),O("navigationTiming",function(){if(!f())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart}}()),O("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(m=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(K))}return e.prototype.start=function(e){f()&&!F[e]&&(F[e]=!0,u.mark("mark_"+e+"_start"),h.u=!1)},e.prototype.end=function(e,t){void 0===t&&(t={}),f()&&F[e]&&(u.mark("mark_"+e+"_end"),delete F[e],O(e,T(function(e){u.measure(e,"mark_"+e+"_start","mark_"+e+"_end");var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e)),t))},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete F[e],u.clearMarks&&(u.clearMarks("mark_"+e+"_start"),u.clearMarks("mark_"+e+"_end"))},e}(),X=n("../config/lib/client.json"),Y=(n("../../node_modules/core-js/modules/es6.promise.js"),n("../../node_modules/core-js/modules/es6.object.to-string.js"),n("../../node_modules/unfetch/dist/unfetch.mjs")),Z=function(e){var t=e.sample,n=void 0===t?1:t,r=e.metricGroup,i=e.events;return Math.random()<=n?Object(Y.a)("".concat(X.API.telemetricsUrl,"/v1/metric"),{method:"POST",body:JSON.stringify({metricGroup:r,events:i})}):Promise.resolve()},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.batchInterval,n=void 0===t?2e3:t,r={},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.beacon,n=void 0!==t&&t;for(var i in r)if(r.hasOwnProperty(i)){var o={metricGroup:i,events:r[i]};n?window.navigator.sendBeacon("".concat(X.API.telemetricsUrl,"/v1/metric"),JSON.stringify(o)):Z(o)}r={}},o=function(e){var t=e.metricGroup,n=e.events,i=e.sample,o=void 0===i?1:i;if(Math.random()>o)return r;var a={};for(var s in r)r.hasOwnProperty(s)&&(a[s]=r[s]);return a[t]=a[t]?a[t].concat(n):n,a},a=setInterval(i,n);return document.addEventListener("visibilitychange",(function(){"visibilityState"in document&&"hidden"===document.visibilityState&&"navigator"in window&&"sendBeacon"in window.navigator?(i({beacon:!0}),clearInterval(a)):"visible"===document.visibilityState&&(a=setInterval(i,n))})),function(e){var t=e.batch,n=void 0===t||t,i=e.sample,a=void 0===i?1:i,s=e.metricGroup,c=e.events;n?r=o({sample:a,metricGroup:s,events:c}):Z({sample:a,metricGroup:s,events:c})}},ee=["cls","fid","fcp","fp","lcp","resourceTiming","tbt"],te=["resourceTiming"];function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(e,t,n){if("app"===e){var r=function(e){return-1!==ee.indexOf(e)}(t),i="resourceTiming"!==t||n.name.startsWith(X.fender.publicPath);return r&&i}var o=function(e){return-1!==te.indexOf(e)}(t),a="resourceTiming"!==t||n.name.startsWith(X.onsiteModules.publicPath);return o&&a},ie={cls:"cumulativeLayoutShift",fid:"firstInputDelay",fcp:"firstContentfulPaint",fp:"firstPaint",lcp:"largestContentfulPaint",resourceTiming:"resourceTiming",tbt:"totalBlockingTime"},oe=(ne(r={},"app",.1),ne(r,"onsite",.01),r),ae=function(e){var t=$(),n="",r=oe[e];return{perfume:new Q({resourceTiming:!0,analyticsTracker:function(i){var o=i.data,a=i.metricName;if(re(e,a,o)){var s="rum-metrics-".concat(e),c={metric:"".concat(ie[a]).concat(n?".".concat(n):""),statsd:{type:"timing",value:"resourceTiming"===a?o.duration:o},sample:r};t({metricGroup:s,events:[c],sample:r})}}}),updateMetricSuffix:function(e){n=e}}}}}]);
