import React, { useState } from "react";
import { User } from "../types/User";

interface Props {
  users: User[];
  setUsers: (users: User[]) => void;
}

const SampleForm = ({ users, setUsers }: Props) => {
  const [formValues, setFormValues] = useState<User>({
    fullName: "",
    username: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // [] -> to compute property names dynamically.
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsers([...users, formValues]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SampleForm</h1>

      <input
        type="text"
        onChange={handleChange}
        name="fullName"
        placeholder="full name"
        value={formValues.fullName}
      />

      <input
        type="text"
        onChange={handleChange}
        name="username"
        placeholder="username"
        value={formValues.username}
      />

      <button type="submit">Create New User</button>
    </form>
  );
};

export default SampleForm;
