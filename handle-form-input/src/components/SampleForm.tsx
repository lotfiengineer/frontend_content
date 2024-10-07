import React, { useState } from "react";

type FormValues = {
  fullName: string;
  username: string;
};

const SampleForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    username: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formValues);

  return (
    <form>
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
        placeholder="Username"
        value={formValues.username}
      />
    </form>
  );
};

export default SampleForm;
