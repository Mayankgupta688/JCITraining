import React from "react";
import EmployeeDetails from "./EmployeeDetailsFunctional";
import Axios from "axios";

export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            this.setState({
                employees: response.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.employees.map((employee, index) => {
                    return (
                        <EmployeeDetails {...this.props} key={index + 1} employee={employee} ></EmployeeDetails>
                    )}
                )}
            </div>  
        )
    }
}