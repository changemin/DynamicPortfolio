import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import AvatarImg from '../content/Avatar.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans2 = (x, y) => `translate3d(${x / 25 + 15}px,${y / 25 - 0}px,0)`
const trans3 = (x, y) => `translate3d(${x / 20 - 10}px,${y / 20 - 0}px,0)`

export default function About() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        // <div>
        //     <Name>변경민</Name>
        //     <Avatar src={AvatarImg} />
        // </div>
        <div>
            <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <div className="Left">
                    <animated.div className="image1" style={{ transform: props.xy.interpolate(trans1) }} >
                        <Avatar src={AvatarImg} />
                    </animated.div>
                    <animated.div className=" image2" style={{ transform: props.xy.interpolate(trans2) }}>
                        <Avatar src={AvatarImg} />
                    </animated.div>
                    <animated.div className="image3" style={{ transform: props.xy.interpolate(trans3) }}>
                        <Avatar src={AvatarImg} />
                    </animated.div>
                </div>
            </div>

        </div>
    )
}

const Avatar = styled.img`
    width: 100px;
`
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