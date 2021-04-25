import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import button from "react-bootstrap";

function TodoList(props) {
  console.log(props);
  return (
    <section className="main">
      <Link to={"/profile"}>
        <p style={{ position: "relative", right: "650px", bottom: "150px" }}>
          Profile
        </p>
      </Link>

      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
            key={todo.id}
            handleCheck={props.handleCheck}
            handleDelete={props.handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
