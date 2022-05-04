import React from 'react';

export default class DivideNumberByZero extends React.Component {
    constructor() {
        super();
        this.state = {
            numerator: 100,
            denominator: 1,
            value: 100,
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }


    componentDidCatch(err) {
        console.log("Some Error Situation")
    }

    updateValue = (event) => {
        var changedValue = event.target.id;
        this.setState({
            ...this.state,
            [changedValue]: event.target.value
        })
    }

    divideNumber = () => {

        if(this.state.denominator === "0") {
            debugger;
            throw new Error("Divide by Zero Exception");
        }
        
        this.setState({
            ...this.state,
            value: this.state.numerator/this.state.denominator
        })
    }

    render() {
        return (
            <div>
                {this.state.hasError === false && (
                    <div style={{margin: "10px", padding: "10px"}}>
                        Enter Numerator: <input type="text" id="numerator" value={this.state.numerator} onChange={this.updateValue} /><br/><br/>
                        Enter Denominator: <input type="text" id="denominator" value={this.state.denominator} onChange={this.updateValue} /><br/><br/>
                        <h2>Value is {this.state.value}</h2>
                        <input type="button" onClick={this.divideNumber} value="Divide" />
                    </div>
                )}

                {this.state.hasError === true && (
                   <h1>Application has Divide by Zero Error</h1>
                )}
            </div>
        )
    }
}