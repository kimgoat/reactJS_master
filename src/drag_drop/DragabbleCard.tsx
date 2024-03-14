import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDragabbleCardProps {
  todo: string;
  index: number;
}
function DragabbleCard({ todo, index }: IDragabbleCardProps) {
  //   console.log(todo); // check rendering
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <span>⭐️</span>
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

// export default DragabbleCard; // Before
export default React.memo(DragabbleCard); // After
