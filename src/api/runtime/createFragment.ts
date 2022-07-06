const createFragment = (
  _: null | { [key: string]: unknown },
  ...children: Array<string | Element>
): Array<string | Element> => {
  return children;
};

export default createFragment;
