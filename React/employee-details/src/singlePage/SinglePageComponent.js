import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class SinglePageComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{margin: "10px"}}>
                    <header>
                        <nav>
                            <Link style={{marginRight: "15px"}} to="home">Home</Link>
                            <Link style={{marginRight: "15px"}} to="help">Help</Link>
                            <Link style={{marginRight: "15px"}} to="about">About</Link>
                        </nav><br/><br/><hr/>
                    </header>

                    <content>
                        <h1>This is the common Content Area that would be replaced</h1>
                        
                        <Route exact path="/" component={HomeComponent} />
                        <Route exact path="/home" component={HomeComponent} />
                        <Route exact path="/help" component={HelpComponent} />
                        <Route exact path="/about" component={AboutComponent} />
                        <Route exact path="/employees/:empId" component={EmployeeComponent} />
                        <Route exact path="/employees/:empId/:name" component={EmployeeOtherComponent} />

                    </content><hr/><br/><br/>


                    <footer>
                        <h3>This is Application Footer</h3>
                    </footer>
                </div>
            </BrowserRouter>
        )
    }
}

function HomeComponent(props) {
    debugger;

    var [updatedValue, setUpdateValue] = useState("");

    function redirectPage() {
        props.history.push("/employees/" + updatedValue)
    }

    function updateDataValue(event) {
        setUpdateValue(event.target.value)
    }

    return (
        <div>
            <h2>This is Home Component</h2>
            <input type="text" value={updatedValue} onChange={updateDataValue} />
            <input type="button" onClick={redirectPage} value="Redirect to Employee" />
        </div>
    )
}

function EmployeeComponent(props) {
    return (
        <div>
            <h1>Employee Component {props.match.params.empId}</h1>
            <Route exact path="/employees/1" component={EmployeeOne} />
            <Route exact path="/employees/2" component={EmployeeTwo} />
        </div>
    )
}

function EmployeeOtherComponent(props) {
    debugger;
    return <h1>Employee Component Other {props.match.params.empId} {props.match.params.name}</h1>
}

function HelpComponent() {
    return <h2>This is Help Component</h2>
}

function AboutComponent() {
    return <h2>This is About Component</h2>
}

function EmployeeOne() {
    return <h2>This is Employee One Component</h2>
}

function EmployeeTwo() {
    return <h2>This is Employee Two Component</h2>
}