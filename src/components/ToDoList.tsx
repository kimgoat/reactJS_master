import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";

export default function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <>
      <h1>To Do List</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />

      <h2>Doing</h2>
      <ul>
        {doing.map((doing) => (
          <ToDo key={doing.id} {...doing} />
        ))}
      </ul>
      <hr />

      <h2>Done</h2>
      <ul>
        {done.map((done) => (
          <ToDo key={done.id} {...done} />
        ))}
      </ul>
      <hr />
    </>
  );
}
