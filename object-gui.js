/*!
 * Author : Matteo Bruni - https://www.matteobruni.it
 * MIT license: https://opensource.org/licenses/MIT
 * Demo / Generator : https://editor.matteobruni.it/
 * GitHub : https://www.github.com/matteobruni/object-gui
 * How to use? : Check the GitHub README
 * v1.0.5
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ColorUtils; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Utils; });

// CONCATENATED MODULE: ./dist/js/Utils/ColorUtils.js
class ColorUtils {
  static stringToRgb(input) {
    return ColorUtils.stringToRgba(input);
  }

  static hslaToRgba(hsla) {
    const rgbResult = ColorUtils.hslToRgb(hsla);
    return {
      a: hsla.a,
      b: rgbResult.b,
      g: rgbResult.g,
      r: rgbResult.r
    };
  }

  static hslToRgb(hsl) {
    const result = {
      b: 0,
      g: 0,
      r: 0
    };
    const hslPercent = {
      h: hsl.h / 360,
      l: hsl.l / 100,
      s: hsl.s / 100
    };

    if (hslPercent.s === 0) {
      result.b = hslPercent.l;
      result.g = hslPercent.l;
      result.r = hslPercent.l;
    } else {
      const q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s;
      const p = 2 * hslPercent.l - q;
      result.r = ColorUtils.hue2rgb(p, q, hslPercent.h + 1 / 3);
      result.g = ColorUtils.hue2rgb(p, q, hslPercent.h);
      result.b = ColorUtils.hue2rgb(p, q, hslPercent.h - 1 / 3);
    }

    result.r = Math.floor(result.r * 255);
    result.g = Math.floor(result.g * 255);
    result.b = Math.floor(result.b * 255);
    return result;
  }

  static stringToRgba(input) {
    if (input.startsWith("rgb")) {
      const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
      const result = regex.exec(input);
      return result ? {
        a: result.length > 4 ? parseFloat(result[5]) : 1,
        b: parseInt(result[3], 10),
        g: parseInt(result[2], 10),
        r: parseInt(result[1], 10)
      } : undefined;
    } else if (input.startsWith("hsl")) {
      const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
      const result = regex.exec(input);
      return result ? ColorUtils.hslaToRgba({
        a: result.length > 4 ? parseFloat(result[5]) : 1,
        h: parseInt(result[1], 10),
        l: parseInt(result[3], 10),
        s: parseInt(result[2], 10)
      }) : undefined;
    } else {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
      const hexFixed = input.replace(shorthandRegex, (_m, r, g, b, a) => {
        return r + r + g + g + b + b + (a !== undefined ? a + a : "");
      });
      const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
      const result = regex.exec(hexFixed);
      return result ? {
        a: result[4] !== undefined ? parseInt(result[4], 16) / 0xff : 1,
        b: parseInt(result[3], 16),
        g: parseInt(result[2], 16),
        r: parseInt(result[1], 16)
      } : undefined;
    }
  }

  static hue2rgb(p, q, t) {
    let tCalc = t;

    if (tCalc < 0) {
      tCalc += 1;
    }

    if (tCalc > 1) {
      tCalc -= 1;
    }

    if (tCalc < 1 / 6) {
      return p + (q - p) * 6 * tCalc;
    }

    if (tCalc < 1 / 2) {
      return q;
    }

    if (tCalc < 2 / 3) {
      return p + (q - p) * (2 / 3 - tCalc) * 6;
    }

    return p;
  }

}
// CONCATENATED MODULE: ./dist/js/Utils/Utils.js
class Utils {
  static clamp(value, min, max) {
    const realMin = Math.min(min, max);
    const realMax = Math.max(min, max);
    return Math.min(Math.max(realMin, value), realMax);
  }

}
// CONCATENATED MODULE: ./dist/js/Utils/index.js



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ EditorType; });

// CONCATENATED MODULE: ./dist/js/Enums/EditorType.js
var EditorType;

(function (EditorType) {
  EditorType["number"] = "number";
  EditorType["boolean"] = "boolean";
  EditorType["color"] = "color";
  EditorType["select"] = "select";
  EditorType["string"] = "string";
})(EditorType || (EditorType = {}));
// CONCATENATED MODULE: ./dist/js/Enums/index.js


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ EditorButton_EditorButton; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ EditorCheckboxInput_EditorCheckboxInput; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ EditorColorInput_EditorColorInput; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ EditorGroup_EditorGroup; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ EditorItem; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ EditorNumberInput_EditorNumberInput; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ EditorSelectInput_EditorSelectInput; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ EditorStringInput_EditorStringInput; });

// CONCATENATED MODULE: ./dist/js/Editors/EditorItem.js
class EditorItem {
  constructor(data, createElement) {
    console.log("")
    this.data = data;
    this.createElement = createElement;
    this.element = this.createElement();
    this.collapsed = true;
  }

  updateCollapse(collapsed) {
    this.collapsed = collapsed;
  }

}
// CONCATENATED MODULE: ./dist/js/Editors/EditorButton.js

class EditorButton_EditorButton extends EditorItem {
  constructor(data, id, name, label, autoMap = true) {
    super(data, () => document.createElement("button"));
    this.id = id;
    this.name = name;
    this.label = label;
    this.autoMap = autoMap;
    this.element.id = `button_${id}`;
    this.element.innerText = label;
    this.element.addEventListener("click", () => {
      if (this.autoMap) {
        const obj = this.data;
        const func = obj[name];

        if (typeof func === "function") {
          func.bind(obj)();
        }
      }

      if (this.clickHandler) {
        this.clickHandler();
      }
    });
  }

  click(clickHandler) {
    this.clickHandler = clickHandler;
    return this;
  }

}
// CONCATENATED MODULE: ./dist/js/Editors/EditorInputBase.js

class EditorInputBase_EditorInputBase extends EditorItem {
  constructor(data, createElement, id, name, getDefaultValue, getValueFromInput, setValueToInput, value, autoMap = true) {
    super(data, createElement);
    this.id = id;
    this.name = name;
    this.getDefaultValue = getDefaultValue;
    this.getValueFromInput = getValueFromInput;
    this.setValueToInput = setValueToInput;
    this.autoMap = autoMap;
    const input = this.element;
    const obj = this.data;
    input.id = `input_${this.id}`;
    this.value = value !== null && value !== void 0 ? value : this.autoMap ? obj[this.name] : this.getDefaultValue();
    this.setValueToInput(this, this.value);
  }

  change(changeHandler) {
    this.changeHandler = changeHandler;
    return this;
  }

  changeEventHandler() {
    this.value = this.getValueFromInput(this);

    if (this.autoMap) {
      const obj = this.data;
      obj[this.name] = this.value;
    }

    if (this.changeHandler) {
      this.changeHandler(this.value);
    }
  }

}
// CONCATENATED MODULE: ./dist/js/Editors/EditorCheckboxInput.js

class EditorCheckboxInput_EditorCheckboxInput extends EditorInputBase_EditorInputBase {
  constructor(data, id, name, value, autoMap = true) {
    super(data, () => document.createElement("input"), id, name, () => false, self => {
      const input = self.element;
      return input.checked;
    }, (self, value) => {
      const input = self.element;
      input.checked = value;
    }, value, autoMap);
    const input = this.element;
    input.type = "checkbox";
    input.addEventListener("change", () => {
      this.changeEventHandler();
    });
    this.fullDom = document.createElement("div");
    this.fullDom.append(this.element);
    const spacer = document.createElement("div");
    spacer.classList.add("editor-spacer");
    this.fullDom.append(spacer);
  }

  addItem() {
    return this;
  }

  addItemGroup() {
    return this;
  }

  addItems() {
    return this;
  }

  max() {
    return this;
  }

  min() {
    return this;
  }

  step() {
    return this;
  }

}
// EXTERNAL MODULE: ./dist/js/Utils/index.js + 2 modules
var Utils = __webpack_require__(0);

// CONCATENATED MODULE: ./dist/js/Editors/EditorColorInput.js


class EditorColorInput_EditorColorInput extends EditorInputBase_EditorInputBase {
  constructor(data, id, name, value, autoMap = true) {
    super(data, () => document.createElement("input"), id, name, () => "", self => {
      const input = self.element;
      return input.value;
    }, (self, value) => {
      const input = self.element;
      input.value = value;
    }, value, autoMap);
    this.fullDom = document.createElement("div");
    this.colorInput = document.createElement("input");
    this.colorInput.type = "color";
    this.colorInput.value = this.value;
    this.fullDom.append(this.colorInput);
    const input = this.element;
    input.type = "text";
    this.fullDom.append(this.element);
    this.updateStyle(input.value);
    input.addEventListener("change", () => {
      const colorInput = this.element;
      this.colorInput.value = colorInput.value;
      this.changeEventHandler();
    });
    this.colorInput.addEventListener("change", () => {
      const colorInput = this.element;
      colorInput.value = this.colorInput.value;
      this.changeEventHandler();
    });
  }

  static textColor(value) {
    if (value === undefined) {
      return undefined;
    }

    const rgb = Utils["a" /* ColorUtils */].stringToRgb(value);

    if (!rgb) {
      return undefined;
    }

    const color = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);
    return color > 125 ? "#000" : "#fff";
  }

  step() {
    return this;
  }

  min() {
    return this;
  }

  max() {
    return this;
  }

  addItem() {
    return this;
  }

  addItems() {
    return this;
  }

  addItemGroup() {
    return this;
  }

  changeEventHandler() {
    super.changeEventHandler();
    this.updateStyle(this.value);
  }

  updateStyle(bgColor) {
    const rgb = Utils["a" /* ColorUtils */].stringToRgb(bgColor);

    if (!rgb) {
      this.element.style.backgroundColor = "";
      this.colorInput.style.backgroundColor = "";
    } else {
      this.element.style.backgroundColor = bgColor;
      this.colorInput.style.backgroundColor = bgColor;
    }

    const textColor = EditorColorInput_EditorColorInput.textColor(bgColor);

    if (textColor !== undefined) {
      this.element.style.color = textColor;
      this.colorInput.style.color = textColor;
    } else {
      this.element.style.color = "";
      this.colorInput.style.color = "";
    }
  }

}
// CONCATENATED MODULE: ./dist/js/Editors/EditorStringInput.js

