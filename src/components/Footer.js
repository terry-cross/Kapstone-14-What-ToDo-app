import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodosDispatch } from "../views/Home";

function Footer(props) {
  const dispatch = useContext(TodosDispatch);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.amount}</strong> item(s) left
      </span>
      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={(e) => {
          dispatch({ type: "clearComplete" });
        }}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
