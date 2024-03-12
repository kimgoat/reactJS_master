import { useState } from "react";
import { useForm } from "react-hook-form";

/*
export default function ToDoList() {
  const [todo, setTodo] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <>
      <h1>To Do List</h1>

      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="Write a to do" />
        <button> Add</button>
      </form>
    </>
  );
}
*/

export default function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <>
      <h1>To Do List</h1>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("first_name")} placeholder="First Name" />
        <input {...register("last_name")} placeholder="Last Name" />
        <input {...register("user_name")} placeholder="User Name" />
        <input {...register("id")} placeholder="ID" />
        <input {...register("password")} placeholder="Password" />
        <button> Add</button>
      </form>
    </>
  );
}
