import { useForm } from "react-hook-form";

type IFormData = {
  toDo: string;
};

export default function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const onValid = (data: IFormData) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <>
      <h1>To Do List</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}
