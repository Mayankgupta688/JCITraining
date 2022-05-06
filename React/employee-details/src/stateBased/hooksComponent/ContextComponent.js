import React, { useState, useContext } from "react";

var appContext = React.createContext()

export default function GrandParent() {
    var [details, setDetails] = useState({
        village: "Delhi"
    });

    return (
        <appContext.Provider value={{details: details, setDetails: setDetails}}>
            <h1>This is Grand Parent {details.village}</h1><hr/>
            <Parent details={details}></Parent>
        </appContext.Provider>
    )
}

function Parent() {
    return (
        <div>
            <h2>This is a Parent Component</h2><hr/>
            <ChildComponent></ChildComponent>
        </div>
    )
}

function ChildComponent() {
    var data = useContext(appContext);
    return (
        <div>
            <h2>This is a Child Component  {data.details.village}</h2><hr/>
            <GrandChildComponent></GrandChildComponent>
        </div>
    )
}

function GrandChildComponent() {

    var data = useContext(appContext);
    return (
        <div>
            <h2>This is a Grand Child Component {data.details.village}</h2><hr/>
            <input type="button" onClick={() => data.setDetails({village: "Haryana"})} value="Change Village" />
        </div>
    )
}