import React from 'react';

export default class PureComponent extends React.PureComponent {
    constructor() {
      super();
      this.state = {
        userArray: [1, 2, 3, 4, 5]
      }
    }
    
    render() {
        return (
            <div>
                Array: {this.state.userArray}
                <b>Array Length is: {this.state.userArray.length}</b>
            </div>
        )
    }

    componentDidMount() {
        setInterval(() => {
            this.state.userArray.push(6);
            this.setState({
              userArray: this.state.userArray
            });
            console.log(this.state.userArray)
        }, 1000);
    }
  }