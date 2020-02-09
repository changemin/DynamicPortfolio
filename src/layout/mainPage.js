import * as React from 'react';
import styled from 'styled-components';
import useDencrypt from 'use-dencrypt-effect';

function MainPage() {
    return (
        <MainContainer>
            <StyledText>안녕하세요</StyledText>
            <StyledText color="#656565" size="8vmax">{ GenerateDencrypt() }</StyledText>
            <StyledText size="6vmax">변경민입니다</StyledText>
        </MainContainer>
    )
}

const values = ["😀", "배고픈", "웹개발자", "죠리퐁좋아", "기획자"];

const options = {
    chars: ["_"]
}

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

const MainContainer = styled.div`
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
export default MainPage
