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
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    // 필수로 handleSubmit에 넘겨줘야 함
    console.log(data);
  };

  const onInValid = (data: any) => {
    // 필수는 아님
    console.log(formState.errors);
  };
  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /[A-Za-z]{3}/,
              message: "알파벳이 3글자 이상 포함되어야 함(대소문자 구분 x)",
            },
          })}
          placeholder="Email"
        />
        <input
          {...register("first_name", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("last_name", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("user_name", { required: true })}
          placeholder="User Name"
        />
        <input
          {...register("id", {
            required: { value: true, message: "ID를 입력해주세요." },
          })}
          placeholder="ID"
        />
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 10,
              message: "password는 10글자 이상이어야 합니다.",
            },
          })}
          placeholder="Password"
        />
        <button> Add</button>
      </form>
    </>
  );
}
