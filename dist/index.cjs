var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createEffect: () => createEffect_default,
  createState: () => createState_default,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/api/state/createEffect.ts
var createEffect = (fn, deps) => {
  window.onload = () => {
    if (Array.isArray(deps) && deps.length === 0) {
      fn();
    } else {
      for (const dep of deps) {
        const target = document.getElementById(dep().key);
        const config = { attributes: true, childList: true, subtree: true };
        const callback = (mutations) => {
          for (const mutation of mutations) {
            fn();
          }
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);
      }
    }
  };
};
var createEffect_default = createEffect;

// src/api/runtime/createElement.ts
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
            style += `${obj.replace(
              /([A-Z])/g,
              (g) => `-${g[0].toLowerCase()}`
            )}: ${value[obj]};
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
  } else if (typeof child === "boolean") {
    parent.appendChild(document.createElement(child.toString()));
  } else if (typeof child === "string") {
    parent.appendChild(document.createTextNode(child));
  } else if (typeof child === "number") {
    parent.appendChild(document.createTextNode(child.toString()));
  } else if (typeof child === "function") {
    parent.id = child().key;
    appendChild(parent, child().value);
  } else if (child?.nodeType === 1) {
    parent.appendChild(child);
  }
};
var createElement_default = createElement;

// src/api/runtime/createFragment.ts
var createFragment = (_, ...children) => {
  return children;
};
var createFragment_default = createFragment;

// src/api/state/createState.ts
var import_uniqid = __toESM(require("uniqid"), 1);
var createState = (initialValue) => {
  const type = typeof initialValue;
  const id = (0, import_uniqid.default)();
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createEffect,
  createState
});
