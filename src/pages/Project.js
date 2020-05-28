import React from 'react'
import ProjectItem from '../components/ProjectItem'
import styled from 'styled-components'

export default function Project() {
    return (
        <div>
            <ProjectContainer>
                { projectInfo.map((projectInfo)=>(
                    <ProjectItem projectInfo={projectInfo} />
                )) }
            </ProjectContainer>
        </div> 
    )
}

const projectInfo = [
    {
        "name":"후라이까지마임마",
        "year":"2019",
        "tags":"IT소셜벤처",
        "img":"",
        "description":"이거슨 첫번째 프로젝트 헬로우입네다"
    },
    {
        "name":"React 포트폴리오",
        "year":"2020",
        "tags":"React",
        "img":"",
        "description":"지금 보고 있는 이 사이트 말입네다"
    },
    {
        "name":"Luminous",
        "year":"2019",
        "tags":"IT소셜벤처",
        "img":"",
        "description":"신체장애인을 위한 독서보조도구"
    },
    {
        "name":"Luminous",
        "year":"2019",
        "tags":"IT소셜벤처",
        "img":"",
        "description":"신체장애인을 위한 독서보조도구"
    },
    {
        "name":"Luminous",
        "year":"2019",
        "tags":"IT소셜벤처",
        "img":"",
        "description":"신체장애인을 위한 독서보조도구"
    }
]

const ProjectContainer = styled.div`
    display: inline-grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    margin-bottom: 15vmin;
`