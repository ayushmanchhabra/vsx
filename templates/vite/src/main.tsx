import VSX, { createEffect, createState } from "vsx";

const Counter = (): HTMLElement => {
  let [count, setCount] = createState(0);

  createEffect(() => {
    console.log("Count: ", count().value);
  }, [count]);

  return (
    <>
      <span>Counter</span><br /><br />
      <button onClick={() => setCount((count().value as number) - 1)}>-</button>{" "}
      <span>{count}</span>{" "}
      <button onClick={() => setCount((count().value as number) + 1)}>+</button>
    </>
  );
};

document.getElementById("app")?.appendChild(<Counter />);