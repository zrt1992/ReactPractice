import React from "react";

class ReactClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
       // this.handleClick = this.handleClick.bind(this);
    }

    handleClick=() => {
        this.setState(state => ({
            count: this.state.count + 1
        }));
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                {/*<button onClick={()=>{*/}
                {/*    this.setState({ count: this.state.count + 1 })*/}
                {/*}}>*/}
                {/*    Click me*/}
                {/*</button>*/}
                <button onClick={this.handleClick}>
                    Click me
                </button>
            </div>
        );
    }
}

export default ReactClass;

