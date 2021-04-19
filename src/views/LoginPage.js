import React from "react";
import Login from "../components/Login";
import { useStore } from "../store";

function LoginPage(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <h2>Ready to get some work done? Log in below</h2>
      {<Login />}
    </>
  );
}

export default LoginPage;
