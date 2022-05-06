import React, { lazy, Suspense } from "react";

export default function AppComponent(props) {
    debugger;

    var ComponentToDisplay = null;

    if(props.data === "1") {
        ComponentToDisplay = lazy(() => import("./ComponentOne"))
    } else if(props.data === "2") {
        ComponentToDisplay = lazy(() => import("./ComponentTwo"))
    }

    return(
        <div>
            <Suspense fallback={<h1>Loading Component</h1>}>
                <ComponentToDisplay></ComponentToDisplay>
            </Suspense>
            
        </div>
    )
} 