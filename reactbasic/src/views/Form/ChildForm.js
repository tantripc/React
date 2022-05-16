import React from "react";

class ChildForm extends React.Component {

    render() {
        let { name, age, arrJobs } = this.props;
        return (
            <div>
                Child Form {name} - {age}
                <div className="joblist">
                    {arrJobs.map((item, index) => {
                        return (
                            <div key={item.id} className={" item" + index}>
                                {item.title} - {item.salary}
                            </div>
                        );
                    })}
                </div>
            </div>)
    }
}

export default ChildForm;