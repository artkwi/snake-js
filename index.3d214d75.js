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
})({"awEvQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GAME_SIZE", ()=>GAME_SIZE);
parcelHelpers.export(exports, "GAME_SPEED", ()=>GAME_SPEED);
parcelHelpers.export(exports, "isGameStarted", ()=>isGameStarted);
parcelHelpers.export(exports, "gameIntervelId", ()=>gameIntervelId);
var _drawJs = require("./draw.js");
var _endGameJs = require("./endGame.js");
var _foodJs = require("./food.js");
var _snakeJs = require("./snake.js");
var _musicJs = require("/music.js");
var _keysJs = require("./keys.js");
const GAME_SIZE = 11;
const GAME_SPEED = 2;
let isGameStarted = false;
const main = ()=>{
    update();
    (0, _drawJs.draw)();
    isGameStarted = true;
};
const gameIntervelId = window.setInterval(main, 1000 / GAME_SPEED);
const update = ()=>{
    (0, _snakeJs.update)();
    (0, _foodJs.update)();
    (0, _endGameJs.checkForDeath)();
};

},{"./draw.js":"gw9Xc","./endGame.js":"jcHq4","./food.js":"kUEI1","./snake.js":"e1hRg","/music.js":"RlTrm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./keys.js":"AakGV"}],"gw9Xc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "draw", ()=>draw);
var _snakeJs = require("./snake.js");
var _foodJs = require("./food.js");
var _indexJs = require("./index.js");
var _pointsJs = require("./points.js");
var _obstaclesJs = require("./obstacles.js");
const drawElement = (position, className)=>{
    if (position) {
        const { x , y  } = position;
        const bodyElements = document.getElementsByClassName(`board-element-${x}-${y}`);
        bodyElements[0].classList.add(className);
    }
};
const drawObstacles = ()=>{
    const obstacles = (0, _obstaclesJs.Obstacles).getObstacles();
    obstacles.map(({ x , y  }, i)=>{
        const boardElements = document.getElementsByClassName(`board-element-${x}-${y}`);
        if (boardElements.length) boardElements?.[0].classList?.add("obstacle");
    });
};
const initialBoardDraw = ()=>{
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
    gameBoard.style.gridTemplateColumns = `repeat(${0, _indexJs.GAME_SIZE}, 1fr)`;
    gameBoard.style.gridTemplateRows = `repeat(${0, _indexJs.GAME_SIZE}, 1fr)`;
    for(let i = 0; i < (0, _indexJs.GAME_SIZE); i++)for(let j = 0; j < (0, _indexJs.GAME_SIZE); j++){
        const boardElement = document.createElement("div");
        boardElement.classList.add("board-element", `board-element-${i}-${j}`);
        gameBoard.appendChild(boardElement);
    }
};
const laterBoardDraw = ()=>{
    for(let i = 0; i < (0, _indexJs.GAME_SIZE); i++)for(let j = 0; j < (0, _indexJs.GAME_SIZE); j++){
        const boardElement = document.getElementsByClassName(`board-element-${i}-${j}`);
        boardElement[0].classList.remove(`body-segment`, `food-segment`, `food-segment--extra`, `body-segment--head`);
    }
};
const draw = ()=>{
    if (!(0, _indexJs.isGameStarted)) initialBoardDraw();
    else laterBoardDraw();
    // wynik
    const x = document.getElementById("x");
    const y = document.getElementById("y");
    const pointsEl = document.getElementById("points");
    if (x && y) {
        x.textContent = (0, _snakeJs.getSnakePosition)()[0].x;
        y.textContent = (0, _snakeJs.getSnakePosition)()[0].y;
    }
    pointsEl.textContent = (0, _pointsJs.Points).getPoints();
    // end wynik
    (0, _snakeJs.getSnakePosition)().map(({ x , y  }, i)=>{
        const bodyElements = document.getElementsByClassName(`board-element-${x}-${y}`);
        if (bodyElements.length) {
            if (i === 0) bodyElements?.[0].classList?.add("body-segment--head");
            bodyElements?.[0].classList?.add("body-segment");
        }
    });
    drawElement((0, _foodJs.getFoodPosition)(), "food-segment");
    drawElement((0, _foodJs.getExtraFoodPosition)(), "food-segment--extra");
    drawObstacles();
};

},{"./snake.js":"e1hRg","./food.js":"kUEI1","./index.js":"bB7Pu","./points.js":"gjsrg","./obstacles.js":"b87Cs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1hRg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSnakePosition", ()=>getSnakePosition);
parcelHelpers.export(exports, "setSnakePosition", ()=>setSnakePosition);
parcelHelpers.export(exports, "update", ()=>update);
parcelHelpers.export(exports, "onSnake", ()=>onSnake);
parcelHelpers.export(exports, "expandSnake", ()=>expandSnake);
var _foodJs = require("./food.js");
var _inputJs = require("./input.js");
let snakePosition = [
    {
        x: 10,
        y: 10
    },
    {
        x: 11,
        y: 10
    },
    {
        x: 12,
        y: 10
    }, 
];
const getSnakePosition = ()=>snakePosition;
const setSnakePosition = (newSnakePosition)=>snakePosition = [
        ...newSnakePosition
    ];
