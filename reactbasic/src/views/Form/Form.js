import React from "react";
import ChildForm from "./ChildForm";

class Form extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: "job1", title: "Developer", salary: "500$" },
            { id: "job2", title: "Project manager", salary: "1000$" },
            { id: "job3", title: "Testers", salary: "400$" }
        ]
    }

    handleChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }
    handleChangeLastName = (e) => {
        this.setState({ lastName: e.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                Form
                <form>
                    <label>First Name</label><br />
                    <input id="firstName" type="text" value={this.state.firstName} onChange={(e) => this.handleChangeFirstName(e)} /><br /><br />
                    <label>Last Name</label><br />
                    <input id="lastName" type="text" value={this.state.lastName} onChange={(e) => this.handleChangeLastName(e)} /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} value="Submit" />
                </form>
                ChildForm
                <ChildForm name={"Child 1"} age={'30'} arrJobs={this.state.arrJobs} />
            </div>)
    }
}

export default Form;