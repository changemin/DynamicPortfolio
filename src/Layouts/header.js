import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import './../App.css'


function Header() {
    return (
        <Navbar>
            <NavItem exact to="/" activeStyle={ActiveStyle} color="#eee236">Home</NavItem>
            <NavItem exact to="/about" activeStyle={ActiveStyle} color="#f19595">About</NavItem>
            <DirectLink href="https://romantic-einstein-5df1ef.netlify.app" color="#71bcf4">Blog</DirectLink>
            <NavItem exact to="/project" activeStyle={ActiveStyle} color="#79F7DE">Project</NavItem>
        </Navbar>
    )
}

const NavItem = styled(NavLink)`
    font-size: 13pt;
    color:${props => props.color ||  "#ABABAB"};
    margin: 1% 1%;
    text-decoration: none;
    opacity: 0.3;
    padding: 8px;
    text-shadow: 4px 4px 5px #fff;
`
const DirectLink = styled.a`
    font-size: 13pt;
    color:${props => props.color ||  "#ABABAB"};
    margin: 1% 1%;
    text-decoration: none;
    opacity: 0.3;
    padding: 8px;
    text-shadow: 4px 4px 5px #fff;
`

const ActiveStyle = {
    opacity:"1.0",
    textShadow: "0px 0px 2px #CDCDCD",
    BorderRadius: "5px",
    Border: "red",
    BackgroundColor: "red"
}

const Navbar = styled.div`
    margin-top:4vmin;
    margin-bottom: 5vmin;
`

export default Header

// #eee236
// #f19595
// #71bcf4
// #79F7DE
