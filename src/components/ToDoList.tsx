import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);

  return (
    <>
      <h1>To Do List</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}
