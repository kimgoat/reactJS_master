import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
`;

interface CercleProps {
  bgColor: string;
}

function Cercle({ bgColor }: CercleProps) {
  return <Container color={bgColor}></Container>;
}

export default Cercle;
