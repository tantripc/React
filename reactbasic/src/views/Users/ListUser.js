import React from "react";
import axios from "axios";
import { Navigate, NavLink } from "react-router-dom";

class ListUser extends React.Component {
    state = { users: [] };
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users");
        this.setState({ users: res && res.data && res.data.data ? [...res.data.data] : [] });
    }

    render() {
        let { users } = this.state;
        return (
            <div>
                List User
                <div className="userlist">
                    {users && users.length > 0 &&
                        this.state.users.map(
                            (item, index) => {
                                return (
                                    <div key={item.id} className={"useritem item" + index}>
                                        <NavLink to={this.props.baseUrl + "/" + item.id}>
                                            <img src={item.avatar} className="avatar" />
                                            {item.first_name} {item.last_name} - {item.email}
                                        </NavLink>
                                    </div>
                                )
                            }
                        )}
                </div>
            </div>
        )
    }
}

export default ListUser