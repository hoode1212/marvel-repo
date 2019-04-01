// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils/api/api-action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest
};
exports.default = _default;
},{}],"js/utils/events/event-action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"js/components/Powers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Powers;

function Powers(powers) {
  return "\n        <ul class=\"powers\">\n            ".concat(powers.map(function (power) {
    return "\n                    <li class=\"power\">\n                        <h4 class=\"power__powerName\" id=\"".concat(power.powerId, "\">").concat(power.powerName, "</h4>\n                    </li>\n                ");
  }).join(''), "\n        </ul>\n    ");
}
},{}],"js/components/Heroes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Heroes;

var _Powers = _interopRequireDefault(require("./Powers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Heroes(heroes) {
  return "\n        <ul class=\"heroes\">\n            ".concat(heroes.map(function (hero) {
    return "\n                <li class=\"hero\">\n                    <h4 class=\"hero__heroName\" id=\"".concat(hero.heroId, "\">").concat(hero.heroName, "</h4>\n                    \n                    </li>\n                    ");
  }).join(''), "\n        </ul>\n    ");
}
},{"./Powers":"js/components/Powers.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/teams.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/components/Teams.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Teams;

var _Heroes = _interopRequireDefault(require("./Heroes"));

require("../../css/teams.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Teams(teams) {
  return "\n       <ul class=\"teams\">\n           ".concat(teams.map(function (team) {
    return "\n                   <li class=\"team\">\n                       <h3 class=\"team__teamName\" id=\"".concat(team.teamId, "\">").concat(team.teamName, "</h3>\n                       \n                   </li>\n                   ");
  }).join(''), "\n       </ul>\n       <section class=\"add__team\">\n            <input type=\"text\" class=\"add__teamName\" placeholder=\"Team Name\">\n            <input type=\"text\" class=\"add__teamImage\" placeholder=\"Image URL\">\n            <input type=\"text\" class=\"add__teamRating\" placeholder=\"Rating\">\n            <button class=\"add__team__button\">Add Team</button>\n        </section>\n      ");
}
},{"./Heroes":"js/components/Heroes.js","../../css/teams.css":"css/teams.css"}],"js/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

function Header() {
  return "\n    <header class=\"logo\">\n        <img src=\"https://pixel.nymag.com/imgs/daily/vulture/2016/07/23/23-marvel-logo.w700.h700.jpg\">\n        <h1>The Avengers</h1>\n    </header>\n    ";
}
},{}],"js/components/Power.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Power;

function Power(power) {
  return "\n        <h3 class=\"power__powerName item\">".concat(power.powerName, "</h3>\n        <p class=\"power__description item\">").concat(power.description, "</p>\n            ");
}
},{}],"js/components/Hero.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hero;

var _Powers = _interopRequireDefault(require("./Powers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hero(hero) {
  return "\n        <h3 class=\"hero__heroName title\">Hero: ".concat(hero.heroName, "</h3>\n        <image src=\"").concat(hero.heroImage, "\">\n        <p class=\"hero__heroRating\">Rating: ").concat(hero.heroRating, "/5</p>\n<ul class=\"powers\">\n    <h3>Powers</h3>\n    <li class=\"power\">").concat((0, _Powers.default)(hero.powers), "</li>\n</ul>\n\n    <section class=\"add__power\">\n        <input type=\"text\" class=\"add__powerName\" placeholder=\"Power Name\">\n        <input type=\"text\" class=\"add__description\" placeholder=\"Description\">\n        <input type=\"text\" class=\"add__powerRating\" placeholder=\"Power Rating\">\n        <button class=\"add__power__button\" id=\"").concat(hero.heroId, "\">Add Power</button>\n    </section>\n            ");
}
},{"./Powers":"js/components/Powers.js"}],"js/components/Team.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Team;

