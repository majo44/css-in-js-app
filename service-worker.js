"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9bfe67194fc736a46d3112bbcd2a5620"],["/static/css/main.016c5175.css","16436faeb394c3a32ea967f69ed65cbf"],["/static/js/0.07917e6c.chunk.js","8163f52f3b8a74eedc533267ff9f0068"],["/static/js/1.bacab81c.chunk.js","e80726609d177396352e20f12a3585d9"],["/static/js/10.12bdb0a4.chunk.js","2ff230ea4213d66327da043501a1aaec"],["/static/js/11.aee4e0b4.chunk.js","8048a51809dbce56a777cebe9ab00a48"],["/static/js/12.af5187fe.chunk.js","5abcc9ce3ce6d91f1f4fedd69657234c"],["/static/js/2.f5fde138.chunk.js","26be62c0714fa77844e60529d5fb9073"],["/static/js/3.493a98a0.chunk.js","b178bb5597e2834cc674973f333b2374"],["/static/js/4.fba37d07.chunk.js","210a95b862d556b0ccbc61f4dad24d0e"],["/static/js/5.36e285ba.chunk.js","1b8012115b26126f3aa33bd7092bed47"],["/static/js/6.e347cde2.chunk.js","22076e636e8511379bd3d974cb8ab2ac"],["/static/js/7.dbee48e7.chunk.js","7cd1c2a8f54ece9bf4277ae5a58c8432"],["/static/js/8.827038f0.chunk.js","be55eb05648fa770e14e19299660c22e"],["/static/js/9.1da6ae28.chunk.js","1170610bdc883659cb348d2cd25f10fe"],["/static/js/main.20015f75.js","ed940c25f8a63d7f8dcde906710d59df"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});