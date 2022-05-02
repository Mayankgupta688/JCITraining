import React from "react";

export default class TimerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            time: this.showTime(),
            counter: 0,
            name: "A",
            age: 10,
            designation: "AA",
            salary: 1
        }
    }

    increaseCounter = () => {
        debugger;
        console.time("Mayank")
        for(let i = 0; i < 10000; i++) {
            this.setState({
                ...this.state,
                counter: i
            })
        }
        console.timeEnd("Mayank")
    }

    increaseCounterState = () => {
        debugger;
        this.setState({
            counter: this.state.counter + 1,
            name: "B"
        })

        this.setState({
            counter: this.state.counter + 1,
            age: 11
        })

        this.setState({
            counter: this.state.counter + 1,
            salary: 22
        })

        this.setState({
            counter: this.state.counter + 1,
            designation: "sdfjdskf"
        })
    }
    
    showTime = () => {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    render() {
        return (
            <div>
                <h1>Current Updated Time is {this.state.time}</h1>
                <h2>Counter Value is {this.state.counter}</h2>
                <h2>Counter Value is {this.state.name}</h2>
                <h2>Counter Value is {this.state.age}</h2>
                <h2>Counter Value is {this.state.designation}</h2>
                <h2>Counter Value is {this.state.salary}</h2>
                <input type="button" value="Add Counter" onClick={this.increaseCounter} />
                <input type="button" value="Add Counter" onClick={this.increaseCounterState} />
            </div>
        )
    }

    componentDidMount() {
        // debugger;
        // setInterval(() => {
        //     this.setState({
        //         time: this.showTime()
        //     })
        //     console.log(this.state.time)
        // }, 1000)
    }
}