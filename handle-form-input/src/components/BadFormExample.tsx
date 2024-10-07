import React, { useState } from "react";
import { User } from "../types/User";

interface Props {
  users: User[];
  setUsers: (users: User[]) => void;
}

const BadFormExample = ({ users, setUsers }: Props) => {
  // make fullName and username seperate states
  const [formValues, setFormValues] = useState<User>({
    fullName: "",
    username: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsers([...users, formValues]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bad Form Example</h1>

      <input
        type="text"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            fullName: e.target.value,
          })
        }
        name="fullName"
        placeholder="full name"
        value={formValues.fullName}
      />

      <input
        type="text"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            username: e.target.value,
          })
        }
        name="username"
        placeholder="username"
        value={formValues.username}
      />

      <button type="submit">Create New User</button>
    </form>
  );
};

export default BadFormExample;
