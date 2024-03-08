import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: pink;
  background-color: black;
  border: 0;
  border-radius: 20px;
  width: 50px;
`;


function App() {
  return (
    <Container>
      <Btn>Log in</Btn>
      <Btn as="a" href="https://styled-components.com/docs/basics">Log in</Btn>
    </Container>
  );
}

export default App;
