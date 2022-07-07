type State = {
    key: string,
    value?: null | boolean | string | number | (() => State) | Element | Element[]
};

export default State;