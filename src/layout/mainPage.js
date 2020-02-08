import React from 'react';
import styled from 'styled-components';


function MainPage() {
    return (
        <MainContainer>
            <Hello>안녕하세요</Hello>
            <Emoji>&#123; &nbsp;😀&nbsp; &#125;</Emoji>
            <Name>변경민입니다</Name>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width:90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    line-height:11vmin;
`
const Hello = styled.h1`
    color: #454545;
    font-size:7vmax;
    text-shadow: 5px 5px 7px #BCBCBC
`
const Emoji = styled.h1`
    color:#707070;
    font-size:8vmax;
    text-shadow: 5px 5px 7px #BCBCBC
`
const Name = styled.h1`
    color: #454545;
    font-size:6vmax;
    text-shadow: 5px 5px 9px #BCBCBC
`

export default MainPage
