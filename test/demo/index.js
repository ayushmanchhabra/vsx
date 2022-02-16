(() => {
  // src/createElement.ts
  var createElement = (tag, props, ...children) => {
    if (typeof tag !== "string") {
      return tag();
    }
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
  var createElement_default = createElement;

  // src/index.ts
  var JSX = {
    createElement: createElement_default
  };
  var src_default = JSX;

  // test/demo/index.tsx
  var FooChild = () => /* @__PURE__ */ src_default.createElement("div", null, "Child");
  var Foo = () => {
    return /* @__PURE__ */ src_default.createElement("div", null, "Parent", /* @__PURE__ */ src_default.createElement(FooChild, null));
  };
  document.getElementById("root").appendChild(Foo());
})();
