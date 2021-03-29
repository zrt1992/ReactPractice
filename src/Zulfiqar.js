import React from 'react';

export default class Zulfiqar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
      //  this.changeColor = this.changeColor.bind(this);
    }
    changeColor = (a) => {
        this.setState({color: "pink"});
      //  this.setState({color: "blue"});
    }
    shoot = (a) => {
        alert(a);
    }
    render() {
        return (
            <div>
                <p>
                    It is a {this.state.color}
                </p>
                <button
                    type="button"
                    onClick={()=>this.changeColor(this)}
                >Change color</button>
            </div>
        );
    }
}
