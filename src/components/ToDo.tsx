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
