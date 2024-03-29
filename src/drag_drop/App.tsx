import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { toDoStste2 } from "./atoms";
import { useRecoilState } from "recoil";
import Board from "./Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export default function App() {
  const [toDos, setToDos] = useRecoilState(toDoStste2);

  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    } else {
      // cross board movement.
      if (!destination) return;
      setToDos((allBoards) => {
        const prevBoard = [...allBoards[source.droppableId]];
        const taskObj = prevBoard[source.index];
        prevBoard.splice(source.index, 1);

        const headBoard = [...allBoards[destination?.droppableId]];
        headBoard.splice(destination?.index, 0, taskObj);

        return {
          ...allBoards,
          [destination?.droppableId]: headBoard,
          [source.droppableId]: prevBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board toDos={toDos[boardId]} boardId={boardId} key={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
