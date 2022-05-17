import React from "react";

class Form extends React.Component {

    state = {
        title: "",
        salary: ""
    }

    handleChangetitle = (e) => {
        this.setState({ title: e.target.value });
    }
    handleChangesalary = (e) => {
        this.setState({ salary: e.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        // Check required
        if (!this.state.title || !this.state.salary) {
            alert("Missing required params!");
            return;
        }
        this.props.addNewJob({ id: Math.floor(Math.random() * 1111), title: this.state.title, salary: this.state.salary });

        // Reset input
        this.setState({ title: '', salary: '' });
    }

    render() {
        return (
            <>
                <form>
                    <label>Title job</label><br />
                    <input id="title" type="text" value={this.state.title} onChange={(e) => this.handleChangetitle(e)} /><br /><br />
                    <label>Salary</label><br />
                    <input id="salary" type="text" value={this.state.salary} onChange={(e) => this.handleChangesalary(e)} /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} value="Submit" />
                </form>
            </>
        );
    }
}

export default Form;