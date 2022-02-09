(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // dist/index.js
  var require_dist = __commonJS({
    "dist/index.js"(exports, module) {
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __reExport2 = (target, module2, copyDefault, desc) => {
        if (module2 && typeof module2 === "object" || typeof module2 === "function") {
          for (let key of __getOwnPropNames2(module2))
            if (!__hasOwnProp2.call(target, key) && (copyDefault || key !== "default"))
              __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable });
        }
        return target;
      };
      var __toCommonJS = /* @__PURE__ */ ((cache) => {
        return (module2, temp) => {
          return cache && cache.get(module2) || (temp = __reExport2(__markAsModule2({}), module2, 1), cache && cache.set(module2, temp), temp);
        };
      })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
      var src_exports = {};
      __export(src_exports, {
        createElement: () => createElement_default
      });
      var createElement2 = (tag, props, ...children) => {
        const element = document.createElement(tag);
        if (props !== null) {
          Object.entries(props).forEach(([key, value]) => {
            if (key.startsWith("on") && key.toLowerCase() in window) {
              element.addEventListener(key.toLowerCase().substring(2), value);
            } else {
              element.setAttribute(key, value.toString());
            }
          });
        }
        children.forEach((child) => appendChild(element, child));
        return element;
      };
      var appendChild = (parent, child) => {
        if (Array.isArray(child)) {
          child.forEach((nestedChild) => appendChild(parent, nestedChild));
        } else if (typeof child !== "string" && (child == null ? void 0 : child.nodeType) === 1) {
          parent.appendChild(child);
        } else if (typeof child === "string") {
          parent.appendChild(document.createTextNode(child));
        }
      };
      var createElement_default = createElement2;
      module.exports = __toCommonJS(src_exports);
    }
  });

  // test/demo/index.tsx
  var import_dist = __toESM(require_dist());
  var FooChild = () => /* @__PURE__ */ (0, import_dist.createElement)("div", null, "Hello FooBar");
  var Foo = () => {
    return /* @__PURE__ */ (0, import_dist.createElement)("div", null, "Hello Foo", FooChild());
  };
  document.getElementById("root").appendChild(Foo());
})();
