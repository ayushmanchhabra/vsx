var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

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

// dist/index.js
var import_uniqid = __toESM(require_uniqid(), 1);
var m = (t, e, ...r) => {
  if (typeof t != "string" && Array.isArray(t())) {
    let o = new DocumentFragment();
    return o.append(...r), o;
  } else {
    if (typeof t != "string" && !Array.isArray(t()))
      return t();
    if (typeof t == "string") {
      let o = document.createElement(t);
      return e !== null && Object.entries(e).forEach(([a, s]) => {
        if (a.startsWith("on") && a.toLowerCase() in window && o.addEventListener(a.toLowerCase().substring(2), s), a === "style") {
          let n = "";
          for (let i in s)
            n += `${i.replace(/([A-Z])/g, (f) => `-${f[0].toLowerCase()}`)}: ${s[i]};
`;
          o.setAttribute(a, n);
        } else
          o.setAttribute(a, s.toString());
      }), r.forEach((a) => u(o, a)), o;
    } else
      return document.createElement("div");
  }
};
var u = (t, e) => {
  Array.isArray(e) ? e.forEach((r) => u(t, r)) : typeof e == "string" ? t.appendChild(document.createTextNode(e)) : typeof e == "number" ? t.appendChild(document.createTextNode(e.toString())) : (e == null ? void 0 : e.nodeType) === 1 && t.appendChild(e);
};
var l = m;
var c = (t, ...e) => e;
var d = c;
var D = { createElement: l, createFragment: d };

// src/createElement.ts
var createElement = (tag, props, ...children) => {
  if (typeof tag !== "string" && Array.isArray(tag())) {
    const fragment = new DocumentFragment();
    fragment.append(...children);
    return fragment;
  } else if (typeof tag !== "string" && !Array.isArray(tag())) {
    const fn = tag;
    return fn();
  } else if (typeof tag === "string") {
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
  } else {
    const element = document.createElement("div");
    return element;
  }
};
var appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else if (typeof child === "string") {
    parent.appendChild(document.createTextNode(child));
  } else if (typeof child === "number") {
    parent.appendChild(document.createTextNode(child.toString()));
  } else if (child?.nodeType === 1) {
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
var import_uniqid2 = __toESM(require_uniqid(), 1);
var createState = (initialValue) => {
  const type = typeof initialValue;
  const id = (0, import_uniqid2.default)();
  const get = () => {
    if (document.getElementById(id) === null) {
      return {
        key: id,
        value: initialValue
      };
    } else {
      let typedValue = document.getElementById(id)?.innerText;
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

// src/index.ts
var src_default = {
  createElement: createElement_default,
  createFragment: createFragment_default
};

// test/demo/examples/Counter.tsx
var Counter = () => {
  let [count, setCount] = createState_default(0);
  return /* @__PURE__ */ src_default.createElement(src_default.createFragment, null, /* @__PURE__ */ src_default.createElement("button", {
    onClick: () => setCount(count().value - 1)
  }, "-"), /* @__PURE__ */ src_default.createElement("span", {
    id: count().key
  }, count().value), /* @__PURE__ */ src_default.createElement("button", {
    onClick: () => setCount(count().value + 1)
  }, "+"));
};
var Counter_default = Counter;

// test/demo/index.tsx
document.getElementById("root")?.appendChild(/* @__PURE__ */ D.createElement(Counter_default, null));
