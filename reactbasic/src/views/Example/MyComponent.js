import React from "react";

class MyComponent extends React.Component {
    // khai bao state
    state = {
        name: "TantripcState",
        age: 30
    }
    handleOnchangeName = (event) => {
        this.setState({ name: event.target.value });
    }
    HandleClick = (event) => {
        this.setState({ age: this.state.age + 1 });
        //alert(this.state.age);
    }


    render() {
        // declare variable    
        return (
            <>
                <input value={this.state.name} type="text" onChange={(event) => this.handleOnchangeName(event)} />
                <div>My Component js - {this.state.name}</div>
                <div>
                    Name: {this.state.name} <br />
                    Age: {this.state.age}
                </div>
                <div className="btn-container">
                    <button type="button" onClick={(event) => this.HandleClick(event)}>Click di!</button>
                </div>
            </>
        )
    }
}

export default MyComponent;