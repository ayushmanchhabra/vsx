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
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/.pnpm/uniqid@5.4.0/node_modules/uniqid/index.js
var require_uniqid = __commonJS({
  "node_modules/.pnpm/uniqid@5.4.0/node_modules/uniqid/index.js"(exports, module2) {
    var pid = typeof process !== "undefined" && process.pid ? process.pid.toString(36) : "";
    var address = "";
    if (typeof __webpack_require__ !== "function" && typeof require !== "undefined") {
      mac = "", os = require("os");
      if (os.networkInterfaces)
        networkInterfaces = os.networkInterfaces();
      if (networkInterfaces) {
        loop:
          for (let interface_key in networkInterfaces) {
            const networkInterface = networkInterfaces[interface_key];
            const length = networkInterface.length;
            for (i = 0; i < length; i++) {
              if (networkInterface[i] !== void 0 && networkInterface[i].mac && networkInterface[i].mac != "00:00:00:00:00:00") {
                mac = networkInterface[i].mac;
                break loop;
              }
            }
          }
        address = mac ? parseInt(mac.replace(/\:|\D+/gi, "")).toString(36) : "";
      }
    }
    var mac;
    var os;
    var networkInterfaces;
    var i;
    module2.exports = module2.exports.default = function(prefix, suffix) {
      return (prefix ? prefix : "") + address + pid + now().toString(36) + (suffix ? suffix : "");
    };
    module2.exports.process = function(prefix, suffix) {
      return (prefix ? prefix : "") + pid + now().toString(36) + (suffix ? suffix : "");
    };
    module2.exports.time = function(prefix, suffix) {
      return (prefix ? prefix : "") + now().toString(36) + (suffix ? suffix : "");
    };
    function now() {
      var time = Date.now();
      var last = now.last || time;
      return now.last = time > last ? time : last + 1;
    }
  }
});

// dist/index.mjs
var import_uniqid = __toESM(require_uniqid(), 1);
var f = (n, e, ...o) => {
  if (typeof n != "string") {
    if (Array.isArray(n())) {
      let r = new DocumentFragment();
      return r.append(...o), r;
    }
    return n();
  }
  let s = document.createElement(n);
  return e !== null && Object.entries(e).forEach(([r, a]) => {
    if (r.startsWith("on") && r.toLowerCase() in window && s.addEventListener(r.toLowerCase().substring(2), a), r === "style") {
      let t = "";
      for (let l in a)
        t += `${l.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`)}: ${a[l]};
`;
      s.setAttribute(r, t);
    } else
      s.setAttribute(r, a.toString());
  }), o.forEach((r) => d(s, r)), s;
};
var d = (n, e) => {
  Array.isArray(e) ? e.forEach((o) => d(n, o)) : typeof e == "string" ? n.appendChild(document.createTextNode(e)) : typeof e == "number" ? n.appendChild(document.createTextNode(e.toString())) : (e == null ? void 0 : e.nodeType) === 1 && n.appendChild(e);
};
var c = f;

// src/createElement.ts
var createElement = (tag, props, ...children) => {
  if (typeof tag !== "string") {
    if (Array.isArray(tag())) {
      const fragment = new DocumentFragment();
      fragment.append(...children);
      return fragment;
    }
    return tag();
  }
  const element = document.createElement(tag);
  if (props !== null) {
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith("on") && key.toLowerCase() in window) {
        element.addEventListener(key.toLowerCase().substring(2), value);
      }
      if (key === "style") {
        let style = "";
        for (const obj in value) {
          style += `${obj.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)}: ${value[obj]};
`;
        }
        element.setAttribute(key, style);
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
  } else if (typeof child === "string") {
    parent.appendChild(document.createTextNode(child));
  } else if (typeof child === "number") {
    parent.appendChild(document.createTextNode(child.toString()));
  } else if ((child == null ? void 0 : child.nodeType) === 1) {
    parent.appendChild(child);
  }
};
var createElement_default = createElement;

// src/createFragment.ts
var createFragment = (props, ...children) => {
  return children;
};
var createFragment_default = createFragment;

// src/createState.ts
var import_uniqid2 = __toESM(require_uniqid());
var createState = (initialValue) => {
  const type = typeof initialValue;
  const id = (0, import_uniqid2.default)();
  const get = () => {
    var _a;
    if (document.getElementById(id) === null) {
      return {
        key: id,
        value: initialValue
      };
    } else {
      let typedValue = (_a = document.getElementById(id)) == null ? void 0 : _a.innerText;
      switch (type) {
        case "boolean":
          typedValue = typedValue === "true";
          break;
        case "number":
          typedValue = Number(typedValue);
          break;
        case "object":
          if (typedValue === "null") {
            typedValue = null;
          }
          break;
        case "string":
          typedValue = String(typedValue);
          break;
        default:
          break;
      }
      return {
        key: id,
        value: typedValue
      };
    }
  };
  const set = (updatedValue) => {
    const element = document.getElementById(id);
    if (element === null) {
      throw new Error(`Element with id ${id} does not exist.`);
    } else {
      element.innerText = String(updatedValue);
    }
  };
  return [get, set];
};
var createState_default = createState;

// test/demo/examples/Counter.tsx
var Counter = () => {
  let [count, setCount] = createState_default(0);
  return /* @__PURE__ */ createElement_default(createFragment_default, null, /* @__PURE__ */ createElement_default("button", {
    onClick: () => setCount(count().value - 1)
  }, "-"), /* @__PURE__ */ createElement_default("span", {
    id: count().key
  }, count().value), /* @__PURE__ */ createElement_default("button", {
    onClick: () => setCount(count().value + 1)
  }, "+"));
};
var Counter_default = Counter;

// test/demo/index.tsx
document.getElementById("root").appendChild(/* @__PURE__ */ c(Counter_default, null));
