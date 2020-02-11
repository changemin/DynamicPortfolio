import React from 'react'
import styled from 'styled-components'
import ProgressBar from '../components/ProgressBar'

export default function About() {
    return (
        <div>
            <Name>변경민</Name>
            <NickName>{hashtag.map(hashtag => "#"+hashtag+" ")}</NickName>
            <Stacks>
                &#128170;Stakcs&#128170;
                <ProgressBar percentage="1" />
            </Stacks>
            <Awards>
                &#127942;Awards&#127942;
            </Awards>
        </div>
    )
}

const Name = styled.h1`
    color:#222;
    text-shadow: 5px 5px 8px #BCBCBC; 
`

const NickName = styled.p`
    color:#000;
    text-shadow: 2px 2px 5px #BCBCBC;
    font-family:  'Gaegu', cursive;
    font-weight: 700;
    word-spacing: -2px;
`
const Stacks = styled.div`
    float: left;
    width: 50%;
    height: inherit;
`

const Awards = styled.div`
    float: right;
    width: 50%;
    height: inherit;
`

const hashtag = ["03년생", "웹개발자", "디미고"];