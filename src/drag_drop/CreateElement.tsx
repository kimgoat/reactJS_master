import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoStste2 } from "./atoms";

interface IFormData {
  toDo: string;
}

interface ICreateElementProps {
  boardId: string;
}
export default function CreateElement({ boardId }: ICreateElementProps) {
  const setToDos = useSetRecoilState(toDoStste2);
  const { register, handleSubmit, setValue } = useForm<IFormData>();

  const onValid = ({ toDo }: IFormData) => {
    // setToDos((oldToDos) => {
    //   console.log([...oldToDos[boardId]]);
    //   const copyBoard = [toDo, ...oldToDos[boardId]];
    //   return {
    //     ...oldToDos,
    //     [boardId]: copyBoard,
    //   };
    // });
    setValue("toDo", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Please write",
          })}
          placeholder={`Write a ${boardId}`}
        />
        <button>Add</button>
      </form>
    </>
  );
}
