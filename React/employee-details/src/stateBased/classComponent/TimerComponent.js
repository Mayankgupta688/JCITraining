import React from "react";

export default class TimerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            time: this.showTime(),
            userName: "Mayank",
            age: 40,
            designation: "Developer"
        }

        // setInterval(() => {
        //     debugger;
        //     this.state.time = this.showTime();
        //     this.forceUpdate()
        //     console.log(this.state.time)
        // }, 1000)

        setInterval(() => {
            debugger;
            this.setState({
                ...this.state,
                time: this.showTime()
            })
            console.log(this.state.time)
        }, 1000)
    }
    
    showTime() {
        return `Current Updated Time is ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    render() {
        debugger;
        return (
            <div>
                {this.state.time}<br/><br/>
                {this.state.userName}
            </div>
        )
    }
}