var _Heroes = _interopRequireDefault(require("./Heroes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Team(team) {
  return "\n    <div class=\"team__container\">\n        <h3 class=\"team__teamName title\">Team: ".concat(team.teamName, "</h3>\n        <img src=\"").concat(team.teamImage, "\" class=\"team__teamImage\">\n \n        <ul class=\"heroes\">\n            <li class=\"hero\">\n            ").concat((0, _Heroes.default)(team.heroes), "\n            </li>\n        </ul> \n        \n        <section class=\"add__hero\">\n            <input type=\"text\" class=\"add__heroName\" placeholder=\"Hero Name\">\n            <input type=\"text\" class=\"add__heroImage\" placeholder=\"Image URL\">\n            <input type=\"text\" class=\"add__heroRating\" placeholder=\"Hero Rating\">\n            <button class=\"add__hero__button\" id=\"").concat(team.teamId, "\">Add Hero</button>\n        </section>\n        \n    </div>\n            ");
}
},{"./Heroes":"js/components/Heroes.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _apiAction = _interopRequireDefault(require("./utils/api/api-action"));

var _eventAction = _interopRequireDefault(require("./utils/events/event-action"));

var _Teams = _interopRequireDefault(require("./components/Teams"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _Powers = _interopRequireDefault(require("./components/Powers"));

var _Power = _interopRequireDefault(require("./components/Power"));

var _Heroes = _interopRequireDefault(require("./components/Heroes"));

var _Hero = _interopRequireDefault(require("./components/Hero"));

var _Team = _interopRequireDefault(require("./components/Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

main();
(0, _Header.default)();

function main() {
  _apiAction.default.getRequest('http://localhost:8080/teams', function (teams) {
    getAppContext().innerHTML = (0, _Teams.default)(teams);
  });

  navPowers();
  navHeroes();
  navTeams();
  addTeams();
  viewSingleTeam();
  addHeroToTeam();
  viewSingleHero();
  addPowerToHero();
  viewSinglePower();
} // START NAV FUNCTIONS AT THE HEADER


function navTeams() {
  var teamButton = document.querySelector('.nav__teams');

  _eventAction.default.on(teamButton, 'click', function () {
    _apiAction.default.getRequest('http://localhost:8080/teams', function (teams) {
      getAppContext().innerHTML = (0, _Teams.default)(teams);
    });
  });
}

function navHeroes() {
  var heroButton = document.querySelector('.nav__heroes');

  _eventAction.default.on(heroButton, 'click', function () {
    _apiAction.default.getRequest('http://localhost:8080/heroes', function (heroes) {
      getAppContext().innerHTML = (0, _Heroes.default)(heroes);
    });
  });
}

function navPowers() {
  var powerButton = document.querySelector('.nav__powers');

  _eventAction.default.on(powerButton, 'click', function () {
    _apiAction.default.getRequest('http://localhost:8080/powers', function (powers) {
      getAppContext().innerHTML = (0, _Powers.default)(powers);
    });
  });
} // END NAV FUNCTIONS AT HEADER
// START TEAM FUNCTIONS


function addTeams() {
  _eventAction.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__team__button')) {
      var teamName = document.querySelector('.add__teamName').value;
      var teamImage = document.querySelector('.add__teamImage').value;
      var teamRating = document.querySelector('.add__teamRating').value;

      _apiAction.default.postRequest('http://localhost:8080/teams/add', {
        teamName: teamName,
        teamImage: teamImage,
        teamRating: teamRating
      }, function (teams) {
        return getAppContext().innerHTML = (0, _Teams.default)(teams);
      });
    }
  });
}

function viewSingleTeam() {
  _eventAction.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('team__teamName')) {
      _apiAction.default.getRequest("http://localhost:8080/teams/".concat(event.target.id), function (team) {
        getAppContext().innerHTML = (0, _Team.default)(team);
      });
    }
  });
} // END TEAM FUNCTIONS
// START HERO FUNCTIONS


function addHeroToTeam() {
  _eventAction.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__hero__button')) {
      var heroName = document.querySelector('.add__heroName').value;
      var heroImage = document.querySelector('.add__heroImage').value;
      var heroRating = document.querySelector('.add__heroRating').value;

      _apiAction.default.postRequest("http://localhost:8080/heroes/add/".concat(event.target.id), {
        heroName: heroName,
        heroImage: heroImage,
        heroRating: heroRating
      }, function (team) {
        return getAppContext().innerHTML = (0, _Team.default)(team);
      });
    }
  });
}

function viewSingleHero() {
  _eventAction.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('hero__heroName')) {
      _apiAction.default.getRequest("http://localhost:8080/heroes/".concat(event.target.id), function (hero) {
        getAppContext().innerHTML = (0, _Hero.default)(hero);
      });
    }
  });
} // END HERO FUNCTIONS
// START POWER FUNCTIONS


function addPowerToHero() {
  _eventAction.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__power__button')) {
      var powerName = document.querySelector('.add__powerName').value;
      var description = document.querySelector('.add__description').value;
      var powerRating = document.querySelector('.add__powerRating').value;

      _apiAction.default.postRequest("http://localhost:8080/powers/add/".concat(event.target.id), {
        powerName: powerName,
        description: description,
        powerRating: powerRating
      }, function (hero) {
        return getAppContext().innerHTML = (0, _Hero.default)(hero);
      });
    }
  });
}

function viewSinglePower() {
  _eventAction.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('power__powerName')) {
      _apiAction.default.getRequest("http://localhost:8080/powers/".concat(event.target.id), function (power) {
        getAppContext().innerHTML = (0, _Power.default)(power);
      });
    }
  });
} // END POWER FUNCTIONS


function getAppContext() {
  return document.querySelector('#app');
}
},{"./utils/api/api-action":"js/utils/api/api-action.js","./utils/events/event-action":"js/utils/events/event-action.js","./components/Teams":"js/components/Teams.js","./components/Header":"js/components/Header.js","./components/Powers":"js/components/Powers.js","./components/Power":"js/components/Power.js","./components/Heroes":"js/components/Heroes.js","./components/Hero":"js/components/Hero.js","./components/Team":"js/components/Team.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49504" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map