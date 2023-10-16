import VSX, { createState } from "../../src";

import { test, expect } from "vitest";

// initial state -> getter, setter -> element at id

test("for initial state as null", () => {
  let [state] = createState(null);
  const actual = state().value;
  const expected = null;
  expect(actual).toEqual(expected);
});

test("for initial state as number", () => {
  let [state] = createState(0);
  const actual = state().value;
  const expected = 0;
  expect(actual).toEqual(expected);
});

test("for initial state as string", () => {
  let [state] = createState("Hello, World");
  const actual = state().value;
  const expected = "Hello, World";
  expect(actual).toEqual(expected);
});

test("for initial state as boolean", () => {
  let [state] = createState(false);
  const actual = state().value;
  const expected = false;
  expect(actual).toEqual(expected);
});

test("for initial state as boolean", () => {
  let [state] = createState(false);
  const actual = state().value;
  const expected = false;
  expect(actual).toEqual(expected);
});

test("for error thrown when setter is called but state value is not attached to dom node", () => {
  let [state, setState] = createState(false);
  expect(() => setState(true)).toThrow(
    `Element with id ${state().key} does not exist.`,
  );
});

test("for correct boolean value on state change", () => {
  const [state, setState] = createState(false);
  const button = VSX.createElement("button", {
    id: state().key,
    onClick: () => setState(true),
  });
  document.body.appendChild(button);
  const mockButton = document.getElementById(state().key);
  if (mockButton !== null) {
    mockButton.click();
  }
  expect(state().value).toEqual(true);
});
