import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.div``;

function Root() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Root;
