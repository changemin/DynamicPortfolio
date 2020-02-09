import * as React from 'react';
import styled from 'styled-components';
import useDencrypt from 'use-dencrypt-effect';
import Sky from 'react-sky';
import triangle from '../res/1.svg'
import line from '../res/2.svg'
import circle from  '../res/3.svg'
import star from '../res/4.svg'
import mainImg from '../res/mainImg.png'

function MainPage() {
    return (
        <MainContainer>
          <Sky
            images={{
              0: triangle,
              1: line,
              2: circle,
              3: star
            }}
            how={10} /* Pass the number of images Sky will render chosing randomly */
            time={3} /* time of animation */
            size={'80px'} /* size of the rendered images */
            background={'palettedvioletred'} /* color of background */
          />
          {/* <Img src={ mainImg }/> */}
          <TextContainer>  
              <StyledText>안녕하세요</StyledText>
              <StyledText color="#656565" size="8vmax">{ GenerateDencrypt() }</StyledText>
              <StyledText size="6vmax">변경민입니다</StyledText>
          </TextContainer>
        </MainContainer>
    )
}

const values = ["😀", "배고픈", "웹개발자", "죠리퐁좋아", "기획자"];

const options = {
    chars: ["_"]
}

const Img = styled.img`
  position: fixed;
  height: 70vmin;
  float: left;
  right: -40px;
  bottom: 0;
`

const MainContainer = styled.div`
`
const TextContainer = styled.div`
    width:90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    line-height:11vmin;
`

const StyledText = styled.h1`
    color: ${props => props.color || "#454545"};
    font-size: ${props => props.size || "7vmax"};
    text-shadow: 5px 5px 8px #BCBCBC;
`

const GenerateDencrypt = () => {
  const { result, dencrypt } = useDencrypt(options);

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2500);

    return () => clearInterval(action);
  }, []);

  return <div>{result}</div>;
};
export default MainPage
