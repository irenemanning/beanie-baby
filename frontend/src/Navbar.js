import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

const linkStyle = {
    color: "black",
    padding: "4px",
    margin: "4px",
    border: "2px solid black",
    background: "yellow"
}

function Navbar() {
    return (
        <div className="navbar">
            <NavLink
            to="/beaniebabies"
            style={linkStyle}
            >
                Beanie Babies
            </NavLink>
            <NavLink
            to="/collectors"
            style={linkStyle}
            >
                Collectors
            </NavLink>
        </div>
    );
}

export default Navbar;