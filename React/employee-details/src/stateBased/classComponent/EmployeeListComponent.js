import React from "react";
import employeeList from "../../data/employeeList";

import EmployeeDetails from "./EmployeeDetailsClass";
import FilterEmployeeComponent from "./FilterEmployeeComponent";

import "../../styles/employeeDetailsStyle.css";
export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            employeeList: employeeList,
            masterList: employeeList,
            themeColor: {
                textColor: "black",
                backgroundColor: "red"
            }
        }
    }

    deleteEmployee = (event) => {
        debugger;
        var newList = this.state.employeeList.filter((employee) => {
            return +employee.id !== +event.target.id
        });

        this.setState({
            employeeList: newList
        });
    }

    filterData = (text) => {
        var newList = this.state.masterList.filter((employee) => {
            return employee.name.indexOf(text) > -1;
        });

        this.setState({
            employeeList: newList
        });
    }

    updateTheme = (event) => {
        this.setState({
            ...this.state,
            themeColor: {
                textColor: event.target.id,
                backgroundColor: this.state.themeColor.backgroundColor === "red" ? "black": "red" 
            }
        })
    }

    render() {
        return (
            <div>
                <div style={{marginTop: "20px", marginLeft: "10px"}}>
                    <button id="black" style={{marginRight: "10px"}} type="button"  className="btn btn-primary" onClick={this.updateTheme} >Black Theme</button>
                    <button id="red" type="button" className="btn btn-primary" onClick={this.updateTheme}>Red Theme</button>
                </div><br/><br/>
                <FilterEmployeeComponent filterData={this.filterData}></FilterEmployeeComponent>
                {this.state.employeeList.map((employee, index) => {
                    return (
                        <EmployeeDetails key={index + 1} deleteEmployee={this.deleteEmployee} employee={employee} themeColor={this.state.themeColor}></EmployeeDetails>
                    )}
                )}
            </div>  
        )
    }
}