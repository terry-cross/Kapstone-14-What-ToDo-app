import React from "react";
import Login from "../components/Login";
import logo from "../images/Logo.gif.gif";

const styles = {
  fontFamily: "Impact",
};
function LoginPage(props) {
  return (
    <>
      <div className="logIn">
        <div class="d-flex flex-column bg-dark text-white">
          <div style={styles}>
            <h1>Whatodos</h1>
          </div>
          <div>
            <h4>The app that keeps workin' for ya</h4>
          </div>
          <div style={styles}>
            <h2>Ready to get some work done?</h2>
          </div>
          <div style={styles}>
            <h2>Log in below</h2>
          </div>
        </div>
      </div>

      {<Login />}

      <img src={logo} alt="loading..." width={300} />
    </>
  );
}

export default LoginPage;
