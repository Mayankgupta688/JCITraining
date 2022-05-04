import React, { useState, useEffect } from "react";

export default function CounterComponent() {
    debugger;
    var [counter, setCounter] = useState(0);

    // Component Did Mount
    useEffect(function() {
        setInterval(() => {
            setCounter((counter) => counter + 1)
        }, 1000)
    }, []);

    useEffect(function() {
        console.log("Console 1")
    }, []);

    useEffect(function() {
        console.log("Console 2")
    }, []);

    useEffect(function() {
        console.log("Component Rerendered....")
    });

    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <input type="button" value="Increment"  />
        </div>
    )
}