class EditorStringInput_EditorStringInput extends EditorInputBase_EditorInputBase {
  constructor(data, id, name, value, autoMap = true) {
    super(data, () => document.createElement("input"), id, name, () => "", self => {
      const input = self.element;
      return input.value;
    }, (self, value) => {
      const input = self.element;
      input.value = value;
    }, value, autoMap);
    const input = this.element;
    input.type = "text";
    input.addEventListener("change", () => {
      this.changeEventHandler();
    });
    this.data = data
    this.deleteButton = document.createElement("button");
    this.deleteButton.type = "button";
    this.deleteButton.textContent = "delete";
    this.deleteButton.dataset.name=this.name
    this.deleteButton.addEventListener("click", () => {
      this.delete();
    });
    this.deleteButton.classList.add("group-content");
    console.log(input.parentNode)
    this.element.append(this.deleteButton)
    // input.parentNode.insertAfter(this.deleteButton,input)
  }

  delete(){
    console.log("delete")
    console.log(data)
    // const newname=this.name+'.1'
    // const clone = structuredClone(this.data)
    // this.parentData[newname]=clone
    // const code = document.getElementById("code");
    // code.innerText = JSON.stringify(data, null, 4);
  }

  addItem() {
    return this;
  }

  addItemGroup() {
    return this;
  }

