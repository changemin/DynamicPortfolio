import React from 'react';
import styled from 'styled-components';
import { FacebookSquare, GithubSquare, Instagram } from 'styled-icons/fa-brands';

function Footer() {
    return (
        <StyledFooter>
            <IconContainer>
                <a href={Links.facebook} target="_blank"><FacebookSquare size={IconStyle.size} color={IconStyle.color.facebook}/></a>
                <a href={Links.github}><GithubSquare size={IconStyle.size} color={IconStyle.color.github}/></a>
                <a href={Links.instagram}><Instagram size={IconStyle.size} color={IconStyle.color.instagram}/></a>
            </IconContainer>
            <StyleText>&copy;2020, Made by Byun Kyung Min&#127924;</StyleText>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    position: fixed;
    left: 5%;
    bottom: 5%;
    height: 5vh;
    width: 90%;
    background-color: inherit;
    color: white;
    text-align: center;
`
const IconContainer = styled.div`
    border: 10px;
    float:left;
    margin-left:5%;
`

const StyleText = styled.p`
    font-family: consolas,sans-serif;
    font-size: 15px;
    word-spacing: -4px;
    color: #787878;
    float: right;
`
const Links = {
    facebook:"//facebook.com/bkm.change.min",
    github:"//github.com/Changemin",
    instagram:"//instagram.com/bkm.chage.min"
}
const IconStyle = {
    size:"7vmin",
    color:{
        facebook:"#3b5998",
        github:"#333",
        instagram:"#e1306c"
    }
}

export default Footer
