declare const createElement: (tag: string | (() => Node) | (() => Array<string | Node>), props: {
    [key: string]: unknown;
} | null, ...children: Array<string | Node>) => Node;

declare const createFragment: (props: {
    [key: string]: unknown;
} | null, ...children: Array<string | Node>) => Array<string | Node>;

declare type Data = null | number | string | boolean | Data[];
interface State {
    key: string;
    value?: Data;
}
declare const createState: (initialValue: Data) => [() => State, (updatedValue: Data) => void];

export { createElement, createFragment, createState };
