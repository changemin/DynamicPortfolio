import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import AvatarImg from '../content/Avatar.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px, ${y / 20}px, 0)`
const trans2 = (x, y) => `translate3d(${x / 25 + 15}px, ${y / 25 - 0}px, 0)`
const trans3 = (x, y) => `translate3d(${x / 20 - 10}px, ${y / 20 - 0}px, 0)`

export default function About() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 600, friction: 140 } }))
    return (
        <AboutWrapper onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div style={{ transform: props.xy.interpolate(trans1) }} >
                
            </animated.div>
            <animated.div style={{transform: props.xy.interpolate(trans2) }}>
                <Avatar src={AvatarImg} />
            </animated.div>
            <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
                <Name>변경민</Name>
            </animated.div>
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
`

const Avatar = styled.img`
    width: 200px;
    -webkit-filter: drop-shadow(5px 5px 8px #BCBCBC);
    filter: drop-shadow(5px 5px 8px #BCBCBC);
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