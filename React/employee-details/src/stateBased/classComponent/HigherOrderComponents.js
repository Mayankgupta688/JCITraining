import Axios from "axios";
import React from "react";

function higherOrderComponent(Component, Second) {
    debugger;
    return class DynamicComponent extends React.Component {
        constructor() {
            debugger;
            super();
            this.state = {
                employees: []
            }
        }

        render() {
            debugger;
            return (
                <div>
                    <h1>Employee Details are listed in this component</h1>
                    <Component employees={this.state.employees}></Component>
                    <Second employees={this.state.employees}></Second>
                    <footer>
                        <h2>This is the common Footer</h2>
                    </footer>
                </div>
            )
        }

        componentDidMount() {
            Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
                this.setState({
                    employees: response.data
                })
            })
        }
    }
}


function CountComponent(props) {
    return <h1>Count: {props.employees.length}</h1>
}

class EmployeeListComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.employees.map((employee, index) => {
                    return (
                        <h1>EmployeeName is {employee.name}</h1>
                    )}
                )}
            </div>  
        )
    }
}

    
export default higherOrderComponent(CountComponent, EmployeeListComponent);