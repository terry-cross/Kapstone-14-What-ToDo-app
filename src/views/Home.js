import React from "react";
import { useReducer, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import todoReducer from "../todoReducer";
import todosList from "../todos.json";

import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import Login from "../components/Login";
import LoginPage from "../views/LoginPage";

export const TodosDispatch = createContext(null);

function Home(props) {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: todosList,
    input: "",
  });

  return (
    <TodosDispatch.Provider value={dispatch}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={(e) => {
              dispatch({ type: "updateInput", text: e.target.value });
            }}
            autoFocus
            value={state.input}
          />
        </header>
        <TodoList todos={state.todos} />
        <Footer amount={state.todos.filter((todo) => !todo.completed).length} />
      </section>
    </TodosDispatch.Provider>
  );
}

export default Home;