const update = ()=>{
    let currentSnakePosition = [
        ...getSnakePosition()
    ];
    const inputDirection = (0, _inputJs.getInputDirection)();
    for(let i = currentSnakePosition.length - 2; i >= 0; i--)currentSnakePosition[i + 1] = {
        ...currentSnakePosition[i]
    };
    currentSnakePosition = currentSnakePosition.slice(1);
    const newHeadPosition = {
        x: currentSnakePosition[0].x + inputDirection.x,
        y: currentSnakePosition[0].y + inputDirection.y
    };
    setSnakePosition([
        newHeadPosition,
        ...currentSnakePosition
    ]);
};
const onSnake = (element, options)=>{
    if (!element) return false;
    const snakePosition = options?.withoutHead ? [
        ...getSnakePosition()
    ].slice(1) : getSnakePosition();
    if (snakePosition.some((segment)=>segment.x === element.x && segment.y === element.y)) return true;
    return false;
};
const expandSnake = ()=>{
    const snakePosition = getSnakePosition();
    snakePosition[snakePosition.length] = snakePosition[snakePosition.length - 1];
    setSnakePosition(snakePosition);
};

},{"./food.js":"kUEI1","./input.js":"kjUbp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUEI1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFoodPosition", ()=>getFoodPosition);
parcelHelpers.export(exports, "getExtraFoodPosition", ()=>getExtraFoodPosition);
parcelHelpers.export(exports, "setFoodPosition", ()=>setFoodPosition);
parcelHelpers.export(exports, "setExtraFoodPosition", ()=>setExtraFoodPosition);
parcelHelpers.export(exports, "removeExtraFoodPosition", ()=>removeExtraFoodPosition);
parcelHelpers.export(exports, "update", ()=>update);
var _indexJs = require("./index.js");
var _obstaclesJs = require("./obstacles.js");
var _pointsJs = require("./points.js");
var _snakeJs = require("./snake.js");
let foodPosition = {
    x: 7,
    y: 8
};
let extraFoodPosition = {
    x: 5,
    y: 6
};
const getFoodPosition = ()=>foodPosition;
const getExtraFoodPosition = ()=>extraFoodPosition;
const setFoodPosition = (newFoodPosition)=>foodPosition = {
        ...newFoodPosition
    };
const setExtraFoodPosition = (newFoodPosition)=>extraFoodPosition = {
        ...newFoodPosition
    };
