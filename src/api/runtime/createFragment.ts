const createFragment = (
  props: null | { [key: string]: unknown },
  ...children: Array<string | Node>
): Array<string | Node> => {
  return children;
};

export default createFragment;
