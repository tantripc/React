import React from "react";
import "./ChildForm.scss";
class ChildForm extends React.Component {
    state = { showJobs: false }

    handleShowHide = () => {
        this.setState({ showJobs: !this.state.showJobs })
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                Toan tu ?
                {!showJobs ?
                    <div><button
                        className="btn-show"
                        onClick={() => this.handleShowHide()}
                    >
                        Show
                    </button></div>
                    :
                    <>
                        <div className="joblist">
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id} className={" item" + index}>
                                        {item.title} - {item.salary}
                                        <button onClick={() => this.props.deleteJob(item)}>X</button>
                                    </div>
                                );
                            })}
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>)
    }
}

// const ChildForm = (props) => {
//     console.log(">>>>> check props: ", props);
//     let { arrJobs } = props;
//     return (
//         <div>Function Component - {props.name}
//             {
//                 arrJobs.map((item, index) => {
//                     if (item.salary >= 500)
//                         return (
//                             <div key={item.id}>{index + 1}. {item.title} - {item.salary}$</div>
//                         );
//                 })
//             }
//         </div>
//     );
// }
export default ChildForm;