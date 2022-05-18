import axios from "axios";
import React from "react";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users/" + this.props.userId);
        this.setState({ user: res.data.data });
    }
    render() {
        return (
            <div>DetailUser
                {this.state.user.first_name}
            </div>
        )
    }
}

export default DetailUser;