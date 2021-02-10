import React from "react";

class Local extends React.Component {
    render() {
        return (
            <h2 id={this.props.name || 'no'}>Random city named {this.props.name || 'Nowhere'}</h2>
        )
    }
}

export default Local