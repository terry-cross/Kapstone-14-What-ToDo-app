import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import { loginRequest } from "../fetchRequests";
import { LOGIN, useStore } from "../store";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatch({ type: LOGIN, payload: userData })
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  function handleMessage(event) {}

  function googleLogin(e) {
    window.open(
      "https://socialapp-api.herokuapp.com/auth/google/login",
      "top=100,left=100,height=300,width=700,toolbar=no,resizable=no"
    );
  }

  return (
    <>
      <div>
        <form id="login-form" onSubmit={handleLogin}>
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
          <button
            style={{
              marginLeft: 10 + "px",
            }}
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          style={{
            marginLeft: 10 + "px",
          }}
          onClick={googleLogin}
        >
          Google Login
        </button>
        <Link path="/createusers">
          <button
            style={{
              marginLeft: 10 + "px",
            }}
            onClick={CreateUser}
          >
            Create User
          </button>
        </Link>
      </div>
    </>
  );
}

export default Login;