  addItems() {
    return this;
  }

  max() {
    return this;
  }

  min() {
    return this;
  }

  step() {
    return this;
  }

}
// CONCATENATED MODULE: ./dist/js/Editors/EditorNumberInput.js


class EditorNumberInput_EditorNumberInput extends EditorInputBase_EditorInputBase {
  constructor(data, id, name, value, autoMap = true) {
    super(data, () => document.createElement("input"), id, name, () => 0, self => {
      var _a, _b;

      const numberSelf = self;
      const input = numberSelf.element;
      const value = parseFloat(input.value);
      return Utils["b" /* Utils */].clamp(value, (_a = numberSelf._min) !== null && _a !== void 0 ? _a : value, (_b = numberSelf._max) !== null && _b !== void 0 ? _b : value);
    }, (self, value) => {
      var _a, _b;

      const numberSelf = self;
      const input = numberSelf.element;
      const numValue = value;
      input.value = Utils["b" /* Utils */].clamp(numValue, (_a = numberSelf._min) !== null && _a !== void 0 ? _a : numValue, (_b = numberSelf._max) !== null && _b !== void 0 ? _b : numValue).toString();
    }, value, autoMap);
    const input = this.element;
    input.type = "number";
    this.fullDom = document.createElement("div");
    this.fullDom.append(this.element);
    input.addEventListener("change", () => {
      this.changeEventHandler();
    });
  }

