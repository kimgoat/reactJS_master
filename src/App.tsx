import styled from "styled-components";
import Cercle from "./Cercle";
import PropsEx from "./PropsEx";

function App() {
  return (
    <div>
      <Cercle bgColor="pink" />
      <Cercle bgColor="black" />
      <Cercle bgColor="skyblue" />
      <PropsEx />
    </div>
  );
}

export default App;
