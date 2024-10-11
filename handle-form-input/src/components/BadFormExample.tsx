import React, { useState } from "react";
import { User } from "../types/User";

interface Props {
  users: User[];
  setUsers: (users: User[]) => void;
}

const BadFormExample = ({ users, setUsers }: Props) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsers([
      ...users,
      {
        fullName,
        username,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bad Form Example</h1>

      <input
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        name="fullName"
        placeholder="Full Name"
        value={fullName}
      />

      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        placeholder="Username"
        value={username}
      />

      <button type="submit">Create New User</button>
    </form>
  );
};

export default BadFormExample;