  static getDragger(slider) {
    return slider.querySelector("span");
  }

  step(step) {
    this.element.step = step.toString(10);
    this._step = step;
    return this;
  }

  min(min) {
    this.element.min = min.toString(10);
    this._min = min;
    this.drawSlider();
    return this;
  }

  max(max) {
    this.element.max = max.toString(10);
    this._max = max;
    this.drawSlider();
    return this;
  }

  addItem() {
    return this;
  }

  addItemGroup() {
    return this;
  }

  addItems() {
    return this;
  }

  updateCollapse(collapsed) {
    super.updateCollapse(collapsed);
    const slider = this.getSlider();

    if (!slider) {
      return;
    }

    this.updateSliderData(slider);
    const dragger = EditorNumberInput_EditorNumberInput.getDragger(slider);

    if (!dragger) {
      return;
    }

    this.updateDragger(dragger);
  }

  changeEventHandler() {
    super.changeEventHandler();
    const slider = this.getSlider();

    if (!slider) {
      return;
    }

    const dragger = EditorNumberInput_EditorNumberInput.getDragger(slider);

    if (!dragger) {
      return;
    }

    this.updateDragger(dragger);
  }

  getSlider() {
    if (this._max === undefined || this._min === undefined) {
      return null;
    }

    const parent = this.fullDom;

    if (!parent) {
      return null;
    }

    return parent.querySelector(".range-slider");
  }

  updateSliderData(slider) {
    const rect = slider.getBoundingClientRect();
    this.slider = {
      left: rect.left,
      width: rect.width
    };
  }

  updateDragger(dragger) {
    var _a, _b;

    if (!this.slider) {
      return;
    }

    const max = (_a = this._max) !== null && _a !== void 0 ? _a : 0;
    const min = (_b = this._min) !== null && _b !== void 0 ? _b : 0;
    const value = this.value;
    const denom = max - min;
    const width = denom !== 0 ? value / denom : 0;
    dragger.style.width = `${width * this.slider.width}px`;
  }

  updateDraggerEvent(e, down, dragger) {
    var _a, _b, _c;

    if (!this.slider || !down) {
      return;
    }

    const max = (_a = this._max) !== null && _a !== void 0 ? _a : 0;
    const min = (_b = this._min) !== null && _b !== void 0 ? _b : 0;
    const step = (_c = this._step) !== null && _c !== void 0 ? _c : 0;
    const width = Utils["b" /* Utils */].clamp(e.pageX - this.slider.left, 0, this.slider.width);
    let value = Utils["b" /* Utils */].clamp(width / this.slider.width * (max - min) + min, min, max);

    if (step > 0) {
      value = Math.floor(value / step) * step;
    }

    dragger.style.width = `${width}px`;
    this.onDrag(value);
  }

  onDrag(value) {
    const input = this.element;
    input.value = value.toString(10);
    this.changeEventHandler();
  }

  drawSlider() {
    var _a, _b;

    if (this._max === undefined || this._min === undefined) {
      return;
    }

    const parent = this.fullDom;

    if (!parent) {
      return;
    }

    const range = parent.querySelector(".range-slider");

    if (range) {
      return;
    }

    this.element.classList.add("slider-input");
    const slider = document.createElement("div");
    slider.classList.add("range-slider");
    slider.appendChild(document.createElement("span"));
    parent.insertBefore(slider, this.element);
    const rect = slider.getBoundingClientRect();
    this.slider = {
      left: rect.left,
      width: rect.width
    };
    const dragger = slider.children[0];
    let down = false;
    const max = (_a = this._max) !== null && _a !== void 0 ? _a : 0;
    const min = (_b = this._min) !== null && _b !== void 0 ? _b : 0;
    const value = this.value;
    const denom = Math.abs(max) + Math.abs(min);
    const width = denom !== 0 ? value / denom : 0;
    dragger.style.width = `${width * this.slider.width}px`;
    dragger.style.left = "0px";
    dragger.style.marginLeft = "0px";
    slider.addEventListener("mousedown", e => {
      if (!e.target) {
        return;
      }

      down = true;
      this.updateDraggerEvent(e, down, dragger);
      return false;
    });
    document.addEventListener("mousemove", e => {
      this.updateDraggerEvent(e, down, dragger);
    });
    document.addEventListener("mouseup", () => {
      down = false;
    });
    window.addEventListener("resize", () => {
      const rect = slider.getBoundingClientRect();
      this.slider = {
        left: rect.left,
        width: rect.width
      };
      this.updateDragger(dragger);
    });
  }

}
// CONCATENATED MODULE: ./dist/js/Editors/EditorSelectInput.js

