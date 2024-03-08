import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

interface CercleProps {
  bgColor: string;
  borderColor?: string;
  //   borderColor: string | undefined;
  text?: string;
}

function Cercle({ bgColor, borderColor, text = "default text" }: CercleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Cercle;
