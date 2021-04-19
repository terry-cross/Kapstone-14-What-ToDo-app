import "./App.css";
import { useReducer, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import todoReducer from "./todoReducer";
import todosList from "./todos.json";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: todosList,
    input: "",
  });

  useEffect(() => {
    const addTodo = (e) => {
      if (e.keyCode === 13) {
        dispatch({ type: "create" });
        dispatch({ type: "updateInput", text: "" });
      }
    };

    window.addEventListener("keydown", addTodo);

    return () => {
      window.removeEventListener("keydown", addTodo);
    };
  });

  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route
        exact
        path="/todo"
        component={Home}
        render={(props) => <TodoList {...props} todos={state.todos} />}
      />
      <Route
        exact
        path="/:filter"
        render={(props) => (
          <TodoList
            {...props}
            todos={state.todos.filter((todo) => {
              const { match } = props;
              if (!match) return false;
              if (match.params.filter === "active") {
                return !todo.completed;
              } else if (match.params.filter === "completed") {
                return todo.completed;
              } else return false;
            })}
          />
        )}
      />
    </Switch>
  );
}

export default App;
