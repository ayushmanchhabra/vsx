import VSX from "../../src";

test("for single DOM element", () => {
  const actual = VSX.createElement("div", null);
  const expected = document.createElement("div");
  expect(actual).toStrictEqual(expected);
});

test("for single DOM element with text", () => {
  const actual = VSX.createElement("div", null, "Hello, World!");
  const expected = document.createElement("div");
  expected.textContent = "Hello, World!";
  expect(actual).toStrictEqual(expected);
});

test("for nested DOM elements", () => {
  const actual = VSX.createElement("div", null, VSX.createElement("span", null));
  const expected = document.createElement("div");
  expected.innerHTML = "<span></span>";
  expect(actual).toStrictEqual(expected);
});

test("for nested DOM element with text", () => {
  const actual = VSX.createElement(
    "div",
    null,
    "Hello ",
    VSX.createElement("span", null, "from a span"),
  );
  const expected = document.createElement("div");
  expected.innerHTML = "Hello <span>from a span</span>";
  expect(actual).toStrictEqual(expected);
});

test("for single JSX element", () => {
  // Mimick a custom component foo written as <Foo/> in jsx
  const Foo = () => VSX.createElement("div", null);
  const actual = VSX.createElement(Foo, null);
  const expected = document.createElement("div");
  expect(actual).toStrictEqual(expected);
});

test("for single JSX element with text", () => {
  // Mimick a custom component foo written as <Foo/> in jsx
  const Foo = () => VSX.createElement("div", null, "Hello, World!");
  const actual = VSX.createElement(Foo, null);
  const expected = document.createElement("div");
  expected.textContent = "Hello, World!";
  expect(actual).toStrictEqual(expected);
});

test("for nested JSX elements", () => {
  // Mimick a custom component foo written as <Foo/> in jsx
  const Foo = () => VSX.createElement("div", null);
  const actual = VSX.createElement("div", null, VSX.createElement(Foo, null));
  const expected = document.createElement("div");
  expected.innerHTML = "<div></div>";
  expect(actual).toStrictEqual(expected);
});

test("for nested JSX elements with text", () => {
  // Mimick a custom component foo written as <Foo/> in jsx
  const Foo = () => VSX.createElement("div", null, "Child");
  // Mimick passing Foo as child of a div like so: <div><Foo/></div>
  const actual = VSX.createElement("div", null, "Parent", VSX.createElement(Foo, null));
  const expected = document.createElement("div");
  expected.innerHTML = "Parent<div>Child</div>";
  expect(actual).toStrictEqual(expected);
});

test("for single JSX fragment", () => {
  // Mimick a fragment written as <></>
  const actual = VSX.createElement(() => VSX.createFragment(null), null);
  const expected = new DocumentFragment();
  expect(actual).toStrictEqual(expected);
});

test("for single JSX fragment with text", () => {
  // Mimick a fragment written as <>Hello, World!</>
  const actual = VSX.createElement(
    () => VSX.createFragment(null),
    null,
    "Hello, World!",
  );
  const expected = new DocumentFragment();
  expected.append("Hello, World!");
  expect(actual).toStrictEqual(expected);
});

test("for nested JSX fragments and JSX elements with text", () => {
  const actual = VSX.createElement(
    () => VSX.createFragment(null),
    null,
    VSX.createElement("li", null, "Item 1"),
    VSX.createElement("li", null, "Item 2"),
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
