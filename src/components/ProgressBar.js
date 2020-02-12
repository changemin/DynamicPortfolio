import React, { Component } from 'react'
import styled from 'styled-components'
import { FacebookSquare, GithubSquare, Instagram } from 'styled-icons/fa-brands';

export default class Progress extends Component {
  state = { 
    percent: this.props.percent,
    color: this.props.color
  }
  render() {
    return (
      <Container>
        <ProgressBar>
          <Filler percent={this.state.percent} color={this.state.color} />
        </ProgressBar>
      </Container>
    )
  }
}

const Container = styled.div`
  box-align:middle;
`

const Filler = styled.div`
  background: ${props => props.color};
  height: 100%;
  width: ${props => props.percent}%;
  border-radius: inherit;
  transition: width .2s ease-in;
`

const ProgressBar = styled.div`
  margin: 20px auto;
  background: #f9f9f9;
  position: relative;
  height: 15px;
  width: 75%;
  border-radius: 50px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
`