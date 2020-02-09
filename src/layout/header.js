import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <Navbar>
            <StyledLink to="/home">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="#">Blog</StyledLink>
        </Navbar>
    )
}

const StyledLink = styled(Link)`
    color:#BCBCBC;
    margin-left: 5%;
    margin-right:5%;
`

const Navbar = styled.div`
    margin-top:5%;
`

export default Header
