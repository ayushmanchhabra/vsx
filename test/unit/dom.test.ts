import { createElement, createFragment } from "../../src";

test("for single DOM element", () => {
  const actual = createElement("div", null);
  const expected = document.createElement("div");
  expect(actual).toStrictEqual(expected);
});

test("for single DOM element with text", () => {
  const actual = createElement("div", null, "Hello, World!");
  const expected = document.createElement("div");
  expected.textContent = "Hello, World!";
  expect(actual).toStrictEqual(expected);
});

test("for nested DOM elements", () => {
  const actual = createElement("div", null, createElement("span", null));
  const expected = document.createElement("div");
  expected.innerHTML = "<span></span>";
  expect(actual).toStrictEqual(expected);
});

test("for nested DOM element with text", () => {
  const actual = createElement(
    "div",
    null,
    "Hello ",
    createElement("span", null, "from a span"),
  );
  const expected = document.createElement("div");
  expected.innerHTML = "Hello <span>from a span</span>";
  expect(actual).toStrictEqual(expected);
});

test("for single JSX element", () => {
  // Mimick a custom component foo written as <Foo/> in jsx
  const Foo = () => createElement("div", null);
  const actual = createElement(Foo, null);
  const expected = document.createElement("div");
  expect(actual).toStrictEqual(expected);
});

test("for single JSX element with text", () => {
  // Mimick a custom component foo written as <Foo/> in jsx
  const Foo = () => createElement("div", null, "Hello, World!");
  const actual = createElement(Foo, null);
  const expected = document.createElement("div");
  expected.textContent = "Hello, World!";
  expect(actual).toStrictEqual(expected);
});

test("for nested JSX elements", () => {
  // Mimick a custom component foo written as <Foo/> in jsx
  const Foo = () => createElement("div", null);
  const actual = createElement("div", null, createElement(Foo, null));
  const expected = document.createElement("div");
  expected.innerHTML = "<div></div>";
  expect(actual).toStrictEqual(expected);
});

test("for nested JSX elements with text", () => {
  // Mimick a custom component foo written as <Foo/> in jsx
  const Foo = () => createElement("div", null, "Child");
  // Mimick passing Foo as child of a div like so: <div><Foo/></div>
  const actual = createElement("div", null, "Parent", createElement(Foo, null));
  const expected = document.createElement("div");
  expected.innerHTML = "Parent<div>Child</div>";
  expect(actual).toStrictEqual(expected);
});

test("for single JSX fragment", () => {
  // Mimick a fragment written as <></>
  const actual = createElement(() => createFragment(null), null);
  const expected = new DocumentFragment();
  expect(actual).toStrictEqual(expected);
});

test("for single JSX fragment with text", () => {
  // Mimick a fragment written as <>Hello, World!</>
  const actual = createElement(
    () => createFragment(null),
    null,
    "Hello, World!",
  );
  const expected = new DocumentFragment();
  expected.append("Hello, World!");
  expect(actual).toStrictEqual(expected);
});

test("for nested JSX fragments and JSX elements with text", () => {
  const actual = createElement(
    () => createFragment(null),
    null,
    createElement("li", null, "Item 1"),
    createElement("li", null, "Item 2"),
    "Random text",
  );
  const expected = new DocumentFragment();
  const item1 = document.createElement("li");
  item1.textContent = "Item 1";
  const item2 = document.createElement("li");
  item2.textContent = "Item 2";
  expected.append(item1, item2, "Random text");
  expect(actual).toStrictEqual(expected);
});
