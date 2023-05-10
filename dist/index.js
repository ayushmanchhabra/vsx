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
import uniqid from "uniqid";
var createState = (initialValue) => {
  const type = typeof initialValue;
  const id = uniqid();
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
export {
  createEffect_default as createEffect,
  createState_default as createState,
  src_default as default
};