class EditorSelectInput_EditorSelectInput extends EditorInputBase_EditorInputBase {
  constructor(data, id, name, value, autoMap = true) {
    super(data, () => document.createElement("select"), id, name, () => "", self => {
      const select = self.element;
      return select.value;
    }, (self, value) => {
      const select = self.element;
      select.value = value;
    }, value, autoMap);
    const select = this.element;
    select.addEventListener("change", () => {
      this.changeEventHandler();
    });
  }

  addItem(value, text, group) {
    const select = this.element;
    const item = document.createElement("option");
    const groupElement = select.querySelector(`[label=${group}]`);
    item.value = value;
    item.text = text !== null && text !== void 0 ? text : value;
    item.selected = this.value === value;
    (groupElement !== null && groupElement !== void 0 ? groupElement : select).append(item);
    return this;
  }

  addItems(values) {
    for (const value of values) {
      this.addItem(value.value, value.text, value.group);
    }

    return this;
  }

  addItemGroup(name) {
    const select = this.element;
    const group = document.createElement("optgroup");
    group.label = name;
    select.append(group);
    return this;
  }

  max() {
    return this;
  }

  min() {
    return this;
  }

  step() {
    return this;
  }

}
// EXTERNAL MODULE: ./dist/js/Enums/index.js + 1 modules
var Enums = __webpack_require__(1);

// CONCATENATED MODULE: ./dist/js/Editors/EditorGroup.js








class EditorGroup_EditorGroup extends EditorItem {
  constructor(data, name, title, parent, collapsed, themeSelect, parentData) {
    console.log('TTTTTTT')
    console.log(parentData)
    super(data, () => document.createElement("div"));
    this.name = name;
    this.parentData = parentData
    this.title = title;
    this.getValueFromInput = name;
    this.collapsed = collapsed;
    this.children = [];
    this.element.id = name;
    this.element.classList.add("editor", "editor-group");
    const divTitle = document.createElement("div");
    divTitle.classList.add("editor-item-title");
    const divName = document.createElement("div");
    divName.classList.add("editor-item-name");
    const b = document.createElement("input");
    
    b.setAttribute('type', 'text');
    b.value = title;
    b.style.width='80%'
    b.addEventListener("change", (e) => {
        this.changeEventHandler(e);
      }
      
      );
    divName.append(b);
    divTitle.append(divName);

    if (themeSelect) {
      const divTheme = document.createElement("div");
      divTheme.classList.add("editor-button-theme");
      divTheme.append(themeSelect);
      divTitle.append(divTheme);
    }

    const divCollapse = document.createElement("div");
    divCollapse.classList.add("editor-button-collapse");
    this.collapseButton = document.createElement("button");
    this.collapseButton.type = "button";
    this.collapseButton.addEventListener("click", () => {
      this.toggleCollapse();
    });
    this.duplicateButton = document.createElement("button");
    this.duplicateButton.type = "button";
    this.duplicateButton.innerHTML = '<i class="fa-solid fa-copy"></i>';
    this.duplicateButton.dataset.name=this.title
    this.duplicateButton.addEventListener("click", () => {
      this.duplicate();
    });
    divCollapse.append(this.duplicateButton);
    divCollapse.append(this.collapseButton);
    divTitle.append(divCollapse);
    this.element.append(divTitle);
    this.childrenGroup = document.createElement("div");
    this.childrenGroup.classList.add("group-content");
    this.element.append(this.childrenGroup);
    parent.append(this.element);
    this.setCollapse();
  }

