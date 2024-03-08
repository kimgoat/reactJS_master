import styled from "styled-components";

const Container = styled.div<CercleProps>`
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
