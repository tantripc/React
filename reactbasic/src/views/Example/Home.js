import React from "react";
import { Navigate } from "react-router-dom";
import Color from "../HOC/Color";


class Home extends React.Component {
    state = { redirect: false }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ redirect: true });
    //     }, 3000);
    // }
    render() {
        console.log(">>> check props Home:", this.props);
        return (
            <div>Hello WW3 from Homepage - Tantripc!
                {this.state.redirect &&
                    <Navigate replace to="/todos" />
                }
            </div>
        )
    }
}

export default Color(Home);