import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProjectItem extends Component {
    render() {
        const projectInfo = this.props.projectInfo;
        console.log(projectInfo.Name);
        return (
            <Item img={ projectInfo.img }>
                <ProjectName>{ projectInfo.name }</ProjectName>
                <Year>{ projectInfo.year }년</Year>
                <Tags>{ projectInfo.tags }</Tags>
                <Description>{ projectInfo.description }</Description>
            </Item>
        )
    }
}
const Item = styled.div`
    display: grid;
    padding: 10px;
    transition: 0.3s;
    /* background-color: rgba(0,0,0,0.4); */
    background-image: url(${props => props.img});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 5px;
    &:hover {
        background-color: rgba(0,0,0,0.05);
        transition: 0.3s;
        box-shadow: 10px 10px 10px rgba(0,0,0,0.3);
    }
`

const ProjectName = styled.h1`
`

const Year = styled.h3`
`

const Tags = styled.p`
    background: white;
    padding: 5px;
    border-radius: 20px;
    width: auto;
`

const Description = styled.p`
`

// PropTypes
ProjectItem.propTypes = {
    projectInfo: PropTypes.array.isRequired
}

export default ProjectItem