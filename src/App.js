import "./App.css";
import { useReducer, useEffect, createContext, Profiler } from "react";
import { Switch, Route } from "react-router-dom";

import Profile from "./views/Profile";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import { useStore } from "./store";

export const TodosDispatch = createContext(null);

function App() {
  const dispatch = useStore((state) => state.dispatch);
  return (
    <TodosDispatch.Provider value={dispatch}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route
          exact
          path="/todo"
          component={Home}
          render={(props) => <TodoList {...props} />}
        />
        <Route
          exact
          path="/:filter"
          render={(props) => <TodoList {...props} />}
        />
        {/* <Route path="/profile/:userId" component={Profile} /> */}
      </Switch>
    </TodosDispatch.Provider>
  );
}

export default App;
