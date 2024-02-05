import { Component } from "react";
import "./navbar.css";


class navbar extends Component {
    render() {
        return(
            <nav className="nav-items">
                <h1 className="nav-logo">Travel</h1>

                <ul>
                    <li>
                        <a href="/">
                        <i className="fa-solid fa-house"></i>Home
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default navbar;