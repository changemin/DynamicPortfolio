import React from 'react'
import styled from 'styled-components'
import ProgressBar from '../components/ProgressBar'

export default function About() {
    return (
        <div>
            <Name>변경민</Name>
            <NickName>{hashtag.map(hashtag => "#"+hashtag+" ")}</NickName>
            <StackContainer>
                <legend>&#128170;Stacks&#128170;</legend>
                <hr />
                <ProgressBar percent="25" color="#eee236"/>
                <ProgressBar percent="70" color="#f19595"/>
                <ProgressBar percent="30" color="#71bcf4"/>
                <ProgressBar percent="45" color="#79f7de"/>
            </StackContainer>
            <AwardContainer>
                <legend>&#127942;Awards&#127942;</legend>
                <hr />
                {awards.map(awards => {
                    return <Award>{ awards }</Award>
                })}
            </AwardContainer>
        </div>
    )
}
const Award = styled.li`
    color: #222;
    font-family: 'Spoca Han Sans';
    color: #909090;
    font-size: 13px;
`

const Name = styled.h1`
    color:#222;
    text-shadow: 5px 5px 8px #BCBCBC; 
`

const NickName = styled.p`
    color:#000;
    font-family:  'Gaegu', cursive;
    font-weight: 700;
    word-spacing: -2px;
`
const StackContainer = styled.fieldset`
    float: left;
    width: 45%;
    height: inherit;
    border: 0px;
    /* border: 2px dotted #ABABAB; */
    border-radius: 20px;
`

const AwardContainer = styled(StackContainer)`
    float: right;
`

const hashtag = ["03년생", "웹개발자", "디미고"];

const awards = [
    "고양시 방송 영상 뉴미디어 페스티벌 아이디어톤 최우수상",
    "디미톤(디미고 해커톤) 금상",
    "Angelhack Hackathon LG U+ Challenge 우승!",
    "AI4YOUTH-소셜임팩트 창출을 위한 AI에듀톤",
    "Hello New() World 대상수상!",
    "소셜벤처 경연대회(서울권역) 2등상 수상!"
]