import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProjectItem extends Component {
    render() {
        const projectInfo = this.props.projectInfo;
        console.log(projectInfo.Name);
        return (
            <Item>
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
    background: gray;
    padding: 10px;
    transition: 0.3s;
    &:hover {
        background: red;
        transition: 0.3s;
    }
    border-radius: 10px;
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