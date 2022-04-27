import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
    React.createElement("div", {}, [
        React.createElement("p", {}, [
            React.createElement("h1", {}, "Hello All"),
            React.createElement("div", {}, [
                React.createElement("h2", {}, "Welcome")
            ])
        ]),
        React.createElement("section", {}, [
            React.createElement("div", {}, "This is Sample Data")
        ])
    ]), document.getElementById("root")
);

// <div>
//     <p>
//         <h1>Hello All</h1>
//         <div>
//             <h2>Welcome</h2>
//         </div>
//     </p>
// 
//     <section>
//         <div>This is Sample Data</div>
//     </section>
// </div>