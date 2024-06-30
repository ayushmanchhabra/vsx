import React, { createRouter } from "vsx";

function App (): HTMLElement {
 
    const router = createRouter([
        {
            path: '/',
            element: ''
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
                    router('/ping');
                }}>/ping</button>
            </div>
        </div>
    );
}

document.getElementById("root")?.appendChild(<App />);
