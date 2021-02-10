import React from "react";

class Greeter extends React.Component {
    render() {
        return (
            <h1 id="diffrent">This is a H1 {this.props.name || "NO"}</h1>
        )
    }
}

export default Greeter