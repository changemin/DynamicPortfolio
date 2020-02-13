import React from 'react'
import Projects from '../components/Projects'

export default function Project() {
    return (
        <div>
            <Projects projectInfo={projectInfo}/>
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
    }
]