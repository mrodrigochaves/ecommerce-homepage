// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gbXMy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _navbarJs = require("./components/Navbar.js");
var _navbarJsDefault = parcelHelpers.interopDefault(_navbarJs);
var _footerJs = require("./components/Footer.js");
var _footerJsDefault = parcelHelpers.interopDefault(_footerJs);
var _routerJs = require("./router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _resetCss = require("./styles/reset.css");
var _mainCss = require("./styles/main.css");
document.addEventListener("DOMContentLoaded", ()=>{
    document.body.insertAdjacentHTML("afterbegin", (0, _navbarJsDefault.default)());
    (0, _routerJsDefault.default)();
    document.body.insertAdjacentHTML("beforeend", (0, _footerJsDefault.default)());
});

},{"./components/Navbar.js":"5EEXV","./components/Footer.js":"8pPOA","./router.js":"l7a58","./styles/reset.css":"he3wz","./styles/main.css":"clPKd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5EEXV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navbar);
var _searchSvg = require("../assets/search.svg");
var _searchSvgDefault = parcelHelpers.interopDefault(_searchSvg);
var _cartSvg = require("../assets/cart.svg");
var _cartSvgDefault = parcelHelpers.interopDefault(_cartSvg);
var _accountSvg = require("../assets/account.svg");
var _accountSvgDefault = parcelHelpers.interopDefault(_accountSvg);
var _arrowIconSvg = require("../assets/arrow-icon.svg");
var _arrowIconSvgDefault = parcelHelpers.interopDefault(_arrowIconSvg);
function Navbar() {
    return `
  <div class="top-bar">
      <p>
        Sign up and get 20% off to your first order.
        <a href="url">Sign Up Now</a>
      </p>
    </div>
    <div class="nav-bar">
      <div class="hamburger" onclick="toggleMenu()">\u{2630}</div>
      <div class="logo">SHOP.CO</div>
      <div class="icons">
        <img class="icon" id="search" src="${0, _searchSvgDefault.default}" alt="Search" />
        <img class="icon" src="${0, _cartSvgDefault.default}" alt="Cart" />
        <img class="icon" src="${0, _accountSvgDefault.default}" alt="Account" />
      </div>
    </div>

    <div class="nav-menu">
    <div class="shop-text">SHOP.CO</div>
    <a href="#">Shop<img src="${0, _arrowIconSvgDefault.default}" alt="Seta para baixo" class="arrow-icon" /></a>
    <a href="#">On Sale</a>
    <a href="#">New Arrivals</a>
    <a href="#">Brands</a>

    <div class="search-bar">
      <div class="icon-search">
        <img class="icon" src="${0, _searchSvgDefault.default}" alt="Search" />
        <input type="text" placeholder="Search for products..." class="search-input" />
      </div>
	  <div class="nav-menu-icons">
        <img class="nav-menu-icon" src="${0, _cartSvgDefault.default}" alt="Cart" />
        <img class="nav-menu-icon" src="${0, _accountSvgDefault.default}" alt="Account" />
      </div>
  </div>
  </div>
  `;
}

},{"../assets/search.svg":"l7iaH","../assets/cart.svg":"33kZ2","../assets/account.svg":"9p8D3","../assets/arrow-icon.svg":"iTYND","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7iaH":[function(require,module,exports) {
module.exports = require("2433a06196bcbccc").getBundleURL("lPpKD") + "search.3e6fd713.svg" + "?" + Date.now();

},{"2433a06196bcbccc":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"33kZ2":[function(require,module,exports) {
module.exports = require("771914b242dafe78").getBundleURL("lPpKD") + "cart.69497530.svg" + "?" + Date.now();

},{"771914b242dafe78":"lgJ39"}],"9p8D3":[function(require,module,exports) {
module.exports = require("f26ee49aa079b826").getBundleURL("lPpKD") + "account.5c8a70e6.svg" + "?" + Date.now();

},{"f26ee49aa079b826":"lgJ39"}],"iTYND":[function(require,module,exports) {
module.exports = require("a68aa24fbfdb936d").getBundleURL("lPpKD") + "arrow-icon.b852da3b.svg" + "?" + Date.now();

},{"a68aa24fbfdb936d":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8pPOA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Footer);
var _twitterSvg = require("../assets/twitter.svg");
var _twitterSvgDefault = parcelHelpers.interopDefault(_twitterSvg);
var _facebookSvg = require("../assets/facebook.svg");
var _facebookSvgDefault = parcelHelpers.interopDefault(_facebookSvg);
var _instagramSvg = require("../assets/instagram.svg");
var _instagramSvgDefault = parcelHelpers.interopDefault(_instagramSvg);
var _githubSvg = require("../assets/github.svg");
var _githubSvgDefault = parcelHelpers.interopDefault(_githubSvg);
var _visaSvg = require("../assets/visa.svg");
var _visaSvgDefault = parcelHelpers.interopDefault(_visaSvg);
var _mastercardSvg = require("../assets/mastercard.svg");
var _mastercardSvgDefault = parcelHelpers.interopDefault(_mastercardSvg);
var _paypalSvg = require("../assets/paypal.svg");
var _paypalSvgDefault = parcelHelpers.interopDefault(_paypalSvg);
var _applePaySvg = require("../assets/apple-pay.svg");
var _applePaySvgDefault = parcelHelpers.interopDefault(_applePaySvg);
var _googlePaySvg = require("../assets/google-pay.svg");
var _googlePaySvgDefault = parcelHelpers.interopDefault(_googlePaySvg);
function Footer() {
    return `
    <footer class="footer">
      <div class="logo-down">SHOP.CO</div>
      <p class="slogan">
        We have clothes that suit your style and which you\u{2019}re proud to wear. From women to men.
      </p>
      <div class="socials">
        <img class="social" src="${0, _twitterSvgDefault.default}" alt="Twitter" />
        <img class="facebook" src="${0, _facebookSvgDefault.default}" width="28" alt="Facebook" />
        <img class="social" src="${0, _instagramSvgDefault.default}" alt="Instagram" />
        <img class="social" src="${0, _githubSvgDefault.default}" alt="GitHub" />
      </div>
      <div class="footer-sections">
        <div class="column">
          <div class="section">
            <h3>Company</h3>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div class="section">
            <h3>FAQ</h3>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Order</p>
            <p>Payment</p>
          </div>
        </div>
        <div class="column">
          <div class="section">
            <h3>Help</h3>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div class="section">
            <h3>Resources</h3>
            <p>Free eBook</p>
            <p>Development</p>
            <p>How to - Blog</p>
            <p>YouTube Playlist</p>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <p>Shop.co \xa9 2000-2023, All Rights Reserved</p>
        <img class="footer-icons" src="${0, _visaSvgDefault.default}" alt="Visa" />
        <img class="footer-icons" src="${0, _mastercardSvgDefault.default}" alt="MasterCard" />
        <img class="footer-icons" src="${0, _paypalSvgDefault.default}" alt="PayPal" />
        <img class="footer-icons" src="${0, _applePaySvgDefault.default}" alt="Apple Pay" />
        <img class="footer-icons" src="${0, _googlePaySvgDefault.default}" alt="Google Pay" />
      </div>
    </footer>
  `;
}

},{"../assets/twitter.svg":"dudrl","../assets/facebook.svg":"gPnWR","../assets/instagram.svg":"jc3ff","../assets/github.svg":"h2oPZ","../assets/visa.svg":"23u8k","../assets/mastercard.svg":"grKTd","../assets/paypal.svg":"hFAcI","../assets/apple-pay.svg":"Q8xQ2","../assets/google-pay.svg":"5iLWP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dudrl":[function(require,module,exports) {
module.exports = require("143a78290b138432").getBundleURL("lPpKD") + "twitter.0ec656a6.svg" + "?" + Date.now();

},{"143a78290b138432":"lgJ39"}],"gPnWR":[function(require,module,exports) {
module.exports = require("519a8b1859a551ce").getBundleURL("lPpKD") + "facebook.bab2b396.svg" + "?" + Date.now();

},{"519a8b1859a551ce":"lgJ39"}],"jc3ff":[function(require,module,exports) {
module.exports = require("f9c0aa2f5c0448d5").getBundleURL("lPpKD") + "instagram.f0a5136b.svg" + "?" + Date.now();

},{"f9c0aa2f5c0448d5":"lgJ39"}],"h2oPZ":[function(require,module,exports) {
module.exports = require("2a464adfef2551fd").getBundleURL("lPpKD") + "github.e3a182fb.svg" + "?" + Date.now();

},{"2a464adfef2551fd":"lgJ39"}],"23u8k":[function(require,module,exports) {
module.exports = require("a6abaa88a743078a").getBundleURL("lPpKD") + "visa.183c4d46.svg" + "?" + Date.now();

},{"a6abaa88a743078a":"lgJ39"}],"grKTd":[function(require,module,exports) {
module.exports = require("40aa402bddca99d8").getBundleURL("lPpKD") + "mastercard.8f2c6894.svg" + "?" + Date.now();

},{"40aa402bddca99d8":"lgJ39"}],"hFAcI":[function(require,module,exports) {
module.exports = require("93b2e29f1a753bcc").getBundleURL("lPpKD") + "paypal.78bb6f27.svg" + "?" + Date.now();

},{"93b2e29f1a753bcc":"lgJ39"}],"Q8xQ2":[function(require,module,exports) {
module.exports = require("23cd971db392ad1d").getBundleURL("lPpKD") + "apple-pay.b6a741e0.svg" + "?" + Date.now();

},{"23cd971db392ad1d":"lgJ39"}],"5iLWP":[function(require,module,exports) {
module.exports = require("e9cbb8576e0f9858").getBundleURL("lPpKD") + "google-pay.6788fded.svg" + "?" + Date.now();

},{"e9cbb8576e0f9858":"lgJ39"}],"l7a58":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>router);
var _homeJs = require("./pages/Home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
const routes = {
    "/": (0, _homeJsDefault.default)
};
function router() {
    const path = window.location.pathname;
    const page = routes[path] || (0, _homeJsDefault.default);
    document.getElementById("app").innerHTML = page();
}

},{"./pages/Home.js":"KEnRd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"KEnRd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Home);
var _searchSvg = require("../assets/search.svg");
var _searchSvgDefault = parcelHelpers.interopDefault(_searchSvg);
var _cartSvg = require("../assets/cart.svg");
var _cartSvgDefault = parcelHelpers.interopDefault(_cartSvg);
var _accountSvg = require("../assets/account.svg");
var _accountSvgDefault = parcelHelpers.interopDefault(_accountSvg);
var _trendyFashionableCouplePosingJpg = require("../assets/trendy-fashionable-couple-posing.jpg");
var _trendyFashionableCouplePosingJpgDefault = parcelHelpers.interopDefault(_trendyFashionableCouplePosingJpg);
var _starSvg = require("../assets/star.svg");
var _starSvgDefault = parcelHelpers.interopDefault(_starSvg);
var _versaceLogoSvg = require("../assets/versace_logo.svg");
var _versaceLogoSvgDefault = parcelHelpers.interopDefault(_versaceLogoSvg);
var _zaraLogoSvg = require("../assets/zara_logo.svg");
var _zaraLogoSvgDefault = parcelHelpers.interopDefault(_zaraLogoSvg);
var _gucciLogoSvg = require("../assets/gucci_logo.svg");
var _gucciLogoSvgDefault = parcelHelpers.interopDefault(_gucciLogoSvg);
var _pradaLogoPng = require("../assets/prada-logo.png");
var _pradaLogoPngDefault = parcelHelpers.interopDefault(_pradaLogoPng);
var _ckLogoSvg = require("../assets/ck_logo.svg");
var _ckLogoSvgDefault = parcelHelpers.interopDefault(_ckLogoSvg);
var _tshirtPreviewPng = require("../assets/tshirt-preview.png");
var _tshirtPreviewPngDefault = parcelHelpers.interopDefault(_tshirtPreviewPng);
var _skinPreviewPng = require("../assets/skin-preview.png");
var _skinPreviewPngDefault = parcelHelpers.interopDefault(_skinPreviewPng);
var _verticalPreviewPng = require("../assets/vertical-preview.png");
var _verticalPreviewPngDefault = parcelHelpers.interopDefault(_verticalPreviewPng);
var _couragePreviewPng = require("../assets/courage-preview.png");
var _couragePreviewPngDefault = parcelHelpers.interopDefault(_couragePreviewPng);
var _casualPreviewPng = require("../assets/casual_preview.png");
var _casualPreviewPngDefault = parcelHelpers.interopDefault(_casualPreviewPng);
var _formalPreviewPng = require("../assets/formal-preview.png");
var _formalPreviewPngDefault = parcelHelpers.interopDefault(_formalPreviewPng);
var _partyPreviewPng = require("../assets/party-preview.png");
var _partyPreviewPngDefault = parcelHelpers.interopDefault(_partyPreviewPng);
var _gymPreviewPng = require("../assets/gym-preview.png");
var _gymPreviewPngDefault = parcelHelpers.interopDefault(_gymPreviewPng);
var _prevArrowSvg = require("../assets/prev-arrow.svg");
var _prevArrowSvgDefault = parcelHelpers.interopDefault(_prevArrowSvg);
var _nextArrowSvg = require("../assets/next-arrow.svg");
var _nextArrowSvgDefault = parcelHelpers.interopDefault(_nextArrowSvg);
var _emailSvg = require("../assets/email.svg");
var _emailSvgDefault = parcelHelpers.interopDefault(_emailSvg);
function Home() {
    return `
    <!-- Hero Section -->
<section class="hero-section">
  <div class="content">
    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
    <p>
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of
      style.
    </p>
    <button class="shop-now-btn">Shop Now</button>
    <div class="highlights">
      <div class="highlight-row">
        <div class="highlight-item">
          <h2>200+</h2>
          <p>International Brands</p>
        </div>
        <div class="vertical-line"></div>
        <div class="highlight-item">
          <h2>2,000+</h2>
          <p>High-Quality Products</p>
        </div>
      </div>
      <div class="highlight-row-2">
        <div class="highlight-item">
          <h2>30,000+</h2>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Featured Image -->
  <section class="image-section">
    <img src="${0, _trendyFashionableCouplePosingJpgDefault.default}" alt="Couple wearing trendy clothes" class="featured-image" />
    <img src="${0, _starSvgDefault.default}" alt="Star 70" class="star-biggest" />
    <img src="${0, _starSvgDefault.default}" alt="Star 44" class="star-smallest" />
  </section>
</section>

<!-- Brand Logos -->
    <section class="section-logos">
      <div class="brand-logos">
        <img src="${0, _versaceLogoSvgDefault.default}" alt="Versace" />
        <img src="${0, _zaraLogoSvgDefault.default}" alt="Zara" />
        <img src="${0, _gucciLogoSvgDefault.default}" alt="Gucci" />
        <img src="${0, _pradaLogoPngDefault.default}" alt="Prada" />
        <img src="${0, _ckLogoSvgDefault.default}" alt="Calvin Klein" />
      </div>
    </section>

    <!-- New Arrivals Section -->
    <section class="new-arrivals">
      <h2>New Arrivals</h2>
      <div class="product-grid">
        <!-- Product Card -->
        <div class="product-card">
          <img src="${0, _tshirtPreviewPngDefault.default}" alt="T-shirt" />
          <div>T-shirt with Tape Details</div>
          <div class="rating">
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star-half" style="color: #FFD700;"></i>
          </div>
          <div>$120</div>
        </div>
        <div class="product-card">
          <img src="${0, _tshirtPreviewPngDefault.default}" alt="T-shirt" />
          <div>T-shirt with Tape Details</div>
          <div class="rating">
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star-half" style="color: #FFD700;"></i>
          </div>
          <div>$120</div>
        </div>
        <div class="product-card">
          <img src="${0, _skinPreviewPngDefault.default}" alt="Skin" />
          <div>Skin Fit Jeans</div>
          <div class="rating">
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star-half" style="color: #FFD700;"></i>
          </div>
          <div>$240 <span class="old-price">$260</span></div>
        </div>

        <div class="product-card">
          <img src="${0, _skinPreviewPngDefault.default}" alt="Skin" />
          <div>Skin Fit Jeans</div>
          <div class="rating">
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star-half" style="color: #FFD700;"></i>
          </div>
          <div>$240 <span class="old-price">$260</span></div>
        </div>
        <!-- Add more products here -->
      </div>
      <button class="view-all-btn">View All</button>
    </section>

    <!-- Top Selling Section -->
    <section class="top-selling">
      <h2>Top Selling</h2>
      <div class="product-grid">
        <!-- Product Card -->
        <div class="product-card">
          <img src="${0, _verticalPreviewPngDefault.default}" alt="Vertical Striped Shirt" />
          <div>Vertical Striped Shirt</div>
          <div>$212 <span class="old-price">$235</span></div>
          <div>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
          </div>
        </div>
        <div class="product-card">
          <img src="${0, _verticalPreviewPngDefault.default}" alt="Vertical Striped Shirt" />
          <div>Vertical Striped Shirt</div>
          <div>$212 <span class="old-price">$235</span></div>
          <div>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
          </div>
        </div>
        <div class="product-card">
          <img src="${0, _couragePreviewPngDefault.default}" alt="Courage Graphic T-shirt" />
          <div>Courage Graphic T-shirt</div>
          <div>$145</div>
          <div>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
          </div>
        </div>
        <div class="product-card">
          <img src="${0, _couragePreviewPngDefault.default}" alt="Courage Graphic T-shirt" />
          <div>Courage Graphic T-shirt</div>
          <div>$145</div>
          <div>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
            <i class="fas fa-star" style="color: #FFD700;"></i>
          </div>
        </div>
        <!-- Add more products here -->
      </div>
      <button class="view-all-btn">View All</button>
    </section>

    <!-- Browse by Dress Style -->
    <div class="container">
      <div class="header">BROWSE BY DRESS STYLE</div>

       <div class="category-wrapper">
      <div class="category">
        <div class="category-title">Casual</div>
        <img src="${0, _casualPreviewPngDefault.default}" alt="Casual" class="category-image">
      </div>
      <div class="category">
        <div class="category-title">Formal</div>
        <img src="${0, _formalPreviewPngDefault.default}" alt="Formal" class="category-image">
      </div>
      <div class="category">
        <div class="category-title">Party</div>
        <img src="${0, _partyPreviewPngDefault.default}" alt="Party" class="category-image">
      </div>
      <div class="category">
        <div class="category-title">Gym</div>
        <img src="${0, _gymPreviewPngDefault.default}" alt="Gym" class="category-image">
      </div>
    </div>

    <!-- Testimonials Section -->
    <section>
      <div class="carousel" aria-label="Testimonial Carousel">
       <div class="carousel-header">
          <h2 class="carousel-title">Our Happy Customers</h2>
          <div class="carousel-nav">
            <img id="prevBtn" class="nav-arrow" aria-label="Previous" src="${0, _prevArrowSvgDefault.default}" alt="Previous">
            <img id="nextBtn" class="nav-arrow" aria-label="Next" src="${0, _nextArrowSvgDefault.default}" alt="Next">
          </div>
        </div>
      </div>
      <div class="carousel-content">
      <div class="carousel-item" aria-label="Testimonial 1">
            <div class="testimonial-box">
              <div>
                <i class="fas fa-star" style="color: #FFD700;"></i>
                <i class="fas fa-star" style="color: #FFD700;"></i>
                <i class="fas fa-star" style="color: #FFD700;"></i>
                <i class="fas fa-star" style="color: #FFD700;"></i>
                <i class="fas fa-star" style="color: #FFD700;"></i>
              </div>
              <div class="person-info">
                <span class="person-name">Sarah M.</span>
                <span class="check-icon" aria-hidden="true">\u{2714}</span>
              </div>
              <p class="testimonial-text">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\u{201D}</p>
            </div>
          </div>
          <div id="testimonial-2" class="carousel-item" aria-label="Testimonial 2">
                <div class="testimonial-box">
                  <div><i class="fas fa-star" style="color: #FFD700;"></i>
                    <i class="fas fa-star" style="color: #FFD700;"></i>
                    <i class="fas fa-star" style="color: #FFD700;"></i>
                    <i class="fas fa-star" style="color: #FFD700;"></i>
                    <i class="fas fa-star" style="color: #FFD700;"></i>
                  </div>
                    <div class="person-info">
                        <span class="person-name">Alex K.</span>
                        <span class="check-icon" aria-hidden="true">\u{2713}</span>
                    </div>
                    <p class="testimonial-text">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.\u{201D}</p>
                </div>
            </div>
            <div id="testimonial-3" class="carousel-item" aria-label="Testimonial 3">
                <div class="testimonial-box">
                  <div><i class="fas fa-star" style="color: #FFD700;"></i>
                    <i class="fas fa-star" style="color: #FFD700;"></i>
                    <i class="fas fa-star" style="color: #FFD700;"></i>
                    <i class="fas fa-star" style="color: #FFD700;"></i>
                    <i class="fas fa-star" style="color: #FFD700;"></i>
                  </div>
                    <div class="person-info">
                        <span class="person-name">James L.</span>
                        <span class="check-icon" aria-hidden="true">\u{2713}</span>
                    </div>
                    <p class="testimonial-text">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.\u{201D}</p>
                </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Sign-Up -->
    <section class="newsletter">
      <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
      <div class="email-input-container">
      <div>
        <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <span>&#9993;</span> 
          </div>
      </div>
      <button class="subscribe-btn">Subscribe to Newsletter</button>
    </section>

  `;
}

},{"../assets/search.svg":"l7iaH","../assets/cart.svg":"33kZ2","../assets/account.svg":"9p8D3","../assets/trendy-fashionable-couple-posing.jpg":"fsRe7","../assets/star.svg":"arRD3","../assets/versace_logo.svg":"35hoG","../assets/zara_logo.svg":"hI7Xf","../assets/gucci_logo.svg":"ec7gp","../assets/prada-logo.png":"aGocd","../assets/ck_logo.svg":"bP5cB","../assets/tshirt-preview.png":"ksQAl","../assets/skin-preview.png":"lCDEY","../assets/vertical-preview.png":"8qxOx","../assets/courage-preview.png":"4DCSr","../assets/casual_preview.png":"d8dfZ","../assets/formal-preview.png":"5pGFr","../assets/party-preview.png":"8vTpp","../assets/gym-preview.png":"l1bnO","../assets/prev-arrow.svg":"ayBeg","../assets/next-arrow.svg":"9K0pd","../assets/email.svg":"6GL6I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsRe7":[function(require,module,exports) {
module.exports = require("a8b6aa81f9eca889").getBundleURL("lPpKD") + "trendy-fashionable-couple-posing.012bc1e2.jpg" + "?" + Date.now();

},{"a8b6aa81f9eca889":"lgJ39"}],"arRD3":[function(require,module,exports) {
module.exports = require("159e4e5d2ac71599").getBundleURL("lPpKD") + "star.92d5e504.svg" + "?" + Date.now();

},{"159e4e5d2ac71599":"lgJ39"}],"35hoG":[function(require,module,exports) {
module.exports = require("2e774bef7789b7fa").getBundleURL("lPpKD") + "versace_logo.16d40969.svg" + "?" + Date.now();

},{"2e774bef7789b7fa":"lgJ39"}],"hI7Xf":[function(require,module,exports) {
module.exports = require("678bb702992cc808").getBundleURL("lPpKD") + "zara_logo.4a012dae.svg" + "?" + Date.now();

},{"678bb702992cc808":"lgJ39"}],"ec7gp":[function(require,module,exports) {
module.exports = require("1eae6e42e20b47fe").getBundleURL("lPpKD") + "gucci_logo.cbf8d425.svg" + "?" + Date.now();

},{"1eae6e42e20b47fe":"lgJ39"}],"aGocd":[function(require,module,exports) {
module.exports = require("66ff9d17ea3875e8").getBundleURL("lPpKD") + "prada-logo.e2adcd3b.png" + "?" + Date.now();

},{"66ff9d17ea3875e8":"lgJ39"}],"bP5cB":[function(require,module,exports) {
module.exports = require("dd5fb24fcd71e584").getBundleURL("lPpKD") + "ck_logo.86273486.svg" + "?" + Date.now();

},{"dd5fb24fcd71e584":"lgJ39"}],"ksQAl":[function(require,module,exports) {
module.exports = require("d1a5c9f0211c3db9").getBundleURL("lPpKD") + "tshirt-preview.4f1385a3.png" + "?" + Date.now();

},{"d1a5c9f0211c3db9":"lgJ39"}],"lCDEY":[function(require,module,exports) {
module.exports = require("8ed557f48b733ff3").getBundleURL("lPpKD") + "skin-preview.36315c52.png" + "?" + Date.now();

},{"8ed557f48b733ff3":"lgJ39"}],"8qxOx":[function(require,module,exports) {
module.exports = require("22c26e6fdb920565").getBundleURL("lPpKD") + "vertical-preview.864c6d48.png" + "?" + Date.now();

},{"22c26e6fdb920565":"lgJ39"}],"4DCSr":[function(require,module,exports) {
module.exports = require("716d7d29f2d8781").getBundleURL("lPpKD") + "courage-preview.c834c5f9.png" + "?" + Date.now();

},{"716d7d29f2d8781":"lgJ39"}],"d8dfZ":[function(require,module,exports) {
module.exports = require("42acf1c08b18b44a").getBundleURL("lPpKD") + "casual_preview.eef08b2b.png" + "?" + Date.now();

},{"42acf1c08b18b44a":"lgJ39"}],"5pGFr":[function(require,module,exports) {
module.exports = require("9e54ffffb26d7314").getBundleURL("lPpKD") + "formal-preview.2a7778d6.png" + "?" + Date.now();

},{"9e54ffffb26d7314":"lgJ39"}],"8vTpp":[function(require,module,exports) {
module.exports = require("32a1e21e13b4bd67").getBundleURL("lPpKD") + "party-preview.46e00ceb.png" + "?" + Date.now();

},{"32a1e21e13b4bd67":"lgJ39"}],"l1bnO":[function(require,module,exports) {
module.exports = require("c9511ea07c8c027b").getBundleURL("lPpKD") + "gym-preview.2f5ed52c.png" + "?" + Date.now();

},{"c9511ea07c8c027b":"lgJ39"}],"ayBeg":[function(require,module,exports) {
module.exports = require("7e20a87e6148db35").getBundleURL("lPpKD") + "prev-arrow.1444b0da.svg" + "?" + Date.now();

},{"7e20a87e6148db35":"lgJ39"}],"9K0pd":[function(require,module,exports) {
module.exports = require("b9160412ff7e3021").getBundleURL("lPpKD") + "next-arrow.f2b9267e.svg" + "?" + Date.now();

},{"b9160412ff7e3021":"lgJ39"}],"6GL6I":[function(require,module,exports) {
module.exports = require("4c4057072a0be33d").getBundleURL("lPpKD") + "email.266f53e2.svg" + "?" + Date.now();

},{"4c4057072a0be33d":"lgJ39"}],"he3wz":[function() {},{}],"clPKd":[function() {},{}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
