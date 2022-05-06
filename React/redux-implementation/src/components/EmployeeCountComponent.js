import { connect } from "react-redux";
import React from "react"

class EmployeeCountComponent extends React.Component {

    render() {
        debugger;
        return (
            <React.Fragment>
                <h1>Employee Count is {this.props.employees.length}</h1>
            </React.Fragment>
        )
    }
}

function mapStoreToProps(store) {
    return {
        employees: store.employees
    }
}
export var ConnectedComponent = connect(mapStoreToProps, null)(EmployeeCountComponent)
