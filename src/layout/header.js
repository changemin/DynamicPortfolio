import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header style={headerStyle}>
            <Link to="/home" style={linkStyle}>Home</Link> | 
            <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

// const styledHeader = styled.header`
//     background-color: #ff0000;
//     color: #fff;
//     text-align: center;
//     padding: 10px;
// `

const headerStyle = {
    background:"#333",
    color:"#fff",
    padding: "10px"
}
const linkStyle = {
    color:'#fff',
    textDecoration:'none'
}

export default Header
