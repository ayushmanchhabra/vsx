declare type State = {
    key: string;
    value?: null | boolean | string | number | (() => State) | Element | Element[];
};

declare const createEffect: (fn: () => void, deps: (() => State)[]) => void;

declare const createState: (initialValue: State["value"]) => [() => State, (updatedValue: State["value"]) => void];

declare const _default: {
    createElement: (tag: string | (() => Element | DocumentFragment | (() => (string | Element)[])) | (() => (string | Element | (() => State))[]), props: {
        [key: string]: unknown;
    } | null, ...children: (string | Element | DocumentFragment)[]) => Element | DocumentFragment;
    createFragment: (_: {
        [key: string]: unknown;
    } | null, ...children: (string | Element)[]) => (string | Element)[];
};

export { createEffect, createState, _default as default };
