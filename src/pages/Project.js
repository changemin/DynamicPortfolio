import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projectList.map((project) => (
              <Grid item key={project} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.img}
                    title={project.img}
                  />
                  <CardContent className={classes.cardContent}>
                    <img src={project.img}></img>
                  <Typography>
                      { project.year }
                    </Typography>
                    <Typography variant="h5" component="h2">
                      { project.name }
                    </Typography>
                    <Typography>
                      { project.tags }
                    </Typography>
                    <Typography>
                      { project.description }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

const projectList = [
    
    {
        "name":"디미고인 iOS",
        "year":"2020",
        "tags":"Swift",
        "img": "./Contents/Projects/dimigoin.png",
        "description":"디미고인에서 iOS개발을 담당했습니다"
    },
    {
        "name":"Dr.Daily",
        "year":"2020",
        "tags":"Swift",
        "img":"src/Contents/Projects/Dr.Daily.png",
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
