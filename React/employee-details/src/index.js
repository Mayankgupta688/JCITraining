import ReactDOM from 'react-dom';
import Component from "./components/ReusableComponent";

var userDetails = {
    userName: "Mayank",
    userAge: 30,
    userDesignation: "Developer"
}

var userDetailsOne = {
    userName: "Ankit",
    userAge: 30,
    userDesignation: "Developer"
}

var userArray = [10, 20, 30, 34]

ReactDOM.render((
    <div>
        <Component userDetails={userDetails} userArray={userArray} randomName="Mayank" randomBoolean="true"></Component>
        <Component userDetails={userDetailsOne} userArray={userArray} randomName="Anshul" randomBoolean="true"></Component>
    </div>
), document.getElementById("root"));

