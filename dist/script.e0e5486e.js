// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../../.nvm/versions/node/v7.2.0/lib/node_modules/parcel-bundler/lib/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../.nvm/versions/node/v7.2.0/lib/node_modules/parcel-bundler/lib/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../.nvm/versions/node/v7.2.0/lib/node_modules/parcel-bundler/lib/builtins/bundle-url.js"}],"sass/style.scss":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../assets/fonts/ss-pika/webfonts/ss-pika.woff":[["ss-pika.1929865a.woff","assets/fonts/ss-pika/webfonts/ss-pika.woff"],"assets/fonts/ss-pika/webfonts/ss-pika.woff"],"./../assets/fonts/ss-pika/webfonts/ss-pika.ttf":[["ss-pika.532b09b1.ttf","assets/fonts/ss-pika/webfonts/ss-pika.ttf"],"assets/fonts/ss-pika/webfonts/ss-pika.ttf"],"./../assets/fonts/ss-pika/webfonts/ss-pika.svg":[["ss-pika.a8665590.svg","assets/fonts/ss-pika/webfonts/ss-pika.svg"],"assets/fonts/ss-pika/webfonts/ss-pika.svg"],"./../assets/fonts/open-sans/OpenSans-Regular.ttf":[["OpenSans-Regular.c6763146.ttf","assets/fonts/open-sans/OpenSans-Regular.ttf"],"assets/fonts/open-sans/OpenSans-Regular.ttf"],"./../assets/fonts/open-sans/OpenSans-Light.ttf":[["OpenSans-Light.b04b6148.ttf","assets/fonts/open-sans/OpenSans-Light.ttf"],"assets/fonts/open-sans/OpenSans-Light.ttf"],"./../assets/fonts/open-sans/OpenSans-Semibold.ttf":[["OpenSans-Semibold.385c3601.ttf","assets/fonts/open-sans/OpenSans-Semibold.ttf"],"assets/fonts/open-sans/OpenSans-Semibold.ttf"],"./../assets/fonts/open-sans/OpenSans-Bold.ttf":[["OpenSans-Bold.aa3c9b95.ttf","assets/fonts/open-sans/OpenSans-Bold.ttf"],"assets/fonts/open-sans/OpenSans-Bold.ttf"],"./../assets/fonts/open-sans/OpenSans-ExtraBold.ttf":[["OpenSans-ExtraBold.8f5df1a7.ttf","assets/fonts/open-sans/OpenSans-ExtraBold.ttf"],"assets/fonts/open-sans/OpenSans-ExtraBold.ttf"],"./../assets/fonts/open-sans/OpenSans-Italic.ttf":[["OpenSans-Italic.2c66fb5b.ttf","assets/fonts/open-sans/OpenSans-Italic.ttf"],"assets/fonts/open-sans/OpenSans-Italic.ttf"],"./../assets/fonts/open-sans/OpenSans-LightItalic.ttf":[["OpenSans-LightItalic.14754349.ttf","assets/fonts/open-sans/OpenSans-LightItalic.ttf"],"assets/fonts/open-sans/OpenSans-LightItalic.ttf"],"./../assets/fonts/open-sans/OpenSans-SemiboldItalic.ttf":[["OpenSans-SemiboldItalic.81082f8e.ttf","assets/fonts/open-sans/OpenSans-SemiboldItalic.ttf"],"assets/fonts/open-sans/OpenSans-SemiboldItalic.ttf"],"./../assets/fonts/open-sans/OpenSans-BoldItalic.ttf":[["OpenSans-BoldItalic.6b9437c1.ttf","assets/fonts/open-sans/OpenSans-BoldItalic.ttf"],"assets/fonts/open-sans/OpenSans-BoldItalic.ttf"],"./../assets/fonts/open-sans/OpenSans-ExtraBoldItalic.ttf":[["OpenSans-ExtraBoldItalic.f1dafbc2.ttf","assets/fonts/open-sans/OpenSans-ExtraBoldItalic.ttf"],"assets/fonts/open-sans/OpenSans-ExtraBoldItalic.ttf"],"./../assets/images/location-icon.png":[["location-icon.e081f0f2.png","assets/images/location-icon.png"],"assets/images/location-icon.png"],"./../assets/images/water-image.png":[["water-image.ded7917b.png","assets/images/water-image.png"],"assets/images/water-image.png"],"_css_loader":"../../../.nvm/versions/node/v7.2.0/lib/node_modules/parcel-bundler/lib/builtins/css-loader.js"}],"assets/data/dealers.json":[function(require,module,exports) {
module.exports = {
    "zipcode": "28205",
    "location": {
        "lat": 35.2263714,
        "lon": -80.7990185
    },
    "dealers": [{
        "data": {
            "companyID": 401929,
            "name": "Aqua Experts",
            "phone1": "1-888-234-5678",
            "email": "info@aquaexperts.com",
            "addressLine1": "1234 Some Street",
            "addressLine2": "",
            "city": "Charlotte",
            "state": "North Carolina",
            "country": "US",
            "zipcode": "28205",
            "weekHours": {
                "mon": "7:00am - 7:00pm",
                "tue": "7:00am - 7:00pm",
                "wed": "7:00am - 7:00pm",
                "thu": "7:00am - 7:00pm",
                "fri": "7:00am - 7:00pm",
                "sat": "7:00am - 3:00pm",
                "sun": ""
            },
            "certifications": ["Installation Pro", "Residential Pro", "Service Pro"]
        }
    }, {
        "data": {
            "companyID": 401928,
            "name": "Premium Pools & Spas of Charlotte",
            "phone1": "1-888-888-8888",
            "email": "info@premiumpoolscharlotte.com",
            "addressLine1": "1234 Some Street",
            "addressLine2": "",
            "city": "Charlotte",
            "state": "North Carolina",
            "country": "US",
            "zipcode": "28205",
            "weekHours": {
                "mon": "7:00am - 7:00pm",
                "tue": "7:00am - 7:00pm",
                "wed": "7:00am - 7:00pm",
                "thu": "7:00am - 7:00pm",
                "fri": "7:00am - 7:00pm",
                "sat": "",
                "sun": "On Call"
            },
            "certifications": ["Installation Pro", "Commercial Pro", "Residential Pro", "Service Pro"]
        }
    }, {
        "data": {
            "companyID": 401927,
            "name": "Carolina Pool Specialists",
            "phone1": "1-877-987-6543",
            "email": "info@cps.com",
            "addressLine1": "1234 Some Street",
            "addressLine2": "",
            "city": "Charlotte",
            "state": "North Carolina",
            "country": "US",
            "zipcode": "28205",
            "weekHours": {
                "mon": "8:00am - 5:00pm",
                "tue": "8:00am - 5:00pm",
                "wed": "8:00am - 5:00pm",
                "thu": "8:00am - 5:00pm",
                "fri": "8:00am - 5:00pm",
                "sat": "8:00am - 5:00pm",
                "sun": ""
            },
            "certifications": ["Installation Pro", "Commercial Pro", "Residential Pro", "Service Pro"]
        }
    }, {
        "data": {
            "companyID": 401926,
            "name": "Pools'r'Us",
            "phone1": "1-888-346-4574",
            "email": "info@poolsrus.com",
            "addressLine1": "1234 Some Street",
            "addressLine2": "",
            "city": "Charlotte",
            "state": "North Carolina",
            "country": "US",
            "zipcode": "28205",
            "weekHours": {
                "mon": "7:00am - 7:00pm",
                "tue": "7:00am - 7:00pm",
                "wed": "7:00am - 7:00pm",
                "thu": "7:00am - 7:00pm",
                "fri": "7:00am - 7:00pm",
                "sat": "7:00am - 3:00pm",
                "sun": "1:00pm - 5:00pm"
            },
            "certifications": ["Installation Pro", "Commercial Pro", "Residential Pro"]
        }
    }, {
        "data": {
            "companyID": 401925,
            "name": "Clean Pool Systems",
            "phone1": "1-888-246-7485",
            "email": "info@cleanpools.com",
            "addressLine1": "1234 Some Street",
            "addressLine2": "",
            "city": "Charlotte",
            "state": "North Carolina",
            "country": "US",
            "zipcode": "28205",
            "weekHours": {
                "mon": "7:00am - 7:00pm",
                "tue": "7:00am - 7:00pm",
                "wed": "7:00am - 7:00pm",
                "thu": "7:00am - 7:00pm",
                "fri": "7:00am - 7:00pm",
                "sat": "7:00am - 3:00pm",
                "sun": ""
            },
            "certifications": ["Installation Pro", "Residential Pro"]
        }
    }, {
        "data": {
            "companyID": 401924,
            "name": "Pool Service Pros",
            "phone1": "1-888-PRO-POOL",
            "email": "info@propool.com",
            "addressLine1": "1234 Some Street",
            "addressLine2": "",
            "city": "Charlotte",
            "state": "North Carolina",
            "country": "US",
            "zipcode": "28205",
            "weekHours": {
                "mon": "7:00am - 7:00pm",
                "tue": "7:00am - 7:00pm",
                "wed": "7:00am - 7:00pm",
                "thu": "7:00am - 7:00pm",
                "fri": "7:00am - 7:00pm",
                "sat": "7:00am - 3:00pm",
                "sun": ""
            },
            "certifications": ["Installation Pro", "Commercial Pro", "Residential Pro", "Service Pro"]
        }
    }, {
        "data": {
            "companyID": 401923,
            "name": "Talent Pool",
            "phone1": "1-888-797-3463",
            "email": "info@talentpool.com",
            "addressLine1": "1234 Some Street",
            "addressLine2": "",
            "city": "Charlotte",
            "state": "North Carolina",
            "country": "US",
            "zipcode": "28205",
            "weekHours": {
                "mon": "7:00am - 7:00pm",
                "tue": "7:00am - 7:00pm",
                "wed": "7:00am - 7:00pm",
                "thu": "7:00am - 7:00pm",
                "fri": "7:00am - 7:00pm",
                "sat": "7:00am - 7:00pm",
                "sun": "7:00am - 7:00pm"
            },
            "certifications": ["Installation Pro", "Commercial Pro", "Service Pro"]
        }
    }]
};
},{}],"assets/scripts/pool-party.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dealers = require('../data/dealers.json');

