import React from 'react'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
import AvatarImg from '../content/Avatar.png'

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={''}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <h1>숫자로 보는 변경민</h1>
                        <p>Section 1 (welcome to fullpage.js)</p>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                    <div className="section">
                        <p>Section 3</p>
                    </div>
                    <div className="section">
                        <p>Section 4</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default function About() {
    return (
        <Fullpage />
    )
}

const AboutWrapper = styled.div`
`

const Name = styled.h1`
    text-align: center;
    position: absolute;
    left: 50%;
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