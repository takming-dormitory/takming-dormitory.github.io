/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cfe0f1e0944dddd84de60342aba2a22f"],["/about/index.html","3c4b5cdb4fc6564a1b6f34e777abeeca"],["/archives/2022/03/index.html","d89b9d64d7cd90e9d661ddf03eb8b538"],["/archives/2022/06/index.html","75ce041100e9d0cb36cfe09e5c36b356"],["/archives/2022/07/index.html","0273451352be4ac21705c5ef8edde300"],["/archives/2022/08/index.html","b99c0b17218ac466ba32e2017aa52e21"],["/archives/2022/09/index.html","65cc8b5882bba9ee138a879b4e33f0cc"],["/archives/2022/index.html","566d68f9378272a820ef6d668a6d53e0"],["/archives/index.html","e83c054b631c385eb0ad971c9a40250f"],["/categories/index.html","78d09191f86c58ee571acec016f3a0e3"],["/categories/宿舍公告/index.html","82f1217cc0a83860c693c6bc080f3652"],["/categories/宿舍活動/index.html","f79c1a4c09e618f9e1493dc32b2e8aec"],["/categories/生輔組活動/index.html","252d48b666b53cd48f98bd9ed8e10646"],["/categories/管理員公告/index.html","3be01d13d455b9fa752582230bf3dedc"],["/convention/index.html","398f0427143faea022adcb4f9160f163"],["/css/index.css","0a13fa0b7b2c2fbd81c1317d15671ff9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/download/index.html","ce4da00a2dc4c870ab4463cceb7f062c"],["/events/index.html","6a902941f43553d16db59d69dc62edea"],["/images/15屆.jpg","91dbd910fddbcd80679c546cab31739a"],["/images/about/宿舍幹部/1.jpg","169e79889467826764bc5bfd607412f6"],["/images/about/宿舍幹部/10.jpg","46c71a5b3364f3f08a048b21b73e27aa"],["/images/about/宿舍幹部/11.jpg","6ca6f464433049f325aa54cc5507b969"],["/images/about/宿舍幹部/12.jpg","817d4f3edf82d08a40be811b74544cd5"],["/images/about/宿舍幹部/13.jpg","12dabd0c952688863e2cd05ddb5ee27a"],["/images/about/宿舍幹部/14.jpg","0f62171e0ea45cf2679cf4890f7749e5"],["/images/about/宿舍幹部/15.jpg","29e5c538aee59cd5c840218d9cd9bc90"],["/images/about/宿舍幹部/16.jpg","fedf14fe6475086f6d65a77cbd1e744c"],["/images/about/宿舍幹部/17.jpg","c1655cd0aacfa8c5ee40db4fa3faf853"],["/images/about/宿舍幹部/18.jpg","4c67be175096b0bf0ffdf7f598353ea1"],["/images/about/宿舍幹部/19.jpg","18044eabf3a42fdeb663be4997d3311a"],["/images/about/宿舍幹部/2.jpg","cd2ca6f5b47acc1de50223150caf9dc2"],["/images/about/宿舍幹部/20.jpg","463e3c3a63849042dd06b66c21d54e0f"],["/images/about/宿舍幹部/21.jpg","f683bd26ff755ba099462b01dd337b9e"],["/images/about/宿舍幹部/22.jpg","a9f4de3583b4e239a17cdf13c1a72bcc"],["/images/about/宿舍幹部/23.jpg","0a5b1661f9cf5f52ca3049b3973c2916"],["/images/about/宿舍幹部/3.jpg","09ce0e983d986de3960be15d5e5b8267"],["/images/about/宿舍幹部/4.jpg","ebc5dbf8ccbf0e7e543defb383768187"],["/images/about/宿舍幹部/5.jpg","9ac4d369b3925b775bdc86f67be42e05"],["/images/about/宿舍幹部/6.jpg","10b9b8e4406997b722daea076e4c83a1"],["/images/about/宿舍幹部/7.jpg","90d3e4442e748dee66fc9422b326b14f"],["/images/about/宿舍幹部/8.jpg","6086f65d5fcea846504697ba41fe325a"],["/images/about/宿舍幹部/9.jpg","11439ade31e9396938e59d3a8514579a"],["/images/about/宿舍簡介/life.jpg","720b1a29cfb3407ee7afef14cc50fdad"],["/images/about/宿舍簡介/宿舍簡介.jpg","77036c9475bf64ae9a2ea44f81c8097e"],["/images/about/宿舍老師/1.jpg","93cc76a9d665f3a6de5287cddfeefd0a"],["/images/about/宿舍老師/2.jpg","60917b9f20bb8595f8f46190b17ddcdc"],["/images/about/宿舍老師/3.jpg","ea8e4038a0a53bf08d1f69f3c0d764f9"],["/images/about/宿舍老師/4.jpg","11ce9c3e61aa89b6bc761bb036666714"],["/images/about/舊宿舍幹部/1.jpg","efe589a0f79ed71952a8cb22c21a2fe7"],["/images/about/舊宿舍幹部/10.jpg","de988d7ab97bb045a10cab9e31320c63"],["/images/about/舊宿舍幹部/11.jpg","820f31ecc360ac7b95868a1ab0981cb4"],["/images/about/舊宿舍幹部/12.jpg","8e349c4d04449351e7bcea2be0d121f0"],["/images/about/舊宿舍幹部/13.jpg","ebedd336a8a7b920044ae365a4c5fd14"],["/images/about/舊宿舍幹部/14.jpg","6db21e84c7cf2111946560af59c5054c"],["/images/about/舊宿舍幹部/15.jpg","6e07bce48e9bfff8500497c8f4d9c344"],["/images/about/舊宿舍幹部/16.jpg","0ad8aebdaae70f85d3399dfb1f5b532d"],["/images/about/舊宿舍幹部/17.jpg","a244b2620d2c5497504c30419f98aa61"],["/images/about/舊宿舍幹部/18.jpg","550b5e69f26470a7bd6651b1ff4c857a"],["/images/about/舊宿舍幹部/19.jpg","4442bd429b0b95bd49a6573561df73d1"],["/images/about/舊宿舍幹部/2.jpg","f44fa1040d872e61dffc64df77f13708"],["/images/about/舊宿舍幹部/20.jpg","d561c633e0778a3f1e5d01aaa9d871e4"],["/images/about/舊宿舍幹部/21.jpg","7e8cc98e29b768a30730bb1a6e6fc80e"],["/images/about/舊宿舍幹部/22.jpg","ab0970f1c3296c6bd75c76a71eccc3b3"],["/images/about/舊宿舍幹部/23.jpg","71802eceb5eb672f14f05b80ba8a7516"],["/images/about/舊宿舍幹部/24.jpg","9ed764d1c98456ee0681e86adecc5ef5"],["/images/about/舊宿舍幹部/25.jpg","5b4e075b49547e9dbcd9a67c589e3a1e"],["/images/about/舊宿舍幹部/3.jpg","4aaa8107638514d787dff9fc7f76c3ad"],["/images/about/舊宿舍幹部/5.jpg","00d61abf475e19030b2f23dad2311c9f"],["/images/about/舊宿舍幹部/6.jpg","b2589ae91237c3e0ff4cddefe1f1307d"],["/images/about/舊宿舍幹部/7.jpg","3f89f270709895d9b33f138798640008"],["/images/about/舊宿舍幹部/8.jpg","b2cf88584df923378bc39d078f5975c6"],["/images/about/舊宿舍幹部/9.jpg","25c02ca4b5169cd5b6d3851575c15f49"],["/images/carousel/slide1.jpg","a466237b10aa38e08f1a1f4f1f41182d"],["/images/carousel/slide2.jpg","ccc09160bc520419f302ee1e44778431"],["/images/carousel/slide3.jpg","c938ffc0e742e8530af9836136989905"],["/images/carousel/slide4.jpg","7922c1d8a5a04e4fdd062b37f52f6b3d"],["/images/carousel/slide5.jpg","f6045fb675c101fe2431c1e60a427141"],["/images/carousel/slide6.jpg","11abde25baaa6a49d6273ce85a35ef7e"],["/images/carousel/slide7.jpg","0d52e46514bc0256e21593024fe1d2a3"],["/images/carousel/slide8.jpg","52c5883c95e64aaadd58878e125a84ff"],["/images/carousel/slide9.jpg","4a0710067c8d9ac3e242ef759aeef69a"],["/images/cover.jpg","bb042080b4b4f23889bb8965f025babb"],["/images/life.jpg","ce30f7afa69190db8cdb43829fa50e4c"],["/images/mail.png","14fa675dfc9c09ba6544cee7c2cd899b"],["/images/map/map-1.png","346733ac29f4fed9ce1b8fc4634311b6"],["/images/old/slide1.jpg","401c6cfc52240d5a7c8db211cdebed1f"],["/images/old/slide2.jpg","1d3fc644a30fec03f64b4a4387b32bf2"],["/images/old/slide3.jpg","a9548e33373e3a695166a2e0aa77891c"],["/images/old/slide4.jpg","e897ea67f7485b0657d239ccdccb5495"],["/images/old/slide5.jpg","52c5883c95e64aaadd58878e125a84ff"],["/images/old/slide6.jpg","d5e29d22be0498c7bf478e609653d4b0"],["/images/picture/2021/0318.jpg","415268dd8a337de0ae2f59bed8ce3c01"],["/images/picture/2021/0505.jpg","933e7dce467c3f7b6de1fedec212cd88"],["/images/picture/2021/1216.jpg","f2415119a2a394252a436d05b54705f7"],["/images/picture/2022/0317.jpg","cb1790149b85e40eb40c7416267a9e2a"],["/images/post/android.jpg","65f79f3d037f144add35229d1960a29e"],["/images/post/android1.jpg","dee5e00599839dd7ba4355e3d2ed4dad"],["/images/post/android2.jpg","62da2ae968ac93601b50893cb50043ba"],["/images/post/ios.png","c90f171f93c40374bff77b06fcd0f6a2"],["/images/post/ios1.png","ea753b6f77181d5ef48a61ef89daf2d6"],["/images/post/ios2.png","c2e4085d1b22b8008d849decb3886bf7"],["/images/top_img.jpg","4a0710067c8d9ac3e242ef759aeef69a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","e3a1fdfe20dcc544cfe2da49d4dd4333"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0f80730a23ad53306d0da7cd637804d1"],["/issue/index.html","a44f1e215635af217f1f968b0f19bd9b"],["/js/custom/footer.js","8cd617bd27db6cd6cdd6369b36ce422d"],["/js/main.js","7dd471cc2981750b93a949829526025e"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","fcea8b7dac4fd16ed24815974f5c929f"],["/picture/110/9/index.html","02f6f05a96d32fdfeaf3336c60fb02a6"],["/picture/111/1/index.html","734531a43a80e0423322bce5023079f8"],["/picture/index.html","bc224b4a9d9d98716f8514b32353bbd0"],["/post/110-2室長大會/index.html","d10cf71d44ce8c593fd562ac8cf19056"],["/post/110-2端午節/index.html","ad67cb20632528f8443dcb16f150c615"],["/post/111-1賃居座談會/index.html","9d17e28e8a1fc4dd15d592df2f12672d"],["/post/app/index.html","ad80d0f56e48d5d3534c9e52f75cef4e"],["/post/boy/index.html","53de54b8c17079e497bf85d3d5661273"],["/post/girl/index.html","0cbe721762b6cca482dcf2b1864b938c"],["/post/住宿名單/index.html","cc4e08d7a926201f6f8221757ac28595"],["/post/住宿流程/index.html","f5de31a6c1a02063cb3aa6b276e607e0"],["/pwa/16.png","714370a8d95bf9aaff19bef184e6060b"],["/pwa/32.png","c48cf4036a42ecca81459183fb8385d5"],["/pwa/apple-touch-icon.png","1be7193bc8194ec1469646c6b75f8941"],["/pwa/icon-128x128.png","ade36b0ab63470fc964c74fc2c94a0a1"],["/pwa/icon-192x192.png","1be7193bc8194ec1469646c6b75f8941"],["/pwa/icon-256x256.png","7b01c8fb654ae5377887b521e67a034b"],["/pwa/icon-512x512.png","4182d324fc07cfa6ab333bba4e08f48a"],["/pwa/safari-pinned-tab.svg","b916d31e967f0ade3b71f7456bb9afa0"],["/search.xml","18a640f6174c2b631855160fa1655c0f"],["/sitemap.xml","5310fe212a17a4d64257f1fab0a18d01"],["/sw-register.js","e09a6404f239490479dc5ac26dcfb73d"],["/tags/index.html","b5e00a9578a283e33a562332b2fbacfc"],["/timeline/index.html","04acfeb91a0320db9f077fec3106df14"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
