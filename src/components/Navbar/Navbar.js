import React, { useEffeact, useState } from "react";
import { Link, withRouter } from "react-router-dom";


const Navbar = (props) => {
    return(
        <nav className="nav">
            <ul>
            <li><Link to="/">The traveler</Link></li>

            </ul>
            <ul>
            <li><Link to="/create">New post</Link></li>

            </ul>
        </nav>
    )
}

export default withRouter(Navbar);