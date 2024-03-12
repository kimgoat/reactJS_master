import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { catagoryState, toDoState } from "../atoms";

interface IFormData {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(catagoryState);
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const onValid = ({ toDo }: IFormData) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </>
  );
}
