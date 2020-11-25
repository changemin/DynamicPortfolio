import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import styled from 'styled-components'
import image from '../Contents/Avatar.png'

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

const ProjectContainer = styled.div`
    display: inline-grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    /* margin-bottom: 15vmin; */
    column-count: 3;
`

const projectInfo = [
    
    {
        "name":"디미고인 iOS",
        "year":"2020",
        "tags":"Swift",
        "img": "./content/projects/dimigoin.png",
        "description":"디미고인에서 iOS개발을 담당했습니다"
    },
    {
        "name":"Dr.Daily",
        "year":"2020",
        "tags":"Swift",
        "img":"/content/projects/Dr.Daily.png",
        "description":"내 손안의 주치의, Dr.Daily"
    },
    {
        "name":"Zoom 자동참가 스크립트",
        "year":"2020",
        "tags":"Python",
        "img":"",
        "description":"쉬는시간엔 쉴 수 있게, 자동으로 참가시켜줍니다"
    },
    {
        "name":"React 포트폴리오",
        "year":"2020",
        "tags":"React",
        "img":"",
        "description":"지금 이 사이트요!"
    },
    {
        "name":"Cake",
        "year":"2019",
        "tags":"Arduino",
        "img":"",
        "description":"툭하면 바로, 디미고 실 예약관리 시스템"
    },
    {
        "name":"useMOuse",
        "year":"2019",
        "tags":"C",
        "img":"",
        "description":"마우스를 극도로 활용하라!"
    },
    {
        "name":"단어 챗봇, 와이즈",
        "year":"2019",
        "tags":"Python",
        "img":"",
        "description":"'와이즈'와 함께 단어를 효율적으로 외워보자!"
    },
    {
        "name":"eBook Maker",
        "year":"2019",
        "tags":"Python",
        "img":"",
        "description":"귀찮은 시집만들기 노가다를 대신해줄"
    },
    {
        "name":"Luminous",
        "year":"2019",
        "tags":"IT소셜벤처",
        "img":"",
        "description":"신체장애인을 위한 독서보조도구"
    },
    {
        "name":"MiseAlio",
        "year":"2018",
        "tags":"Arduino",
        "img":"",
        "description":"아름다운 오늘의 미세먼지"
    },
    {
        "name":"One Man Pingpong",
        "year":"2018",
        "tags":"Python",
        "img":"",
        "description":"나 혼자서 즐기는 핑퐁게임"
    }
]
