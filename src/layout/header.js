import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <Navbar>
            <StyledLink exact to="../" activeStyle={ActiveStyle}>Home</StyledLink>
            <StyledLink exact to="/about" activeStyle={ActiveStyle}>About</StyledLink>
            <StyledLink exact to="./" activeStyle={ActiveStyle}>Blog</StyledLink>
        </Navbar>
    )
}

const StyledLink = styled(NavLink)`
    color:#BCBCBC;
    margin: 5% 5%;

`

const ActiveStyle = {
    color:"#ff0000"
}

const Navbar = styled.div`
    margin-top:5%;

`

export default Header
