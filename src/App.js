import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: pink;
`;


function App() {
  return (
    <Container>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default App;
