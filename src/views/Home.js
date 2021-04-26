import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/worklogo2.gif";
import { ProgressBar } from "react-bootstrap";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import {
  createTodo,
  getUserTodos,
  editTodo,
  deleteTodo,
} from "../fetchRequests";

const styles = {
  fontFamily: "Impact",
};

function Home() {
  const userId = localStorage.getItem("userId");
  const [userTodos, setUserTodos] = useState([]);

  const [input, setInput] = useState("");

  const [percentage, setPercentage] = useState(
    userTodos.filter((todo) => !todo.completed).length / userTodos.length
  );

  useEffect(() => {
    setPercentage(
      (userTodos.filter((todo) => todo.completed).length / userTodos.length) *
        100
    );
  }, [userTodos]);

  useEffect(() => {
    getUserTodos(userId).then((data) => setUserTodos(data));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);

    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, []);

  function keyDown(event) {
    if (event.key === "Enter") {
      createTodo(userId, event.target.value)
        .then(setInput(""))
        .then(getUserTodos(userId).then((data) => setUserTodos(data)));
    }
  }

  const handleInput = (event) => {
    setInput(event.target.value);
    getUserTodos(userId).then((data) => setUserTodos(data));
  };

  const handleCheck = (event, todoId, title, completed) => {
    editTodo(userId, todoId, title, "", !completed);
    getUserTodos(userId).then((data) => setUserTodos(data));
  };

  const handleDelete = (event, todoId) => {
    deleteTodo(userId, todoId);
    getUserTodos(userId).then((data) => setUserTodos(data));
  };

  return (
    <>
      {userId === "" ? (
        <div>Loading ...</div>
      ) : (
        <div class="d-inline-flex p-5 bg-secondary text-black">
          <section className="todoapp">
            <header className="header">
              <div style={styles}>
                <h1>Whatodos</h1>
                <h4>the app that keeps workin' for ya</h4>
              </div>
              <div class="d-flex rounded bg-info">
                <Footer
                  amount={userTodos.filter((todo) => !todo.completed).length}
                />
              </div>
              <div class="d-flex  rounded-top bg-dark text-warning">
                <input
                  className="new-todo"
                  placeholder="What needs to be done?"
                  onChange={(e) => handleInput(e)}
                  autoFocus
                  value={input}
                  onSubmit={(e) => keyDown(e)}
                />
              </div>
            </header>

            <div class="d-flex rounded-bottom bg-dark text-white">
              <TodoList
                todos={userTodos}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            </div>
            <ProgressBar animated now={percentage} />
            <img src={logo} alt="loading..." width={400} />
          </section>
        </div>
      )}
    </>
  );
}

export default Home;
