import { User } from "../types/User";

interface Props {
  users: User[];
}

const UserList = ({ users }: Props) => {
  return (
    <div>
      <h1 className="user-list-title">UserList</h1>

      {users.map((user) => (
        <div className="users-list">
          <div>{user.fullName}</div>
          <div>@{user.username}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