const removeExtraFoodPosition = ()=>extraFoodPosition = null;
const update = ()=>{
    if ((0, _snakeJs.onSnake)(getFoodPosition())) {
        (0, _pointsJs.Points).setPoints((0, _pointsJs.Points).getPoints() + (0, _indexJs.GAME_SPEED));
        (0, _snakeJs.expandSnake)();
        respawnFood();
        if (shouldRespawnExtraFood()) respawnExtraFood();
    } else if ((0, _snakeJs.onSnake)(getExtraFoodPosition())) {
        (0, _pointsJs.Points).setPoints((0, _pointsJs.Points).getPoints() + 4 * (0, _indexJs.GAME_SPEED));
        (0, _snakeJs.expandSnake)();
        removeExtraFoodPosition();
    }
};
const respawnFood = ()=>{
    let newFoodPosition = null;
    while(newFoodPosition === null || (0, _snakeJs.onSnake)(newFoodPosition) || (0, _obstaclesJs.Obstacles).onObstacle(newFoodPosition)){
        const x = Math.floor(Math.random() * (0, _indexJs.GAME_SIZE));
        const y = Math.floor(Math.random() * (0, _indexJs.GAME_SIZE));
        newFoodPosition = {
            x,
            y
        };
    }
    setFoodPosition(newFoodPosition);
};
const shouldRespawnExtraFood = ()=>{
    if (getExtraFoodPosition()) return false;
    const POSSIBILITIES = 3;
    const randomNumber = Math.floor(Math.random() * (POSSIBILITIES - 1));
    return randomNumber % POSSIBILITIES === 0;
};
const respawnExtraFood = ()=>{
    let newExtraFoodPosition = null;
    while(newExtraFoodPosition === null || (0, _snakeJs.onSnake)(newExtraFoodPosition) || (0, _obstaclesJs.Obstacles).onObstacle(newExtraFoodPosition)){
        const x = Math.floor(Math.random() * (0, _indexJs.GAME_SIZE));
        const y = Math.floor(Math.random() * (0, _indexJs.GAME_SIZE));
        newExtraFoodPosition = {
            x,
            y
        };
    }
    setExtraFoodPosition(newExtraFoodPosition);
};

},{"./index.js":"bB7Pu","./obstacles.js":"b87Cs","./points.js":"gjsrg","./snake.js":"e1hRg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b87Cs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Obstacles", ()=>Obstacles);
let obstaclePositions = [
    {
        x: 2,
        y: 3
    },
    {
        x: 2,
        y: 4
    },
    {
        x: 2,
        y: 5
    }, 
];
class Obstacles {
    static #obstacles = obstaclePositions;
    static getObstacles() {
        return this.#obstacles;
    }
    static setObstacles(obstacles) {
        this.#obstacles = obstacles;
    }
    static onObstacle = (element)=>{
        const obstaclesPosition = this.getObstacles();
        if (obstaclesPosition.some((segment)=>segment.x === element.x && segment.y === element.y)) return true;
        return false;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"gjsrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Points", ()=>Points);
class Points {
    static points = 0;
    static getPoints() {
        return this.points;
    }
    static setPoints(points) {
        this.points = points;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kjUbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inputDirection", ()=>inputDirection);
parcelHelpers.export(exports, "getInputDirection", ()=>getInputDirection);
var _snakeJs = require("./snake.js");
let inputDirection = {
    x: -1,
    y: 0
};
const setDirection = (key)=>{
    switch(key){
        case "ArrowLeft":
            if (getInputDirection().y === 0) inputDirection = {
                x: 0,
                y: -1
            };
            break;
        case "ArrowRight":
            if (getInputDirection().y === 0) inputDirection = {
                x: 0,
                y: 1
            };
            break;
        case "ArrowUp":
            if (getInputDirection().x === 0) inputDirection = {
                x: -1,
                y: 0
            };
            break;
        case "ArrowDown":
            if (getInputDirection().x === 0) inputDirection = {
                x: 1,
                y: 0
            };
            break;
        default:
            break;
    }
};
document.addEventListener("keydown", (e)=>{
    const key = e.key;
    setDirection(key);
});
const getInputDirection = ()=>inputDirection;
addEventListener("click", (e)=>{
    const keyNumber = e.target.getAttribute("data-key");
    let keyName = null;
    if (keyNumber) {
        switch(Number(keyNumber)){
            case 37:
                keyName = "ArrowLeft";
                break;
            case 39:
                keyName = "ArrowRight";
                break;
            case 38:
                keyName = "ArrowUp";
                break;
            case 40:
                keyName = "ArrowDown";
                break;
            default:
                break;
        }
        if (keyName) setDirection(keyName);
    }
});

},{"./snake.js":"e1hRg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcHq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkForDeath", ()=>checkForDeath);
var _indexJs = require("./index.js");
var _obstaclesJs = require("./obstacles.js");
var _snakeJs = require("./snake.js");
const restartGame = ()=>{
    clearInterval((0, _indexJs.gameIntervelId));
    window.location.reload();
};
const checkForDeath = ()=>{
    const snakePosition = (0, _snakeJs.getSnakePosition)();
    const isHeadIsOnBody = (0, _snakeJs.onSnake)(snakePosition[0], {
        withoutHead: true
    });
    const isHeadOnObstacle = (0, _obstaclesJs.Obstacles).onObstacle(snakePosition[0], {
        withoutHead: true
    });
    const isSnakeOutsideGame = snakePosition[0].x < 0 || snakePosition[0].y < 0 || snakePosition[0].x >= (0, _indexJs.GAME_SIZE) || snakePosition[0].y >= (0, _indexJs.GAME_SIZE);
    if (isHeadIsOnBody || isSnakeOutsideGame || isHeadOnObstacle) confirm("Koniec gry.", restartGame());
};

},{"./index.js":"bB7Pu","./obstacles.js":"b87Cs","./snake.js":"e1hRg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"RlTrm":[function(require,module,exports) {
const playButtonMusic = document.getElementById("play-music-button");
const playerElement = document.getElementById("player");
playButtonMusic.addEventListener("click", (e)=>{
    if (playerElement.paused) {
        playerElement.play();
        playButtonMusic.textContent = "Pause music";
    } else {
        playerElement.pause();
        playButtonMusic.textContent = "Play music";
    }
});

},{}],"AakGV":[function(require,module,exports) {
window.addEventListener("keyup", arrowUp);
window.addEventListener("keydown", arrowDown);
function arrowDown(e) {
    const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
    key.classList.add("press");
}
function arrowUp(e) {
    const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
    key.classList.remove("press");
}

},{}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequire4e7e")

//# sourceMappingURL=index.3d214d75.js.map
