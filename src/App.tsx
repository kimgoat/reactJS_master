import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Btn = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.btnColor};
  border: 0;
  border-radius: 20px;
  width: 100px;
  height: 30px;
`;

function App() {
  return (
    <Container>
      <H1>Hello?</H1>
      <Btn>✋ 안녕</Btn>
    </Container>
  );
}

export default App;
