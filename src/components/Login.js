import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import { loginRequest } from "../fetchRequests";
import { LOGIN, useStore } from "../store";
import {
  Container,
  Form,
  // Col,
  Row,
  // Jumbotron,
  Button,
  FormGroup,
} from "react-bootstrap";


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
      <Container>
      <div class="d-flex p-4 bg-warning text-dark">
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>
                <h3>User Name</h3>
              </Form.Label>
              <Form.Control placeholder="Enter Username"></Form.Control>
              <Form.Row>
                <Form.Label>
                  <h3>Password</h3>
                </Form.Label>
                <Form.Control placeholder="Enter Password"></Form.Control>
              </Form.Row>
            </Form.Group>
          </Form>
        </Row>
        </div>
       
        <div class="d-inline-flex p5 justify-content-center bg-secondary text-white">
        <div className="logInBtn">
          <a
            class="btn btn-block btn-primary font-weight-medium auth-form-btn"
            href="../../todo"
          >
            LOGIN
          </a>
        </div>
        <div className="googleBtn">
        {/* <div class="p-2 flex-fill"> */}
          <Button
            href="#"
            variant="google Login"
            size="sm"
            className="btn btn-block btn-google auth-form-btn btn-danger active"
            onClick={googleLogin}
          >
            Google Login
          </Button>
          {""}
          {/* </div> */}
        <Link path="/createUsers">
        {/* <div class="p-2 flex-fill"> */}
          <Button
            style={{
              background: "green",
            }}
            onClick={CreateUser}
          >
            Create User
          </Button>
          {/* </div> */}
        </Link>
        </div>
        </div>
      </Container>

      {/* </div> */}
    </>
  );
}

export default Login;
