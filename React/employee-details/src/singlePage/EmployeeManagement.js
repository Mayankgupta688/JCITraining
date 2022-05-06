import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import EmployeeListComponent from "./EmployeeListComponent";
import AddEmployeeComponent from "./AddEmployeeComponent";
import EmployeeInfoComponent from "./EmployeeInfoComponent";

export default class EmployeeManagement extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>This is Employee Management for TechnoFunnel</h1><hr/>

                    <nav>
                        <Link style={{paddingRight: "10px"}} to="">Home Page</Link>
                        <Link style={{paddingRight: "10px"}} to="addemployee">Add Employee</Link>
                    </nav>

                    <main>
                        <Route exact path="/" component={EmployeeListComponent}/>
                        <Route exact path="/addemployee" component={AddEmployeeComponent} />
                        <Route exact path="/employee/:id" component={EmployeeInfoComponent} />
                    </main>


                </div>
            </BrowserRouter>
        )
    }
}