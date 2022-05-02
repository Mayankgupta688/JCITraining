import React from "react";

export default class EmployeeDetails extends React.Component {
    render() {
        return (
            <div className="card" style={{color: this.props.themeColor.textColor, backgroundColor: this.props.themeColor.backgroundColor}}>
                <img src={this.props.employee.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.employee.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button style={{marginRight: "10px"}} type="button" id={this.props.employee.id} onClick={this.props.deleteEmployee} className="btn btn-primary">Delete</button>
                    <button type="button" className="btn btn-primary">Add</button><br/><br/>
                    <input type="text" />
                </div>
            </div>
        )
    }
}