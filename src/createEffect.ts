const createEffect = (fn: () => void, deps: string[]): void => {
  window.onload = () => {
    if (Array.isArray(deps) && deps.length === 0) {
      fn();
    } else {
      for (const dep of deps) {
        const target = document.getElementById(dep) as Node;
        const config = { attributes: true, childList: true, subtree: true };
        const callback = (mutations) => {
          //eslint-disable-next-line
          for (const mutation of mutations) {
            fn();
          }
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);
      }
    }
  };
};

export default createEffect;
