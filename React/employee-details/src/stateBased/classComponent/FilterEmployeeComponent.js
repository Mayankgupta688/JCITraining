import React from 'react';

export default class FilterEmployeeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: ""
        }
    }

    updateText = (event) => {
        this.setState({
            filterText: event.target.value
        })

        this.props.filterData(event.target.value)
    }

    render() {
        return (
            <div>
                <ChildComponent updateText={this.updateText} filterText={this.state.filterText} />
            </div>
        )
    }
}

function ChildComponent(props) {
    debugger;
    return (
        <div>
            Filter Text: <input type="text" onChange={props.updateText} value={props.filterText} />
        </div>
    )
}