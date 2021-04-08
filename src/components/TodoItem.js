import { useContext } from "react";
import { TodosDispatch } from "../App";

function TodoItem(props) {
  const dispatch = useContext(TodosDispatch);

  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onClick={(e) => {
            dispatch({ type: "toggleComplete", todoId: props.id });
          }}
        />
        <label>{props.title}</label>
        <button
          className="destroy"
          onClick={(e) => {
            dispatch({ type: "delete", todoId: props.id });
          }}
        />
      </div>
    </li>
  );
}

export default TodoItem;
