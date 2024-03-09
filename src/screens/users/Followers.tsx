import { useParams } from "react-router-dom";
import { users } from "../../db";

export default function Followers() {
  const { userId } = useParams();

  return (
    <div>
      <h1>Followers</h1>
      <ul>
        {users[Number(userId) - 1].followers.map((f) => (
          <li>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}
