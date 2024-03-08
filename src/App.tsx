import styled from "styled-components";
import Cercle from "./Cercle";
import PropsEx from "./PropsEx";

function App() {
  return (
    <div>
      <Cercle bgColor="pink" borderColor="black" />
      <Cercle bgColor="black" />
      <Cercle bgColor="skyblue" text="hello?" />
      <PropsEx />
    </div>
  );
}

export default App;
