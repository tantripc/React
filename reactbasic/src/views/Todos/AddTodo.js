import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = { title: '' }
    handleAdd = () => {
        console.log(this.state.title);
        // Validate title
        if (!this.state.title) {
            toast.error("Missing title");
            return;
        }
        //create todo
        let todo = { id: Math.floor(Math.random() * 100), title: this.state.title };
        this.props.addTodo(todo);

        // Reset textbox
        this.setState({ title: '' });
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title}
                    onChange={(event) => this.setState({ title: event.target.value })}
                />
                <button className="add" onClick={() => this.handleAdd()}>Add</button>
            </div>
        );
    }
}

export default AddTodo;