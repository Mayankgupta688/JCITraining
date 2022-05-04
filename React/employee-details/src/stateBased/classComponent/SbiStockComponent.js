import React from 'react';
import Axios from "axios";

export default class SbiStockComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            sbiStock: 491
        }
        console.log("Constructor")
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        return true;
    }

    render() {
        debugger;
        console.log("Render")
        return <h1>Sbi Stock Value is {this.state.sbiStock}</h1>
    }

    componentDidUpdate() {
        debugger;
        console.log("uPDATE")
    }

    componentDidMount() {
        debugger;
        console.log("mount")
        setTimeout(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) => {
                this.setState({
                    sbiStock: response.data.data.pricecurrent
                })
            })
        }, 5000)
        
    }
}