import styled from "styled-components";

interface ButtonPorops {
  onClick: void;
}

const onClick = () => {
  console.log(sayHello({ name: "kimgoat", age: 23 }));
};

const Button = styled.button`
  width: 300px;
  height: 40px;
`;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old. Nice to meet you`;

export default function PropsEx() {
  return <Button onClick={onClick}> click then open console</Button>;
}
