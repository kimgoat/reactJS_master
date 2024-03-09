import { useOutletContext, useParams } from "react-router-dom";
import { users } from "../../db";

interface IFollowersContext {
  namrOfMyUser: string;
}

export default function Followers() {
  const { userId } = useParams();

  const { namrOfMyUser } = useOutletContext<IFollowersContext>();
  return (
    <div>
      <h1>{namrOfMyUser}'s Followers</h1>
      <ul>
        {users[Number(userId) - 1].followers.map((f) => (
          <li>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}
