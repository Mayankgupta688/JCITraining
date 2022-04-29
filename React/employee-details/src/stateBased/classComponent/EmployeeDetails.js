import React from "react";
import employeeList from "../../data/employeeList";

import "../../styles/employeeDetailsStyle.css";
export default class EmployeeComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            counter: 0,
            employeeList: employeeList,
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
        })

        for(let i = 0; i< 10000; i++) {
            this.setState({
                ...this.state,
                counter: i
            })
        }

        this.setState({
            ...this.state,
            counter: 0
        })
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
        debugger;
        return (
            <div>
                <div style={{marginTop: "20px", marginLeft: "10px"}}>
                    <button id="black" style={{marginRight: "10px"}} type="button"  className="btn btn-primary" onClick={this.updateTheme} >Black Theme</button>
                    <button id="red" type="button" className="btn btn-primary" onClick={this.updateTheme}>Red Theme</button>
                </div><br/><br/>
                {this.state.employeeList.map((employee) => (
                        <div className="card" key={employee.id} style={{color: this.state.themeColor.textColor, backgroundColor: this.state.themeColor.backgroundColor}}>
                            <img src={employee.avatar} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button style={{marginRight: "10px"}} type="button" id={employee.id} className="btn btn-primary" onClick={this.deleteEmployee}>Delete</button>
                                <button type="button" className="btn btn-primary" onClick={this.addEmployee}>Add</button>
                            </div>
                        </div>
                    )
                )}
            </div>  
        )
    }
}