import styled from "styled-components";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box: Variants = {
  prevInvisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  headInvisible: {
    x: -500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  prevExit: { x: -500, opacity: 0, scale: 0, transition: { duration: 1 } },
  headExit: { x: 500, opacity: 0, scale: 0, transition: { duration: 1 } },
};

function App() {
  const [visible, setVisible] = useState(1);
  const [isNext, setIsNext] = useState(true);
  const nextPlease = () => {
    setIsNext(true);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setIsNext(false);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence>
        <Box
          variants={box}
          initial={isNext ? "prevInvisible" : "headInvisible"}
          animate="visible"
          exit={isNext ? "prevExit" : "headExit"}
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;
