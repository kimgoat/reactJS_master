import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

export default function ToDo({ text, category, id }: IToDo) {
  //   const handleCategory = (newCategory: IToDo["category"]) => {
  //     console.log(newCategory);
  //   };
  const setToDos = useSetRecoilState(toDoState);
  const handleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newTodo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <>
      <li>
        <span>{text} </span>
        {category !== "TO_DO" && (
          <button name="TO_DO" onClick={handleCategory}>
            To Do
          </button>
        )}
        {category !== "DOING" && (
          <button name="DOING" onClick={handleCategory}>
            Doing
          </button>
        )}
        {category !== "DONE" && (
          <button name="DONE" onClick={handleCategory}>
            Done
          </button>
        )}
      </li>
    </>
  );
}
