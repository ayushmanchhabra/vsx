import VSX, { createRouter } from "vsx";

function App (): HTMLElement {
 
    const router = createRouter([
        {
            path: '/',
            element: '<span>main</span>'
        },
        {
            path: '/ping',
            element: '<span>pong</span>'
        }
    ]);
    
    return (
        <div>
            <div>
                Hello, World! Is anyone out there?
                <br /><br />
                <button onClick={() => {
                    router('/');
                }}>/ping</button>
            </div>
        </div>
    );
}

document.getElementById("root")?.appendChild(<App />);
