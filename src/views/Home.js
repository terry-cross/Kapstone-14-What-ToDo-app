import React from "react";
import { useReducer, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import todoReducer from "../todoReducer";
import todosList from "../todos.json";
import logo from "../images/worklogo2.gif";
import { ProgressBar } from "react-bootstrap";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import Login from "../components/Login";
import LoginPage from "../views/LoginPage";

export const TodosDispatch = createContext(null);

const styles = {
  fontFamily: "Impact",
};
const footerStyles = {
 background: "lightblue",
};
function Home(props) {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: todosList,
    input: "",
  });

  return (
   
    <TodosDispatch.Provider value={dispatch}>
    <div  class="d-inline-flex p-5 bg-secondary text-black">
      <section className="todoapp">
      
        <header className="header">
        <div style={styles}>
          <h1>Whatodos</h1>
          <h4>the app that keeps workin' for ya</h4>
          </div>
          <div class="d-flex rounded bg-info">
          <Footer amount={state.todos.filter((todo) => !todo.completed).length} />
          </div>
          <div class="d-flex  rounded-top bg-dark text-warning">
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={(e) => {
              dispatch({ type: "updateInput", text: e.target.value });
            }}
            autoFocus
            value={state.input}
          />
          </div>
        </header>
        
        <div class="d-flex rounded-bottom bg-dark text-white">
        <TodoList todos={state.todos} />
        </div>
        {/* <ProgressBar animated now={60} />
        <ProgressBar variant = "success" animated now={40} />
        <ProgressBar variant =  "danger" animated now={30} />
        <ProgressBar variant =  "warning" animated now={50} /> */}
        <img src={logo} alt="loading..." width={400} / >
      </section>
      </div>
    </TodosDispatch.Provider>
    
  );
  
}

export default Home;
