import React from 'react'
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components'
import Avatar from '../Contents/Avatar.png'
import Background from '../Contents/Background.png'
import AboutImg from '../Contents/About.png'

const options = {
    max: 10,
    perspective: 1000,
    scale: 1.05,
  }

export default function About() {
    return (
        <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            perspective={900}
            scale={1.1}
            transitionSpeed={2000}
            gyroscope={true}
        >
            <AboutStyle src={AboutImg} className="inner-element" alt="pic" />
        </Tilt>
        
    )
}

const AvatarStyle = styled.img `
    width: 20em;
`
const BackgroundStyle = styled.img`
    position: fixed;
    width: 20em;
`

const AboutStyle = styled.img`
    margin-top: 2em;
    width: 40em;
`