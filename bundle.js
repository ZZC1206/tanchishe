/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px \"Courier\";\n}\n#main {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  border: 6px solid black;\n  border-radius: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  left: 40px;\n  top: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n#stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#scorePlane {\n  width: 300px;\n  margin-top: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n", "",{"version":3,"sources":["webpack://./src/style/index.less"],"names":[],"mappings":"AAGA;EACI,UAAA;EACA,SAAA;EACA,8BAAA;UAAA,sBAAA;AAFJ;AAKA;EACI,yBAAA;AAHJ;AAOA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EAEA,YAAA;EACA,aAAA;EAEA,yBAAA;EAEA,uBAAA;EAEA,mBAAA;EAEA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;AAVJ;AAaA;EACI,YAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;AAXJ;AAcQ;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;EAEA,kBAAA;AAbZ;AAAA;EAkBQ,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EAGA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EAEA,8BAAA;EAAA,6BAAA;MAAA,uBAAA;UAAA,mBAAA;EAGA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,2BAAA;MAAA,4BAAA;AApBR;AAsBQ;EACI,UAAA;EACA,WAAA;EACA,uBAAA;EAGA,gCAAA;UAAA,wBAAA;AAtBZ;AA4BA;EACI,YAAA;EACA,gBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;AA1BJ","sourcesContent":["@bg-color: #b7d4a8; // 背景颜色\n\n// 清除默认样式\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font: bold 20px \"Courier\";\n    // display: flex;\n}\n\n#main {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n\n    width: 360px;\n    height: 420px;\n    // 设置背景颜色\n    background-color: @bg-color;\n    // 设置居中\n    border: 6px solid black;\n    // 设置圆角\n    border-radius: 12px;\n\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#stage {\n    width: 304px;\n    height: 304px;\n    border: 2px solid black;\n    position: relative;\n\n    #snake {\n        &>div {\n            width: 10px;\n            height: 10px;\n            background-color: #000;\n            border: 1px solid @bg-color;\n            // 开启绝对定位\n            position: absolute;\n        }\n    }\n\n    #food {\n        width: 10px;\n        height: 10px;\n        position: absolute;\n        left: 40px;\n        top: 100px;\n\n        // 开启弹性盒\n        display: flex;\n        // 设置横轴为主轴，wrap表示会自动换行\n        flex-flow: row wrap;\n\n        // 设置主轴和侧轴的空白空间分配到元素之间\n        justify-content: space-between;\n        align-content: space-between;\n\n        &>div {\n            width: 4px;\n            height: 4px;\n            background-color: black;\n\n            // 使四个div旋转45度\n            transform: rotate(45deg);\n        }\n    }\n\n}\n\n#scorePlane {\n    width: 300px;\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ (function(module) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 379:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less
var style = __webpack_require__(485);
;// CONCATENATED MODULE: ./src/style/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);



/* harmony default export */ var src_style = (style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/modules/Snake.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Snake = /*#__PURE__*/function () {
  function Snake() {
    _classCallCheck(this, Snake);
    this.snakeContainer = document.getElementById('snake');
    this.snakeBody = this.snakeContainer.getElementsByTagName('div');
    this.snakeHead = document.querySelector('#snake>div');
  }
  // 获取蛇头的X轴坐标
  _createClass(Snake, [{
    key: "snakeHeadX",
    get: function get() {
      return this.snakeHead.offsetLeft;
    }
    // 获取蛇头的Y轴坐标
    ,
    set:
    // 获取蛇头的X轴坐标
    function set(value) {
      if (this.snakeHeadX === value) return;
      // X的值的合法范围0-290之间
      if (value < 0 || value > 290)
        // 进入判断说明蛇撞墙了
        throw new Error('蛇撞墙了！');
      // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
      if (this.snakeBody[1] && this.snakeBody[1].offsetLeft === value) {
        // console.log('水平方向发生了掉头');
        // 如果发生了掉头，让蛇向反方向继续移动
        if (value > this.snakeHeadX) {
          // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
          value = this.snakeHeadX - 10;
        } else {
          // 向左走
          value = this.snakeHeadX + 10;
        }
      }
      this.move();
      this.snakeHead.style.left = value + 'px';
      this.checkHeadBody();
    }
    // 获取蛇头的Y轴坐标
  }, {
    key: "snakeHeadY",
    get: function get() {
      return this.snakeHead.offsetTop;
    },
    set: function set(value) {
      if (this.snakeHeadY === value) return;
      // Y的值的合法范围0-290之间
      if (value < 0 || value > 290)
        // 进入判断说明蛇撞墙了，抛出一个异常
        throw new Error('蛇撞墙了！');
      // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
      if (this.snakeBody[1] && this.snakeBody[1].offsetTop === value) {
        // console.log('水平方向发生了掉头');
        // 如果发生了掉头，让蛇向反方向继续移动
        if (value > this.snakeHeadY) {
          // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
          value = this.snakeHeadY - 10;
        } else {
          // 向左走
          value = this.snakeHeadY + 10;
        }
      }
      this.move();
      this.snakeHead.style.top = value + 'px';
      this.checkHeadBody();
    }
    // 增加蛇身长
  }, {
    key: "addSankeBody",
    value: function addSankeBody() {
      this.snakeContainer.insertAdjacentHTML('beforeend', '<div></div>');
    }
    // 蛇移动
  }, {
    key: "move",
    value: function move() {
      for (var i = this.snakeBody.length - 1; i > 0; i--) {
        var X = this.snakeBody[i - 1].offsetLeft;
        var Y = this.snakeBody[i - 1].offsetTop;
        this.snakeBody[i].style.left = X + 'px';
        this.snakeBody[i].style.top = Y + 'px';
      }
    }
    // 检查蛇头是否撞到身体的方法
  }, {
    key: "checkHeadBody",
    value: function checkHeadBody() {
      // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
      for (var i = 1; i < this.snakeBody.length; i++) {
        var bd = this.snakeBody[i];
        if (this.snakeHeadX === bd.offsetLeft && this.snakeHeadY === bd.offsetTop) {
          // 进入判断说明蛇头撞到了身体，游戏结束
          throw new Error('撞到自己了！');
        }
      }
    }
  }]);
  return Snake;
}();

;// CONCATENATED MODULE: ./src/modules/Food.ts
function Food_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Food_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Food_createClass(Constructor, protoProps, staticProps) { if (protoProps) Food_defineProperties(Constructor.prototype, protoProps); if (staticProps) Food_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Food = /*#__PURE__*/function () {
  function Food() {
    Food_classCallCheck(this, Food);
    this.foodEle = document.getElementById('food');
  }
  // 获取食物X轴坐标
  Food_createClass(Food, [{
    key: "foodX",
    get: function get() {
      return this.foodEle.offsetLeft;
    }
    // 获取食物Y轴坐标
  }, {
    key: "foodY",
    get: function get() {
      return this.foodEle.offsetTop;
    }
    // 随机更改食物的位置
  }, {
    key: "setFoodLocation",
    value: function setFoodLocation() {
      var left = Math.round(Math.random() * 29) * 10;
      var top = Math.round(Math.random() * 29) * 10;
      this.foodEle.style.left = left + 'px';
      this.foodEle.style.top = top + 'px';
    }
  }]);
  return Food;
}();

;// CONCATENATED MODULE: ./src/modules/ScorePanel.ts
function ScorePanel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ScorePanel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function ScorePanel_createClass(Constructor, protoProps, staticProps) { if (protoProps) ScorePanel_defineProperties(Constructor.prototype, protoProps); if (staticProps) ScorePanel_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var ScorePanel = /*#__PURE__*/function () {
  function ScorePanel() {
    var maxLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var upScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    ScorePanel_classCallCheck(this, ScorePanel);
    this.score = 0; // 分数
    this.level = 1; // 等级
    this.maxLevel = maxLevel;
    this.upScore = upScore;
    this.scoreEle = document.getElementById('score');
    this.levelEle = document.getElementById('level');
  }
  // 分数增加
  ScorePanel_createClass(ScorePanel, [{
    key: "scoreAdd",
    value: function scoreAdd() {
      this.scoreEle.innerText = ++this.score + '';
      if (this.score % this.upScore === 0) this.levelUp();
    }
    // 等级增加
  }, {
    key: "levelUp",
    value: function levelUp() {
      if (this.level < this.maxLevel) this.levelEle.innerText = ++this.level + '';
    }
  }]);
  return ScorePanel;
}();

;// CONCATENATED MODULE: ./src/modules/GameControl.ts
function GameControl_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function GameControl_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function GameControl_createClass(Constructor, protoProps, staticProps) { if (protoProps) GameControl_defineProperties(Constructor.prototype, protoProps); if (staticProps) GameControl_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var GameControl = /*#__PURE__*/function () {
  function GameControl() {
    GameControl_classCallCheck(this, GameControl);
    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    this.direction = 'ArrowRight';
    // 创建一个属性用来记录游戏是否结束
    this.isLive = true;
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);
    this.init();
  }
  // 初始化游戏
  GameControl_createClass(GameControl, [{
    key: "init",
    value: function init() {
      document.addEventListener('keydown', this.keydownHandler.bind(this));
      this.run();
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(event) {
      // 需要检查event.key的值是否合法（用户是否按了正确的按键）
      // 修改direction属性
      console.log(event.key);
      this.direction = event.key;
    }
  }, {
    key: "run",
    value: function run() {
      var X = this.snake.snakeHeadX;
      var Y = this.snake.snakeHeadY;
      switch (this.direction) {
        case "ArrowUp":
        case "Up":
          // 向上移动 top 减少
          Y -= 10;
          break;
        case "ArrowDown":
        case "Down":
          // 向下移动 top 增加
          Y += 10;
          break;
        case "ArrowLeft":
        case "Left":
          // 向左移动 left 减少
          X -= 10;
          break;
        case "ArrowRight":
        case "Right":
          // 向右移动 left 增加
          X += 10;
          break;
      }
      // 检查蛇是否吃到了食物
      this.checkEat(X, Y);
      try {
        this.snake.snakeHeadX = X;
        this.snake.snakeHeadY = Y;
      } catch (e) {
        alert(e.message + '游戏结束');
        this.isLive = false;
      }
      this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    // 定义一个方法，用来检查蛇是否吃到食物
  }, {
    key: "checkEat",
    value: function checkEat(X, Y) {
      if (X === this.food.foodX && Y === this.food.foodY) {
        // 食物的位置要进行重置
        this.food.setFoodLocation();
        // 分数增加
        this.scorePanel.scoreAdd();
        // 蛇要增加一节
        this.snake.addSankeBody();
      }
    }
  }]);
  return GameControl;
}();

;// CONCATENATED MODULE: ./src/index.ts


var gameControl = new GameControl();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ0QsT0FBT2dDLENBQUMsRUFBRTtRQUNOQyxLQUFLLENBQUNELENBQUMsQ0FBQ0UsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUNoQixNQUFNLEdBQUcsS0FBSztNQUN2QjtNQUNBLElBQUksQ0FBQ0EsTUFBTSxJQUFJaUIsVUFBVSxDQUFDLElBQUksQ0FBQ1QsR0FBRyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDSixVQUFVLENBQUNWLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFGO0lBQ0E7RUFBQTtJQUFBO0lBQUEsT0FDQSxrQkFBU1osQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDWCxJQUFJRCxDQUFDLEtBQUssSUFBSSxDQUFDcUIsSUFBSSxDQUFDZ0IsS0FBSyxJQUFJcEMsQ0FBQyxLQUFLLElBQUksQ0FBQ29CLElBQUksQ0FBQ2lCLEtBQUssRUFBRTtRQUNoRDtRQUNBLElBQUksQ0FBQ2pCLElBQUksQ0FBQ2tCLGVBQWUsRUFBRTtRQUMzQjtRQUNBLElBQUksQ0FBQ2pCLFVBQVUsQ0FBQ2tCLFFBQVEsRUFBRTtRQUMxQjtRQUNBLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3FCLFlBQVksRUFBRTtNQUM3QjtJQUNKO0VBQUM7RUFBQTtBQUFBOzs7QUN4RXVCO0FBQ29CO0FBQ2hELElBQU1DLFdBQVcsR0FBRyxJQUFJekIsV0FBVyxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW5jaGlzaGUvLi9zcmMvc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly90YW5jaGlzaGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RhbmNoaXNoZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RhbmNoaXNoZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YW5jaGlzaGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFuY2hpc2hlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RhbmNoaXNoZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFuY2hpc2hlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFuY2hpc2hlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90YW5jaGlzaGUvLi9zcmMvc3R5bGUvaW5kZXgubGVzcz8wY2U3Iiwid2VicGFjazovL3RhbmNoaXNoZS8uL3NyYy9tb2R1bGVzL1NuYWtlLnRzIiwid2VicGFjazovL3RhbmNoaXNoZS8uL3NyYy9tb2R1bGVzL0Zvb2QudHMiLCJ3ZWJwYWNrOi8vdGFuY2hpc2hlLy4vc3JjL21vZHVsZXMvU2NvcmVQYW5lbC50cyIsIndlYnBhY2s6Ly90YW5jaGlzaGUvLi9zcmMvbW9kdWxlcy9HYW1lQ29udHJvbC50cyIsIndlYnBhY2s6Ly90YW5jaGlzaGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgZm9udDogYm9sZCAyMHB4IFxcXCJDb3VyaWVyXFxcIjtcXG59XFxuI21haW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2Q0YTg7XFxuICBib3JkZXI6IDZweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNzdGFnZSB7XFxuICB3aWR0aDogMzA0cHg7XFxuICBoZWlnaHQ6IDMwNHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNzdGFnZSAjc25ha2UgPiBkaXYge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3ZDRhODtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuI3N0YWdlICNmb29kIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNDBweDtcXG4gIHRvcDogMTAwcHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtbXMtZmxleC1saW5lLXBhY2s6IGp1c3RpZnk7XFxuICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3N0YWdlICNmb29kID4gZGl2IHtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuI3Njb3JlUGxhbmUge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9pbmRleC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0FBSEo7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHlCQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUVBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7QUFWSjtBQWFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBWEo7QUFjUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0FBYlo7QUFBQTtFQWtCUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUVBLDhCQUFBO0VBQUEsNkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0VBR0EseUJBQUE7TUFBQSxzQkFBQTtVQUFBLDhCQUFBO0VBQ0EsMkJBQUE7TUFBQSw0QkFBQTtBQXBCUjtBQXNCUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFHQSxnQ0FBQTtVQUFBLHdCQUFBO0FBdEJaO0FBNEJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsOEJBQUE7QUExQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGJnLWNvbG9yOiAjYjdkNGE4OyAvLyDog4zmma/popzoibJcXG5cXG4vLyDmuIXpmaTpu5jorqTmoLflvI9cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udDogYm9sZCAyMHB4IFxcXCJDb3VyaWVyXFxcIjtcXG4gICAgLy8gZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbiAgICB3aWR0aDogMzYwcHg7XFxuICAgIGhlaWdodDogNDIwcHg7XFxuICAgIC8vIOiuvue9ruiDjOaZr+minOiJslxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmctY29sb3I7XFxuICAgIC8vIOiuvue9ruWxheS4rVxcbiAgICBib3JkZXI6IDZweCBzb2xpZCBibGFjaztcXG4gICAgLy8g6K6+572u5ZyG6KeSXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3N0YWdlIHtcXG4gICAgd2lkdGg6IDMwNHB4O1xcbiAgICBoZWlnaHQ6IDMwNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAjc25ha2Uge1xcbiAgICAgICAgJj5kaXYge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBiZy1jb2xvcjtcXG4gICAgICAgICAgICAvLyDlvIDlkK/nu53lr7nlrprkvY1cXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgI2Zvb2Qge1xcbiAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiA0MHB4O1xcbiAgICAgICAgdG9wOiAxMDBweDtcXG5cXG4gICAgICAgIC8vIOW8gOWQr+W8ueaAp+ebklxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIC8vIOiuvue9ruaoqui9tOS4uuS4u+i9tO+8jHdyYXDooajnpLrkvJroh6rliqjmjaLooYxcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuXFxuICAgICAgICAvLyDorr7nva7kuLvovbTlkozkvqfovbTnmoTnqbrnmb3nqbrpl7TliIbphY3liLDlhYPntKDkuYvpl7RcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAmPmRpdiB7XFxuICAgICAgICAgICAgd2lkdGg6IDRweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgICAgICAgICAvLyDkvb/lm5vkuKpkaXbml4vovaw0NeW6plxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbn1cXG5cXG4jc2NvcmVQbGFuZSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuYWtlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc25ha2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25ha2UnKTtcclxuICAgICAgICB0aGlzLnNuYWtlQm9keSA9IHRoaXMuc25ha2VDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuc25ha2VIZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NuYWtlPmRpdicpO1xyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W6JuH5aS055qEWOi9tOWdkOagh1xyXG4gICAgZ2V0IHNuYWtlSGVhZFgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc25ha2VIZWFkLm9mZnNldExlZnQ7XHJcbiAgICB9XHJcbiAgICAvLyDojrflj5bom4flpLTnmoRZ6L205Z2Q5qCHXHJcbiAgICBnZXQgc25ha2VIZWFkWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbmFrZUhlYWQub2Zmc2V0VG9wO1xyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W6JuH5aS055qEWOi9tOWdkOagh1xyXG4gICAgc2V0IHNuYWtlSGVhZFgodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5zbmFrZUhlYWRYID09PSB2YWx1ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIFjnmoTlgLznmoTlkIjms5XojIPlm7QwLTI5MOS5i+mXtFxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAyOTApXHJcbiAgICAgICAgICAgIC8vIOi/m+WFpeWIpOaWreivtOaYjuibh+aSnuWimeS6hlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+ibh+aSnuWimeS6hu+8gScpO1xyXG4gICAgICAgIC8vIOS/ruaUuXjml7bvvIzmmK/lnKjkv67mlLnmsLTlubPlnZDmoIfvvIzom4flnKjlt6blj7Pnp7vliqjvvIzom4flnKjlkJHlt6bnp7vliqjml7bvvIzkuI3og73lkJHlj7PmjonlpLTvvIzlj43kuYvkuqbnhLZcclxuICAgICAgICBpZiAodGhpcy5zbmFrZUJvZHlbMV0gJiYgdGhpcy5zbmFrZUJvZHlbMV0ub2Zmc2V0TGVmdCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+awtOW5s+aWueWQkeWPkeeUn+S6huaOieWktCcpO1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzlj5HnlJ/kuobmjonlpLTvvIzorqnom4flkJHlj43mlrnlkJHnu6fnu63np7vliqhcclxuICAgICAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5zbmFrZUhlYWRYKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmlrDlgLx2YWx1ZeWkp+S6juaXp+WAvFjvvIzliJnor7TmmI7om4flnKjlkJHlj7PotbDvvIzmraTml7blj5HnlJ/mjonlpLTvvIzlupTor6Xkvb/om4fnu6fnu63lkJHlt6botbBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5zbmFrZUhlYWRYIC0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlkJHlt6botbBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5zbmFrZUhlYWRYICsgMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5zbmFrZUhlYWQuc3R5bGUubGVmdCA9IHZhbHVlICsgJ3B4JztcclxuICAgICAgICB0aGlzLmNoZWNrSGVhZEJvZHkoKTtcclxuICAgIH1cclxuICAgIC8vIOiOt+WPluibh+WktOeahFnovbTlnZDmoIdcclxuICAgIHNldCBzbmFrZUhlYWRZKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc25ha2VIZWFkWSA9PT0gdmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBZ55qE5YC855qE5ZCI5rOV6IyD5Zu0MC0yOTDkuYvpl7RcclxuICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMjkwKVxyXG4gICAgICAgICAgICAvLyDov5vlhaXliKTmlq3or7TmmI7om4fmkp7lopnkuobvvIzmipvlh7rkuIDkuKrlvILluLhcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfom4fmkp7lopnkuobvvIEnKTtcclxuICAgICAgICAvLyDkv67mlLl45pe277yM5piv5Zyo5L+u5pS55rC05bmz5Z2Q5qCH77yM6JuH5Zyo5bem5Y+z56e75Yqo77yM6JuH5Zyo5ZCR5bem56e75Yqo5pe277yM5LiN6IO95ZCR5Y+z5o6J5aS077yM5Y+N5LmL5Lqm54S2XHJcbiAgICAgICAgaWYgKHRoaXMuc25ha2VCb2R5WzFdICYmIHRoaXMuc25ha2VCb2R5WzFdLm9mZnNldFRvcCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+awtOW5s+aWueWQkeWPkeeUn+S6huaOieWktCcpO1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzlj5HnlJ/kuobmjonlpLTvvIzorqnom4flkJHlj43mlrnlkJHnu6fnu63np7vliqhcclxuICAgICAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5zbmFrZUhlYWRZKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmlrDlgLx2YWx1ZeWkp+S6juaXp+WAvFjvvIzliJnor7TmmI7om4flnKjlkJHlj7PotbDvvIzmraTml7blj5HnlJ/mjonlpLTvvIzlupTor6Xkvb/om4fnu6fnu63lkJHlt6botbBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5zbmFrZUhlYWRZIC0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlkJHlt6botbBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5zbmFrZUhlYWRZICsgMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5zbmFrZUhlYWQuc3R5bGUudG9wID0gdmFsdWUgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuY2hlY2tIZWFkQm9keSgpO1xyXG4gICAgfVxyXG4gICAgLy8g5aKe5Yqg6JuH6Lqr6ZW/XHJcbiAgICBhZGRTYW5rZUJvZHkoKSB7XHJcbiAgICAgICAgdGhpcy5zbmFrZUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8ZGl2PjwvZGl2PicpO1xyXG4gICAgfVxyXG4gICAgLy8g6JuH56e75YqoXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNuYWtlQm9keS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFggPSB0aGlzLnNuYWtlQm9keVtpIC0gMV0ub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgY29uc3QgWSA9IHRoaXMuc25ha2VCb2R5W2kgLSAxXS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VCb2R5W2ldLnN0eWxlLmxlZnQgPSBYICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUJvZHlbaV0uc3R5bGUudG9wID0gWSArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5qOA5p+l6JuH5aS05piv5ZCm5pKe5Yiw6Lqr5L2T55qE5pa55rOVXHJcbiAgICBjaGVja0hlYWRCb2R5KCkge1xyXG4gICAgICAgIC8vIOiOt+WPluaJgOacieeahOi6q+S9k++8jOajgOafpeWFtuaYr+WQpuWSjOibh+WktOeahOWdkOagh+WPkeeUn+mHjeWPoFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZUJvZHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJkID0gdGhpcy5zbmFrZUJvZHlbaV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNuYWtlSGVhZFggPT09IGJkLm9mZnNldExlZnQgJiYgdGhpcy5zbmFrZUhlYWRZID09PSBiZC5vZmZzZXRUb3ApIHtcclxuICAgICAgICAgICAgICAgIC8vIOi/m+WFpeWIpOaWreivtOaYjuibh+WktOaSnuWIsOS6hui6q+S9k++8jOa4uOaIj+e7k+adn1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfmkp7liLDoh6rlt7HkuobvvIEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZm9vZEVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb29kJyk7XHJcbiAgICB9XHJcbiAgICAvLyDojrflj5bpo5/nialY6L205Z2Q5qCHXHJcbiAgICBnZXQgZm9vZFgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEVsZS5vZmZzZXRMZWZ0O1xyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W6aOf54mpWei9tOWdkOagh1xyXG4gICAgZ2V0IGZvb2RZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvb2RFbGUub2Zmc2V0VG9wO1xyXG4gICAgfVxyXG4gICAgLy8g6ZqP5py65pu05pS56aOf54mp55qE5L2N572uXHJcbiAgICBzZXRGb29kTG9jYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI5KSAqIDEwO1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI5KSAqIDEwO1xyXG4gICAgICAgIHRoaXMuZm9vZEVsZS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgdGhpcy5mb29kRWxlLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVQYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYXhMZXZlbCA9IDEwLCB1cFNjb3JlID0gMTApIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDsgLy8g5YiG5pWwXHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7IC8vIOetiee6p1xyXG4gICAgICAgIHRoaXMubWF4TGV2ZWwgPSBtYXhMZXZlbDtcclxuICAgICAgICB0aGlzLnVwU2NvcmUgPSB1cFNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmVFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcclxuICAgICAgICB0aGlzLmxldmVsRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJyk7XHJcbiAgICB9XHJcbiAgICAvLyDliIbmlbDlop7liqBcclxuICAgIHNjb3JlQWRkKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmVFbGUuaW5uZXJUZXh0ID0gKyt0aGlzLnNjb3JlICsgJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgJSB0aGlzLnVwU2NvcmUgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxVcCgpO1xyXG4gICAgfVxyXG4gICAgLy8g562J57qn5aKe5YqgXHJcbiAgICBsZXZlbFVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxldmVsIDwgdGhpcy5tYXhMZXZlbClcclxuICAgICAgICAgICAgdGhpcy5sZXZlbEVsZS5pbm5lclRleHQgPSArK3RoaXMubGV2ZWwgKyAnJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU25ha2UgZnJvbSAnLi9TbmFrZSc7XHJcbmltcG9ydCBGb29kIGZyb20gJy4vRm9vZCc7XHJcbmltcG9ydCBTY29yZVBhbmVsIGZyb20gJy4vU2NvcmVQYW5lbCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4quWxnuaAp+adpeWtmOWCqOibh+eahOenu+WKqOaWueWQke+8iOS5n+WwseaYr+aMiemUrueahOaWueWQke+8iVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ0Fycm93UmlnaHQnO1xyXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4quWxnuaAp+eUqOadpeiusOW9lea4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgICAgIHRoaXMuaXNMaXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKCk7XHJcbiAgICAgICAgdGhpcy5mb29kID0gbmV3IEZvb2QoKTtcclxuICAgICAgICB0aGlzLnNjb3JlUGFuZWwgPSBuZXcgU2NvcmVQYW5lbCgxMCwgMik7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICAvLyDliJ3lp4vljJbmuLjmiI9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgIH1cclxuICAgIGtleWRvd25IYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgLy8g6ZyA6KaB5qOA5p+lZXZlbnQua2V555qE5YC85piv5ZCm5ZCI5rOV77yI55So5oi35piv5ZCm5oyJ5LqG5q2j56Gu55qE5oyJ6ZSu77yJXHJcbiAgICAgICAgLy8g5L+u5pS5ZGlyZWN0aW9u5bGe5oCnXHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGV2ZW50LmtleTtcclxuICAgIH1cclxuICAgIHJ1bigpIHtcclxuICAgICAgICBsZXQgWCA9IHRoaXMuc25ha2Uuc25ha2VIZWFkWDtcclxuICAgICAgICBsZXQgWSA9IHRoaXMuc25ha2Uuc25ha2VIZWFkWTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJVcFwiOlxyXG4gICAgICAgICAgICAgICAgLy8g5ZCR5LiK56e75YqoIHRvcCDlh4/lsJFcclxuICAgICAgICAgICAgICAgIFkgLT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiRG93blwiOlxyXG4gICAgICAgICAgICAgICAgLy8g5ZCR5LiL56e75YqoIHRvcCDlop7liqBcclxuICAgICAgICAgICAgICAgIFkgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiTGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgLy8g5ZCR5bem56e75YqoIGxlZnQg5YeP5bCRXHJcbiAgICAgICAgICAgICAgICBYIC09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJSaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgLy8g5ZCR5Y+z56e75YqoIGxlZnQg5aKe5YqgXHJcbiAgICAgICAgICAgICAgICBYICs9IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOajgOafpeibh+aYr+WQpuWQg+WIsOS6humjn+eJqVxyXG4gICAgICAgIHRoaXMuY2hlY2tFYXQoWCwgWSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZS5zbmFrZUhlYWRYID0gWDtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZS5zbmFrZUhlYWRZID0gWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlICsgJ+a4uOaIj+e7k+adnycpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTGl2ZSAmJiBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksIDMwMCAtICh0aGlzLnNjb3JlUGFuZWwubGV2ZWwgLSAxKSAqIDMwKTtcclxuICAgIH1cclxuICAgIC8vIOWumuS5ieS4gOS4quaWueazle+8jOeUqOadpeajgOafpeibh+aYr+WQpuWQg+WIsOmjn+eJqVxyXG4gICAgY2hlY2tFYXQoWCwgWSkge1xyXG4gICAgICAgIGlmIChYID09PSB0aGlzLmZvb2QuZm9vZFggJiYgWSA9PT0gdGhpcy5mb29kLmZvb2RZKSB7XHJcbiAgICAgICAgICAgIC8vIOmjn+eJqeeahOS9jee9ruimgei/m+ihjOmHjee9rlxyXG4gICAgICAgICAgICB0aGlzLmZvb2Quc2V0Rm9vZExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIOWIhuaVsOWinuWKoFxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlUGFuZWwuc2NvcmVBZGQoKTtcclxuICAgICAgICAgICAgLy8g6JuH6KaB5aKe5Yqg5LiA6IqCXHJcbiAgICAgICAgICAgIHRoaXMuc25ha2UuYWRkU2Fua2VCb2R5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZS9pbmRleC5sZXNzJztcclxuaW1wb3J0IEdhbWVDb250cm9sIGZyb20gJy4vbW9kdWxlcy9HYW1lQ29udHJvbCc7XHJcbmNvbnN0IGdhbWVDb250cm9sID0gbmV3IEdhbWVDb250cm9sKCk7XHJcbiJdLCJuYW1lcyI6WyJTbmFrZSIsInNuYWtlQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNuYWtlQm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic25ha2VIZWFkIiwicXVlcnlTZWxlY3RvciIsIm9mZnNldExlZnQiLCJ2YWx1ZSIsInNuYWtlSGVhZFgiLCJFcnJvciIsIm1vdmUiLCJzdHlsZSIsImxlZnQiLCJjaGVja0hlYWRCb2R5Iiwib2Zmc2V0VG9wIiwic25ha2VIZWFkWSIsInRvcCIsImluc2VydEFkamFjZW50SFRNTCIsImkiLCJsZW5ndGgiLCJYIiwiWSIsImJkIiwiRm9vZCIsImZvb2RFbGUiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJTY29yZVBhbmVsIiwibWF4TGV2ZWwiLCJ1cFNjb3JlIiwic2NvcmUiLCJsZXZlbCIsInNjb3JlRWxlIiwibGV2ZWxFbGUiLCJpbm5lclRleHQiLCJsZXZlbFVwIiwiR2FtZUNvbnRyb2wiLCJkaXJlY3Rpb24iLCJpc0xpdmUiLCJzbmFrZSIsImZvb2QiLCJzY29yZVBhbmVsIiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlkb3duSGFuZGxlciIsImJpbmQiLCJydW4iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJjaGVja0VhdCIsImUiLCJhbGVydCIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwiZm9vZFgiLCJmb29kWSIsInNldEZvb2RMb2NhdGlvbiIsInNjb3JlQWRkIiwiYWRkU2Fua2VCb2R5IiwiZ2FtZUNvbnRyb2wiXSwic291cmNlUm9vdCI6IiJ9