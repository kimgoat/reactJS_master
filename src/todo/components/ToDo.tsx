import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

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

  const handleDelete = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <>
      <li>
        <span>{text} </span>
        {category !== Categories.TODO && (
          <button name={Categories.TODO} onClick={handleCategory}>
            To Do
          </button>
        )}
        {category !== Categories.DOING && (
          <button name={Categories.DOING} onClick={handleCategory}>
            Doing
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={handleCategory}>
            Done
          </button>
        )}
        <button onClick={handleDelete}>delete</button>
      </li>
    </>
  );
}
