import { v4 as uuid } from 'uuid';

function createState<T>(initialValue: T): [
  () => {
    key: string;
    value: T;
  },
  (updatedValue: T) => void,
] {
  const type = typeof initialValue;

  const id: string = uuid();

  const get = (): {
    key: string;
    value: T;
  } => {
    if (document.getElementById(id) === null) {
      return {
        key: id,
        value: initialValue,
      };
    } else {
      const typedValue: string | undefined =
        document.getElementById(id)?.innerText;
      let returnedValue: any = undefined;
      switch (type) {
        case "boolean":
          returnedValue = typedValue === "true";
          break;
        case "number":
          returnedValue = Number(typedValue);
          break;
        case "object":
          if (typedValue === "null") {
            returnedValue = null;
          }
          break;
        case "string":
          returnedValue = String(typedValue);
          break;
        default:
          break;
      }
      return {
        key: id,
        value: returnedValue,
      };
    }
  };

  const set = (updatedValue: T): void => {
    const element = document.getElementById(id);
    if (element === null) {
      throw new Error(`Element with id ${id} does not exist.`);
    } else {
      element.innerText = String(updatedValue);
    }
  };

  return [get, set];
}

export default createState;
