import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import { useHistory } from "react-router-dom";
import { loginRequest } from "../fetchRequests";
import { LOGIN, useStore } from "../store";
import {
  Container,
  Form,
  Row,
  Button,
  FormGroup,
  ListGroup,
} from "react-bootstrap";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatch({ type: LOGIN, payload: userData.id })
    );
    history.push("/todo");
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
        <form id="login-form" onSubmit={handleLogin}>
          <div class="d-flex pb-4 bg-warning text-dark">
            <Form.Group>
              <Form.Label>
                <Row>
                  <label htmlFor="username">
                    <h3>Username</h3>
                  </label>
                </Row>
              </Form.Label>
              <Form.Row>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  autoFocus
                  required
                  onChange={handleChange}
                />
              </Form.Row>

              <Form.Row>
                <Form.Label>
                  <label htmlFor="password">
                    <h3>Password</h3>
                  </label>
                </Form.Label>
              </Form.Row>

              <Form.Row>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  required
                  onChange={handleChange}
                />
              </Form.Row>
            </Form.Group>
          </div>

          <Form.Row>
            <div class="d-inline-flex p4 justify-content-center bg-secondary text-white">
              <div className="logInBtn">
                <button
                  class="btn btn-lg"
                  style={{
                    background: "blue",
                    color: "white",
                  }}
                  type="submit"
                >
                  Login
                </button>
              </div>
              <Link to="/createUser">
                <button
                  class="btn btn-lg"
                  style={{
                    background: "green",
                    color: "white",
                  }}
                >
                  Create User
                </button>
              </Link>
            </div>
          </Form.Row>
        </form>
      </Container>{" "}
    </>
  );
}

export default Login;
