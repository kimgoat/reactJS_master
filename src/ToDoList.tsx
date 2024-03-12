import { useForm } from "react-hook-form";

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
  extraError?: string;
};

export default function ToDoList() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IFormData) => {
    // 필수로 handleSubmit에 넘겨줘야 함
    if (data.password !== data.checkPassword) {
      setError(
        "checkPassword",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    } else {
      setValue("email", "");
      setValue("firstName", "");
      setValue("lastName", "");
      setValue("userName", "");
      setValue("id", "");
      setValue("password", "");
      setValue("checkPassword", "");
    }
    // setError("extraError", { message: "Server Offline" }); // 강제로 Form에 error 발생시키기
  };

  //   console.log(errors);

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit(onValid)}>
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
          {...register("firstName", {
            required: true,
            validate: {
              noKim: (value) =>
                value.includes("kim") ? "no kim allowed" : true,
              noSeo: (value) =>
                value.includes("seo") ? "no seo allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <div>{errors?.firstName?.message}</div>
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <div>{errors?.lastName?.message}</div>

        <input
          {...register("userName", { required: true })}
          placeholder="User Name"
        />
        <div>{errors?.userName?.message}</div>

        <input
          {...register("id", {
            required: { value: true, message: "ID를 입력해주세요." },
          })}
          placeholder="ID"
        />
        <div>{errors?.id?.message}</div>

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
        <div>{errors?.password?.message}</div>

        <input
          {...register("checkPassword", {
            required: true,
          })}
          placeholder="Check Password"
        />
        <div>{errors?.checkPassword?.message}</div>
        <button> Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </>
  );
}
