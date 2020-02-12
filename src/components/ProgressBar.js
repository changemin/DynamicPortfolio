import React, { Component } from 'react'
import styled from 'styled-components'

export default class ProgressExampleIndicating extends Component {
  state = { percent: this.props.percent }
  render() {
    return (
      <ProgressBar>
        <Filler percent={this.state.percent} indicating />
      </ProgressBar>
    )
  }
}

const Filler = styled.div`
  background: #1DA598;
  height: 100%;
  width: ${props => props.percent}%;
  border-radius: inherit;
  transition: width .2s ease-in;
`

const ProgressBar = styled.div`
  position: relative;
  height: 20px;
  width: 350px;
  border-radius: 50px;
  border: 1px solid #333;
`