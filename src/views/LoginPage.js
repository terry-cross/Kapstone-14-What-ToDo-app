import React from "react";
import Login from "../components/Login";
import { useStore } from "../store";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import logo from "../images/Logo.gif.gif";
import { withRouter } from "react-router";

const styles = {
  fontFamily: "Impact",
};
function LoginPage(props) {
  const user = useStore((state) => state.user);
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

      <img src={logo} alt="loading..." width={300} / >

    </>
  );
}

export default LoginPage;
