function createRouter(routes: { path: string, element: string }[]) {

    function router(path: string) {
        window.history.pushState({}, '', path);

        routes.forEach(route => {
            if (route.path === path) {
                const root: HTMLElement | null = document.getElementById('root');
                if (root !== null) {
                    root.innerHTML = route.element;
                }
            }
        });
    }

    return router;
}

export default createRouter;
