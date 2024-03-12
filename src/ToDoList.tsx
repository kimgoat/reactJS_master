import { useEffect, useState } from "react";
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

type IFormData = {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  userName: string;
  id: string;
  email: string;
  password: string;
  checkPassword: string;
};

export default function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    // 필수로 handleSubmit에 넘겨줘야 함
    console.log(data);
  };

  const onInValid = (data: any) => {
    // 필수는 아님
    console.log(errors);
  };

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <div>{errors?.email?.message}</div>
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("userName", { required: true })}
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
            pattern: {
              value: /[A-Za-z]{3}/,
              message: "알파벳 3글자 이상 포함되어야 함(대소문자 구분 x)",
            },
            minLength: {
              value: 10,
              message: "password는 10글자 이상이어야 합니다.",
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("checkPassword", {
            required: true,
          })}
          placeholder="Check Password"
        />
        <button> Add</button>
      </form>
    </>
  );
}
