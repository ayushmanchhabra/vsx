import State from "../../schema/State";

const createElement = (
  tag: string | (() => Element | DocumentFragment | (() => (string | Element)[])) | (() => Array<string | (() => State) | Element>),
  props: null | { [key: string]: unknown },
  ...children: Array<string | Element | DocumentFragment>
): Element | DocumentFragment => {
  if (typeof tag !== "string" && Array.isArray(tag())) {
    const fragment = new DocumentFragment();
    fragment.append(...children);
    return fragment;
  }
  else if (typeof tag !== "string" && !Array.isArray(tag())) {
    const fn = tag as () => Element;
    return fn();
  } else if (typeof tag === "string") {
    const element = document.createElement(tag);
    if (props !== null) {
      Object.entries(props).forEach(([key, value]: [string, any]) => {
        if (key.startsWith("on") && key.toLowerCase() in window) {
          element.addEventListener(key.toLowerCase().substring(2), value);
        }
        if (key === "style") {
          let style = "";
          for (const obj in value) {
            style += `${obj.replace(
              /([A-Z])/g,
              (g) => `-${g[0].toLowerCase()}`,
            )}: ${value[obj] as string};\n`;
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

const appendChild = (
  parent: Element,
  child?: null | boolean | number | string | (() => State) | Element | Element[] | DocumentFragment,
): void => {
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

export default createElement;
