import React from "react";

export default class TimerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increaseCounterState = () => {
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 1
            })

            this.setState({
                counter: this.state.counter + 1
            })

            this.setState({
                counter: this.state.counter + 1
            })
        })
    }

    render() {
        debugger;
        return (
            <div>
                <h2>Counter Value is {this.state.counter}</h2>
                <input type="button" value="Add Counter" onClick={this.increaseCounterState} />
            </div>
        )
    }
}