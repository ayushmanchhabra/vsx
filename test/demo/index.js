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

  // test/demo/index.tsx
  var isIdUnique = (id) => {
    return false;
  };
  function createState(id, initialValue) {
    if (isIdUnique(id)) {
      throw `Error: id ${id} has already been used. Please use another id.`;
    }
    console.log(this);
    let get = () => {
      if (document.getElementById(id) === null) {
        return initialValue;
      } else {
        return document.getElementById(id).innerText;
      }
    };
    let set = (updatedValue) => {
      if (document.getElementById(id) === null) {
        console.error(`Element with id ${id} does not exist.`);
      } else {
        document.getElementById(id).innerText = updatedValue.toString();
      }
    };
    return [get, set];
  }
  var Counter = () => {
    let [count, setCount] = createState("gkhf78xf3", 0);
    return /* @__PURE__ */ createElement_default("div", null, /* @__PURE__ */ createElement_default("button", {
      onClick: () => setCount(Number(count() - 1))
    }, "-"), /* @__PURE__ */ createElement_default("span", {
      id: "gkhf78xf3"
    }, count()), /* @__PURE__ */ createElement_default("button", {
      onClick: () => setCount(Number(count()) + 1)
    }, "+"));
  };
  document.getElementById("root").appendChild(Counter());
})();
