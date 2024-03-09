import { useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

// interface RouteState {
//   name: string;
// }

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : <h1></h1>}
    </Container>
  );
}
