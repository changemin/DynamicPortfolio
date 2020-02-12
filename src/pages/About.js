import React from 'react'
import styled from 'styled-components'
import ProgressBar from '../components/ProgressBar'

export default function About() {
    return (
        <div>
            <Name>변경민</Name>
            <NickName>{hashtag.map(hashtag => "#"+hashtag+" ")}</NickName>
            <Stacks>
                <legend>&#128170;Stacks&#128170;</legend>
                <ProgressBar percent="25" color="#eee236"/>
                <ProgressBar percent="70" color="#f19595"/>
                <ProgressBar percent="30" color="#71bcf4"/>
                <ProgressBar percent="45" color="#79f7de"/>
            </Stacks>
            <Awards>
                <legend>&#127942;Awards&#127942;</legend>
                <Award>디미톤 금상</Award>
            </Awards>
        </div>
    )
}
const Award = styled.p`
    color: #222;
    font-family: 'Jua';
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
const Stacks = styled.fieldset`
    float: left;
    width: 45%;
    height: inherit;
    border: 2px dotted #303030;
    border-radius: 5px;
`

const Awards = styled(Stacks)`
    float: right;
`

const hashtag = ["03년생", "웹개발자", "디미고"];