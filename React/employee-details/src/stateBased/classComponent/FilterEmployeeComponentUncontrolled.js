import React from 'react';

export default class FilterEmployeeComponent extends React.Component {


    updateText = (event) => {

        this.props.filterData(event.target.value);
    }

    render() {
        return (
            <div>
                Filter Text: <input type="text" onChange={this.updateText}  />
                <input type="button" onClick={this.clearFilter} value="Clear" />
            </div>
        )
    }
}