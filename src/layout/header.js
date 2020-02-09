import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import './../App.css'


function Header() {
    return (
        <Navbar>
            <NavItem exact to="/" activeStyle={ActiveStyle} color="#eee236">Home</NavItem>
            <NavItem exact to="/about" activeStyle={ActiveStyle} color="#f19595">About</NavItem>
            <NavItem exact to="/blog" activeStyle={ActiveStyle} color="#71bcf4">Blog</NavItem>
        </Navbar>
    )
}

const NavItem = styled(NavLink)`
    color:${props => props.color || "#ABABAB"};
    margin: 5% 5%;
    text-decoration: none;
    opacity: 0.3;
    padding: 8px;
    text-shadow: 4px 4px 5px #fff;
`

const ActiveStyle = {
    opacity:"1.0",
    textShadow: "0px 0px 2px #CDCDCD"
}

const Navbar = styled.div`
    margin-top:5%;

`

export default Header

// #eee236
// #f19595
// #71bcf4
