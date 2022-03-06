// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iFKsS":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "9bc412e70f41df0b";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"kvs7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vue", ()=>Vue
);
var _observer = require("./observer");
var _compiler = require("./compiler");
function Vue(options) {
    this._init(options);
}
// 源码通过Mixin将模块区分，将各个模块功能插入Vue.prototype上。
// 在此省略Mixin,直接写方法,我们不做抽象。我们只需知道这个设计思路，应用到项目上就可以了。
let uid = 0;
Vue.prototype._init = function(options) {
    let vm = this;
    vm._uid = uid++;
    vm._self = vm;
    this.data = options?.data;
    this.methods = options?.methods;
    // 绑定属性代理，让我们通过this.xx获取数据，而不是this.data.xx
    // Object.keys(this.data).forEach((key) => {
    //   this.proxyKeys(key);
    // });
    // 各种init模块:Lifecycle、State、Event等等，我们先忽略抽象。
    // 监听者监听data的变化
    _observer.observe(this.data);
    // 解析DOM节点
    new _compiler.Compiler(options, vm);
};
Vue.prototype.proxyKeys = (key)=>{
    Object.defineProperty(undefined, key, {
        enumerable: true,
        configurable: true,
        get: function proxyGetter() {
            return this.data[key];
        },
        set: function proxySetter(newVal) {
            this.data[key] = newVal;
        }
    });
};

},{"./observer":"3yOX5","./compiler":"ftugE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3yOX5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Observer类
parcelHelpers.export(exports, "Observer", ()=>Observer
);
// 创建Observer对象的工厂方法
parcelHelpers.export(exports, "observe", ()=>observe
);
// 使数据变成可反应式
parcelHelpers.export(exports, "defineReactive", ()=>defineReactive
);
var _dep = require("./dep");
var _index = require("../utils/index");
class Observer {
    constructor(value){
        this.value = value;
        // TODO:源码中这里有个特殊逻辑，如果是数组会对Array方法进行改造，observerArray()，否则才会走walk。
        // 此处暂且忽略，以后补上。
        this.walk(this.value);
    }
    // 递归子属性数据劫持
    walk(obj) {
        Object.keys(obj).forEach((key)=>{
            defineReactive(obj, key, obj[key]);
        });
    }
}
function observe(value1, asRootData) {
    if (!_index.isObject(value1)) return;
    let ob;
    //   如果已经创建过observer 直接获取
    if (_index.hasOwn(value1, "__ob__") && value1.__ob__ instanceof Observer) ob = value1.__ob__;
    else ob = new Observer(value1);
    return ob;
}
function defineReactive(obj, key, value1) {
    // 数据劫持、watcher加入Dep、变更通知dep
    const dep = new _dep.Dep();
    // 递归子属性进行数据劫持
    observe(value1);
    // 数据劫持当前属性
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            // watcher加入Dep
            if (_dep.Dep.target) dep.addSub(_dep.Dep.target);
            return value1;
        },
        set: function reactiveSetter(newVal) {
            if (value1 === newVal) return;
            console.log(key, value1, "Value Change");
            value1 = newVal;
            // 变化通知dep
            dep.notify();
        }
    });
}

},{"./dep":"8Wc9z","../utils/index":"4sWAt","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8Wc9z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dep", ()=>Dep
);
var _utils = require("../utils");
let uid = 0; //用于dep技数的
class Dep {
    constructor(){
        this.id = uid++;
        this.subs = [];
    }
    // 增加订阅者
    addSub(sub) {
        this.subs.push(sub);
    }
    // 移除订阅者
    removeSub(sub) {
        _utils.remove(this.subs, sub);
    }
    // 通知
    notify() {
        console.log(this.subs, "subs");
        for(let i = 0; i < this.subs.length; i++)this.subs[i].update();
    }
}
Dep.target = null;

},{"../utils":"4sWAt","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4sWAt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn
);
parcelHelpers.export(exports, "remove", ()=>remove
);
function isObject(value) {
    return value !== null && typeof value === "object";
}
function hasOwn(value, key) {
    return Object.prototype.hasOwnProperty.call(value, key);
}
function remove(array, item) {
    if (array.length) {
        const index = array.indexOf(item);
        if (index > -1) array.splice(index, 1);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"ftugE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// TODO:研究Compiler源码细致的编译原理
parcelHelpers.export(exports, "Compiler", ()=>Compiler
);
var _watcher = require("./watcher");
var _watcherDefault = parcelHelpers.interopDefault(_watcher);
// 解析匹配正则
// {{}}
const braceReg = /\{\{(.*)\}\}/;
class Compiler {
    constructor(options, vm1){
        this.options = options;
        this.vm = vm1;
        // el可以为选择器或DOM元素
        const el1 = options.el instanceof HTMLElement ? options.el : document.querySelector(options.el);
        // 解析el
        this.compilerElement(el1);
    }
    compilerElement(el) {
        // TODO:是否需要避免回流，如何实现
        const childNodes = el.childNodes;
        // TODO:广度、深度深入了解，这里采用的是广度.
        [].slice.call(childNodes).forEach((node)=>{
            const text = node.textContent;
            const value = node.value;
            if (isElementNode(node)) this.compile(node);
            else if (isTextNode(node) && braceReg.test(text)) // 如果text节点满足{{}}
            this.compilerText(node, braceReg.exec(text)[1].trim());
            if (node.childNodes && node.childNodes.length) // 遍历子节点
            this.compilerElement(node);
        });
    }
    compile(node) {
        let nodeAttrs = node.attributes;
        Array.prototype.forEach.call(nodeAttrs, (attr)=>{
            let attrName = attr.name;
            let text = attr.textContent;
            if (this.isDirective(attrName)) {
                let exp = attr.value;
                let dir = attrName.substring(2);
                if (this.isEventDirective(dir)) this.compileEvent(node, this.vm, exp, dir);
                else if (this.isModelDirective(dir)) this.compileModel(node, this.vm, exp, dir);
                else if (this.isBindDirective(dir)) this.compileBind(node, this.vm, exp, dir);
            }
        });
    }
    // 解析带{{}}的Text节点
    compilerText(node, exp) {
        let data = this.vm.data[exp]; // 获取替代{{}}的数据
        this.updateText(node, data); // 更新视图
        // 创建订阅者绑定更新函数
        new _watcherDefault.default(this.vm, exp, (value)=>{
            this.updateText(node, value);
        });
    }
    compileEvent(node, vm, exp, dir) {
        const eventType = dir.split(":")[1];
        const cb = vm.methods && vm.methods[exp];
        if (eventType && cb) // 给Dom元素绑定事件回调
        node.addEventListener(eventType, cb.bind(vm), false);
    }
    compileModel(node, vm, exp, dir) {
        let val = vm.data[exp];
        this.updateModel(node, val);
        // 订阅者
        new _watcherDefault.default(vm, exp, (value)=>{
            this.updateModel(node, value);
        });
        // 添加事件回调
        node.addEventListener("input", (e)=>{
            let newVal = e.target.value;
            if (val === newVal) return;
            this.vm.data[exp] = newVal;
            val = newVal;
        });
    }
    compileBind(node, vm, exp, dir) {
        let valueName = dir.split(":")[1];
        let val = vm.data[exp];
        this.updateBind(node, valueName, val);
        // 订阅者
        new _watcherDefault.default(vm, exp, (value)=>{
            this.updateBind(node, valueName, value);
        });
    }
    updateText(node, data) {
        node.textContent = typeof data === "undefined" ? "" : data;
    }
    updateModel(node, data) {
        node.value = typeof data === "undefined" ? "" : data;
    }
    updateBind(node, valueName, data) {
        node[valueName] = typeof data === "undefined" ? "" : data;
    }
    isDirective(name) {
        return name.indexOf("v-") === 0;
    }
    isEventDirective(name) {
        return name.indexOf("on:") === 0;
    }
    isModelDirective(name) {
        return name.indexOf("model") === 0;
    }
    isBindDirective(name) {
        return name.indexOf("bind:") === 0;
    }
}
// 判断是否为Text节点
function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
}
// 判断为DOM其他节点
function isElementNode(node) {
    return node.nodeType === 1;
}

},{"./watcher":"fdqpg","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fdqpg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Watcher
);
var _dep = require("./dep");
class Watcher {
    // 初始化时将自身加入Dep中
    constructor(vm, exp, cb){
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.value = this.get(); //强行调用get，将自身加入Dep中
    }
    // 更新函数
    update() {
        this.run();
    }
    run() {
        //最新值
        let value = this.vm.data[this.exp];
        //旧值
        let oldVal = this.value;
        if (value !== oldVal) {
            //更新旧值
            this.value = value;
            // 执行更新函数
            this.cb.call(this.vm, value, oldVal);
        }
    }
    get() {
        _dep.Dep.target = this;
        const value = this.vm.data[this.exp];
        _dep.Dep.target = null;
        return value;
    }
}

},{"./dep":"8Wc9z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["iFKsS","kvs7N"], "kvs7N", "parcelRequire94c2")

//# sourceMappingURL=index.0f41df0b.js.map