var poolDealers = _interopRequireWildcard(_dealers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PoolParty = function () {
    function PoolParty(i) {
        _classCallCheck(this, PoolParty);

        // this.items = i;
        this.services = [];
        this.checkboxes = null;
        this.poolPartyPlanning();
        this.poolFilter();
    }

    _createClass(PoolParty, [{
        key: 'poolPartyPlanning',
        value: function poolPartyPlanning(method) {
            var _this = this;

            var services = this.services;
            //return all checked boxes on window load
            window.addEventListener('load', function () {
                _this.checkboxes = document.querySelectorAll('.check input');
                _this.checkboxes.forEach(function (box) {
                    if (box.checked == true) {
                        services.push(box.id);
                    }
                });
                //return all checked boxes on change
                _this.checkboxes.forEach(function (brx) {
                    brx.addEventListener('change', function (event) {
                        //if checked and not already in services...
                        if (brx.checked === true && services.indexOf(event.target.id) == -1) {
                            //add to services
                            services.push(event.target.id);
                        }
                        //else if un-checked and in services...
                        else if (brx.checked === false && services.indexOf(event.target.id) >= 0) {
                                var num = services.indexOf(event.target.id);
                                //remove from services
                                services.splice(num, 1);
                            }
                            //or else it's a weird one.
                            else {
                                    console.log('edge case');
                                }
                    });
                });
            });
            // this.cards = document.querySelectorAll('.card');
            // console.log(this.cards);
            this.poolFilter();
        }
    }, {
        key: 'poolFilter',
        value: function poolFilter() {
            var _this2 = this;

            //1. check which boxes are checked and return only the services which are 'true'
            //2. filter those results down to 3 (create an array, and push/pop the array)
            console.log('buns');
            console.log(this.services);
            // console.log(poolDealers.dealers);
            var certz = poolDealers.dealers[0].data.certifications;
            console.log(certz);
            this.die = [];

            this.dealers = poolDealers.dealers.forEach(function (d) {
                // console.log(d.data.certifications);
                _this2.services.filter(function (srv) {
                    console.log(d);
                    _this2.die.push(d);
                    return d.data.certifications == srv;
                });
            });

            console.log(this.dealers);

            // this.checks.forEach((box) => {
            //     if (box.checked == true) {
            //     this.terms.push(box);
            //     }
            //     else {
            //         console.log(`${box.id} is not checked`);
            //     }  
            // })
            // console.log(this.terms);
            // console.log(poolDealers);
        }
    }]);

    return PoolParty;
}();

exports.default = PoolParty;
},{"../data/dealers.json":"assets/data/dealers.json"}],"script.js":[function(require,module,exports) {
'use strict';

require('./sass/style.scss');

var _poolParty = require('./assets/scripts/pool-party');

var _poolParty2 = _interopRequireDefault(_poolParty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', function () {

    // const items = 'figs';

    var poolParty = new _poolParty2.default();

    // console.log(poolParty);
});

//Importing JSON (vs fetching) for performance
// import * as poolDealers from './assets/data/dealers.json';

//Next, I'll need 3 functions:
//Function 1: enables UI interactivity (click actions, event listeners, etc.)
//Function 2: performs filtering
//Function 3: for rendering. It will accept the filtered data as a parameter
},{"./sass/style.scss":"sass/style.scss","./assets/scripts/pool-party":"assets/scripts/pool-party.js"}],"../../../.nvm/versions/node/v7.2.0/lib/node_modules/parcel-bundler/lib/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51988' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.nvm/versions/node/v7.2.0/lib/node_modules/parcel-bundler/lib/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.e0e5486e.map