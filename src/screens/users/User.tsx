import { Outlet, useParams } from "react-router-dom";
import { users } from "../../db";
import { Link } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with id {userId} is name: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See Followers</Link>
      <Outlet />
    </div>
  );
}
