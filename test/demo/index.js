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
        } else if (key === "style") {
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
    } else if (typeof child !== "string" && (child == null ? void 0 : child.nodeType) === 1) {
      parent.appendChild(child);
    } else if (typeof child === "string") {
      parent.appendChild(document.createTextNode(child));
    }
  };
  var createElement_default = createElement;

  // test/demo/index.tsx
  var Button = () => {
    return /* @__PURE__ */ createElement_default("button", {
      onClick: () => alert("Clicked!"),
      style: {
        height: "50px",
        width: "200px",
        backgroundColor: "white",
        color: "black",
        fontSize: "24px"
      }
    }, "Click me!");
  };
  document.getElementById("root").appendChild(Button());
})();
