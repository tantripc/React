import React from "react";
import ChildForm from "../Form/ChildForm";
import Form from "../Form/Form";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "job1", title: "Developer", salary: "500" },
            { id: "job2", title: "Project manager", salary: "1000" },
            { id: "job3", title: "Testers", salary: "400" }
        ]
    }

    addNewJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({ arrJobs: currentJobs });
    }
    deleteJob = (job) => {
        this.state.arrJobs.pop(job);
        this.setState({ arrJobs: this.state.arrJobs });
    }

    render() {
        // declare variable    
        return (
            <>
                <Form addNewJob={this.addNewJob} />
                <ChildForm arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
            </>
        )
    }
}

export default MyComponent;