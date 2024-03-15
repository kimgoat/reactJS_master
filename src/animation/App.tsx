import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  margin: 10px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const scaleX = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const scaleY = useTransform(y, [300, 0, -300], [2, 1, 0.1]);

  return (
    <Wrapper>
      <Box style={{ x, scaleX }} drag="x" dragSnapToOrigin />
      <Box style={{ y, scaleY }} drag="y" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
