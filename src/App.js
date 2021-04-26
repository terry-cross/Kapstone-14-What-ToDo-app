import "./App.css";
import { useReducer, useEffect, createContext, Profiler } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./views/Profile";
import Profiles from "./components/Profiles";
import TodoList from "./components/TodoList";
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import { useStore } from "./store";
import Users from "./components/Users";

export const TodosDispatch = createContext(null);

function App() {
  const dispatch = useStore((state) => state.dispatch);
  return (
    <TodosDispatch.Provider value={dispatch}>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route
          exact
          path="/todo"
          component={Home}
          render={(props) => <TodoList {...props} />}
        />
        <Route path="/users" component={Users} />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/:filter"
          render={(props) => <TodoList {...props} />}
        />
      </Switch>
    </TodosDispatch.Provider>
  );
}

export default App;
