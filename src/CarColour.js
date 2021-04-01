import React from 'react';
import ApiCall from "./main_pages/ApiCall";

export default class CarColour extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
        this.changeColor = this.changeColor.bind(this);
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
                <p>
                    <ApiCall/>
                </p>
                <button
                    type="button"
                    onClick={()=>this.changeColor(this)}
                >Change color</button>
            </div>
        );
    }
}
