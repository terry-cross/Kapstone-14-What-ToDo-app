import "./App.css";
import { useReducer, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import todoReducer from "./todoReducer";
import todosList from "./todos.json";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export const TodosDispatch = createContext(null);

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
        <Switch>
          <Route
            exact
            path="/"
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
        <Footer amount={state.todos.filter((todo) => !todo.completed).length} />
      </section>
    </TodosDispatch.Provider>
  );
}

export default App;