  static createRoot(name, title, data, parent, themeSelect) {
    return new EditorGroup_EditorGroup(data, `${this.name}_${name}`, title, parent, false, themeSelect);
  }

  addGroup(name, title, collapsed = true, customParent) {
    const parentData = customParent !== null && customParent !== void 0 ? customParent : this.data;

    if (!parentData[name]) {
      parentData[name] = {};
    }

    const data = parentData[name];
    console.log("parentdata")
    console.log(parentData)
    const subGroup = new EditorGroup_EditorGroup(data, `${this.name}_${name}`, title, this.childrenGroup, collapsed, false, parentData);
    this.children.push(subGroup);
    return subGroup;
  }

  addProperty(name, label, type, value, autoMap = true) {
    const divGroup = document.createElement("div");
    divGroup.classList.add("editor-element");
    const htmlLabel = document.createElement("label");
    htmlLabel.textContent = label;
    divGroup.append(htmlLabel);
    let item;
    const inputName = `${this.name}_${name}`;

    switch (type) {
      case Enums["a" /* EditorType */].number:
        item = new EditorNumberInput_EditorNumberInput(this.data, inputName, name, value, autoMap);
        break;

      case Enums["a" /* EditorType */].boolean:
        item = new EditorCheckboxInput_EditorCheckboxInput(this.data, inputName, name, value, autoMap);
        break;

      case Enums["a" /* EditorType */].color:
        item = new EditorColorInput_EditorColorInput(this.data, inputName, name, value, autoMap);
        break;

      case Enums["a" /* EditorType */].select:
        item = new EditorSelectInput_EditorSelectInput(this.data, inputName, name, value, autoMap);
        break;

      default:
        item = new EditorStringInput_EditorStringInput(this.data, inputName, name, value, autoMap);
    }

    this.children.push(item);

    if (item.fullDom) {
      item.fullDom.classList.add("element-dom");
      divGroup.append(item.fullDom);
    } else {
      divGroup.append(item.element);
    }

    this.childrenGroup.append(divGroup);
    return item;
  }

  addButton(name, label, autoMap = true) {
    const button = new EditorButton_EditorButton(this.data, `${this.name}_${name}`, name, label, autoMap);
    this.children.push(button);
    this.childrenGroup.append(button.element);
    return button;
  }

  toggleCollapse() {
    this.updateCollapse(!this.collapsed);
  }

  duplicate(){
    const newname=this.title+'.1'
    const clone = structuredClone(this.data)
    this.parentData[newname]=clone
    const code = document.getElementById("code");
    code.innerText = JSON.stringify(data, null, 4);
  }

  updateCollapse(collapsed) {
    super.updateCollapse(collapsed);
    this.setCollapse();
  }

  setCollapse() {
    if (this.collapsed) {
      this.childrenGroup.style.display = "none";
      this.collapseButton.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>';
    } else {
      this.childrenGroup.style.display = "block";
      this.collapseButton.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
    }

    for (const child of this.children) {
      if (!(child instanceof EditorGroup_EditorGroup) && !this.collapsed || this.collapsed) {
        child.updateCollapse(this.collapsed);
      }
    }
  }

  
  change(changeHandler) {
    this.changeHandler = changeHandler;
    return this;
  }

  changeEventHandler(e) {
    const obj = this.parentData;
    console.log(obj)

      if (this.title !== e.target.value) {
        delete Object.assign(obj, {[e.target.value]: obj[this.title] })[this.title];
        this.title = e.target.value
        this.duplicateButton.dataset.name=this.title
    }
    if(this.changeHandler)this.changeHandler(this.value)
    console.log(obj)
  }

}
// CONCATENATED MODULE: ./dist/js/Editors/index.js









/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editor; });
/* harmony import */ var _Editors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

