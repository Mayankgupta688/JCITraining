import React from 'react';
import Axios from "axios";

import { connect } from "react-redux";
import * as actions from "../actions/employeeAction";

class EmployeeListComponent extends React.Component {

    componentDidMount() {
        debugger;
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            this.props.addEmployeeToStore(response.data);
        })
    }

    render() {
        debugger;
        return (
            <>
                <h1>List Of Employees is Given Below:</h1><hr/>
                {this.props.employees.map((employee) => {
                    return <h2>Employee Name is: {employee.name}</h2>
                })}
            </>
        )
    }
}

function mapStoreToProps(store) {
    return {
        employees: store.employees,
        movies: store.movies
    }
}
export var ConnectedComponent = connect(mapStoreToProps, actions)(EmployeeListComponent)
