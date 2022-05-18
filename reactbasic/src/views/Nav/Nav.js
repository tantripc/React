import React from 'react';
import "./Nav.scss";
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="active" exact="true">Home</NavLink>
                <NavLink to="/todos" activeclassname="active">Todos</NavLink>
                <NavLink to="/about" activeclassname="active">About</NavLink>
                <NavLink to="/users" activeclassname="active">Users</NavLink>
            </div>
        )
    }
}

export default Nav;