class Editor {
  constructor(id, name, data) {
    if (data === null || data === undefined) {
      throw new Error("No valid data argument");
    }

    this.themeSelect = document.createElement("select");
    this.themeSelect.addEventListener("change", () => {
      this.theme(this.themeSelect.value);
    });
    this._themes = [];
    this.addTheme("blue");
    this.addTheme("dark");
    this.addTheme("green");
    this.addTheme("light");
    this.addTheme("neu-dark");
    this.addTheme("neu-light");
    this.addTheme("red");
    this.root = _Editors__WEBPACK_IMPORTED_MODULE_0__[/* EditorGroup */ "d"].createRoot(`${id}_editor`, name, data, document.body, this.themeSelect);
    const rootTitle = this.root.element.querySelector(".editor-item-title");
    const rootName = rootTitle === null || rootTitle === void 0 ? void 0 : rootTitle.querySelector(".editor-item-name");
    const rootNameB = rootTitle === null || rootTitle === void 0 ? void 0 : rootTitle.querySelector("b");
    let initialX = 0,
        initialY = 0,
        currentX = 0,
        currentY = 0,
        offsetX = 0,
        offsetY = 0;
    rootTitle === null || rootTitle === void 0 ? void 0 : rootTitle.addEventListener("mousedown", downEvent => {
      if (downEvent.target !== rootName && downEvent.target !== rootTitle && downEvent.target !== rootNameB) {
        return;
      }

      downEvent.preventDefault();
      initialX = downEvent.clientX - offsetX;
      initialY = downEvent.clientY - offsetY;
      rootTitle.classList.add("dragging");

      document.onmouseup = () => {
        document.onmouseup = null;
        document.onmousemove = null;
        initialX = currentX;
        initialY = currentY;
        rootTitle.classList.remove("dragging");
      };

      document.onmousemove = moveEvent => {
        moveEvent.preventDefault();
        currentX = moveEvent.clientX - initialX;
        currentY = moveEvent.clientY - initialY;
        offsetX = currentX;
        offsetY = currentY;
        this.root.element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      };
    });
    this.root.element.classList.add("editor-root");
    this.customize();
    this.top().right().theme("light");
  }

  top() {
    this.root.element.classList.remove("editor-bottom");
    this.root.element.classList.add("editor-top");
    return this;
  }

  bottom() {
    this.root.element.classList.remove("editor-top");
    this.root.element.classList.add("editor-bottom");
    return this;
  }

  left() {
    this.root.element.classList.remove("editor-right");
    this.root.element.classList.add("editor-left");
    return this;
  }

  right() {
    this.root.element.classList.remove("editor-left");
    this.root.element.classList.add("editor-right");
    return this;
  }

  theme(theme) {
    if (theme === this.currentTheme) {
      return;
    }

    this.root.element.classList.forEach(t => {
      if (t.startsWith("editor-theme-")) {
        this.root.element.classList.remove(t);
      }
    });
    this.themeSelect.value = theme;

    for (let i = 0; i < this.themeSelect.options.length; i++) {
      const option = this.themeSelect.options.item(i);

      if (option) {
        option.selected = option.value === this.themeSelect.value;
      }
    }

    this.root.element.classList.add(`editor-theme-${theme}`);
    this.currentTheme = theme;
  }

  addTheme(theme) {
    const option = document.createElement("option");
    option.value = theme;
    option.text = theme;
    option.selected = theme === this.themeSelect.value;
    this.themeSelect.options.add(option);
  }

  themes() {
    return this._themes;
  }

  customize() {}

}

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _Editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorButton", function() { return _Editors__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorCheckboxInput", function() { return _Editors__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorColorInput", function() { return _Editors__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorGroup", function() { return _Editors__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorItem", function() { return _Editors__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorNumberInput", function() { return _Editors__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorSelectInput", function() { return _Editors__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorStringInput", function() { return _Editors__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony import */ var _Enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorType", function() { return _Enums__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Interfaces__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Interfaces__WEBPACK_IMPORTED_MODULE_3__) if(["default","Editor","EditorButton","EditorCheckboxInput","EditorColorInput","EditorGroup","EditorItem","EditorNumberInput","EditorSelectInput","EditorStringInput","EditorType"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Interfaces__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Types__WEBPACK_IMPORTED_MODULE_4__) if(["default","Editor","EditorButton","EditorCheckboxInput","EditorColorInput","EditorGroup","EditorItem","EditorNumberInput","EditorSelectInput","EditorStringInput","EditorType"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Types__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorUtils", function() { return _Utils__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _Utils__WEBPACK_IMPORTED_MODULE_5__["b"]; });








/***/ })
/******/ ]);
});