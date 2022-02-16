const createElement = (tag: string | (() => Node), props: null | { [key: string]: any }, ...children: Array<string | Node>): Node => {
  if (typeof tag !== 'string') {
    return tag()
  }

  const element = document.createElement(tag)
  if (props !== null) {
    Object.entries(props).forEach(([key, value]: [string, any]) => {
      if (key.startsWith('on') && key.toLowerCase() in window) {
        element.addEventListener(key.toLowerCase().substring(2), value)
      } else if (key === 'style') {
        let style = ''
        for (const obj in value) {
          style += `${obj.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)}: ${value[obj]};\n`
        }
        element.setAttribute(key, style)
      } else {
        element.setAttribute(key, value.toString())
      }
    })
  }
  children.forEach((child) => appendChild(element, child))

  return element
}

const appendChild = (parent: Node, child: null | string | Node | Node[]): void => {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild))
  } else if (typeof child !== 'string' && child?.nodeType === 1) {
    parent.appendChild(child)
  } else if (typeof child === 'string') {
    parent.appendChild(document.createTextNode(child))
  }
}

export default createElement
