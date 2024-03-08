import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vmax;
`;

const rotateAnimation = keyframes`
  /* from{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to{
    transform: rotate(360deg);
    border-radius: 100px;
  } */

  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
    background-color: black;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`
const Emoji = styled.div`
 font-size: 100px;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: pink;
  animation: ${rotateAnimation} 1s linear infinite;

  ${Emoji}{
    &:hover{
      font-size: 200px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box >
        <Emoji>😆</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
