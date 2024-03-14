import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ICardProps {
  isDragging: boolean;
}
const Card = styled.div<ICardProps>`
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? props.theme.accentColor : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 10px rgba(0,0,0,0.5)" : "none"};
`;

interface IDragabbleCardProps {
  todo: string;
  index: number;
}
function DragabbleCard({ todo, index }: IDragabbleCardProps) {
  //   console.log(todo); // check rendering
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
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
