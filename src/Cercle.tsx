import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CercleProps {
  bgColor: string;
}

function Cercle({ bgColor }: CercleProps) {
  return <Container bgColor={bgColor}></Container>;
}

export default Cercle;
