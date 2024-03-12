import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, catagoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(catagoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Container>
      <div>
        <h1>To Do List</h1>
        <hr />
        <select value={category} onInput={onInput}>
          <option value={Categories.TODO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
        <CreateToDo />
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </div>
    </Container>
  );
}
