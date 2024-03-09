import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

export default function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.has("geo")); // url에 "geo"가 포함되는지 여부 (return boolean)
  console.log(readSearchParams.get("geo")); // url에 "geo"가 가지는 값을 가져오기 (return string)
  setTimeout(() => {
    // url을 변경하기
    setSearchParams({
      day: "today",
      tommorrow: "10",
    });
  }, 3000);
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
