import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import AboutImg from '../Contents/About.png';
import styled from 'styled-components';

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
            glareEnable={true}
            lareMaxOpacity={1}
        >
            <AboutStyle src={AboutImg} className="inner-element" alt="pic" />
        </Tilt>
        
    )
}

const AboutStyle = styled.img`
    margin-top: 2em;
    width: 40em;
`