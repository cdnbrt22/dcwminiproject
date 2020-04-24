import React, { useEffeact, useState } from "react";
import { Link, withRouter } from "react-router-dom";


const Navbar = (props) => {
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <il><Link href="/">The traveler</Link></il>
                </ul>

                <ul>
                    <il><Link href="/create">New post</Link></il>
                </ul>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);