import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
    state = {
        todoList: [
            { id: "1", title: "Doing homework" },
            { id: "2", title: "Making video" },
            { id: "3", title: "Fixing bugs" }
        ],
        editTodo: {}
    }

    addTodo = (todo) => {
        this.setState({ todoList: [...this.state.todoList, todo] });
        toast.success(todo.title + " is added success!")
    }
    deleteTodo = (todo) => {
        this.setState({ todoList: this.state.todoList.filter(td => td.id !== todo.id) });
        toast.success(todo.title + " is deleted!");
    }

    handleEditTodo = (todo) => {
        this.setState({ editTodo: todo });
    }
    handleSaveTodo = (todo) => {
        if (!this.state.editTodo.title) {
            toast.error("Missing tile");
            return;
        }

        let { todoList, editTodo } = { ...this.state };

        let index = todoList.findIndex(td => td.id === todo.id);
        todoList[index].title = editTodo.title;
        this.setState({ todoList: todoList, editTodo: {} });
        toast.success("Updated!");
    }
    handleOnchangeEditTodo = (event) => {
        let editTodo = { ...this.state.editTodo };
        editTodo.title = event.target.value;
        this.setState({ editTodo: editTodo });
    }
    render() {
        let { todoList, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo addTodo={this.addTodo} />
                <div className="list-todo-content">
                    {todoList && todoList.length > 0 &&
                        todoList.map((item, index) => {
                            return (
                                <div key={item.id} className="todo-item">
                                    {isEmptyObj
                                        ? <>
                                            <span>{index + 1} - {item.title}</span>
                                            <button className="edit"
                                                onClick={() => this.handleEditTodo(item)}
                                            >Edit</button>
                                        </>
                                        :
                                        <>
                                            {editTodo.id === item.id
                                                ? <>{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                                    <button className="edit"
                                                        onClick={() => this.handleSaveTodo(item)}
                                                    >Save</button></>
                                                : <span>{index + 1} - {item.title}
                                                    <button className="edit"
                                                        onClick={() => this.handleEditTodo(item)}
                                                    >Edit</button></span>
                                            }

                                        </>

                                    }
                                    <></>
                                    <button className="delete"
                                        onClick={() => this.deleteTodo(item)}>
                                        Delete</button>
                                </div>
                            );
                        })}

                </div>
            </div>
        );
    }
}

export default ListTodo;