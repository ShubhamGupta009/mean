import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css';
const NavLinks = (props) =>{
return (
    <ul className='nav-links'>
        <li><NavLink to = "/">All Users</NavLink></li>
        <li><NavLink to = "/places/new">All Places</NavLink></li>
        <li><NavLink to = "/place/add">Add Place</NavLink></li>
        <li><NavLink to = "/auth">Authieticate</NavLink></li>
    </ul>
)
}
export default NavLinks