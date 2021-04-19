import React, { useState } from "react";
import { CREATE, useStore } from "../store";
import { createUserRequest } from "../fetchRequests";

function CreateUser(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    usersname: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    createUserRequest(
      formData.username,
      formData.password,
      formData.displayName
    ).then((userData) => dispatch({ type: CREATE, payload: userData }));
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <form id="signup-form" onSubmit={handleSignup}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        autoFocus
        required
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        required
        onChange={handleChange}
      />
      <button type="submit">DisplayName</button>
      <input
        type="text"
        name="displayName"
        value={formData.displayName}
        required
        onChange={handleChange}
      />
    </form>
  );
}

export default CreateUser;
