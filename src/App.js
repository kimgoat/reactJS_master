import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: pink;
  animation: ${rotateAnimation} 1s linear infinite;

  span{
    font-size: 100px;
    &:hover{
      font-size: 200px;
    }
  }
/* 
  span:hover{
    font-size: 200px;
  } */
`;

function App() {
  return (
    <Wrapper>
      <Box >
        <span>😆</span>
      </Box>
    </Wrapper>
  );
}

export default App;
