declare type Data = null | number | string | boolean | Data[];
interface State {
    key: string;
    value?: Data;
}
declare const createState: (initialValue: Data) => [() => State, (updatedValue: Data) => void];

declare const _default: {
    createElement: (tag: string | (() => Node) | (() => (string | Node)[]), props: {
        [key: string]: unknown;
    } | null, ...children: (string | Node)[]) => Node;
    createFragment: (props: {
        [key: string]: unknown;
    } | null, ...children: (string | Node)[]) => (string | Node)[];
};

export { createState, _default as default };
