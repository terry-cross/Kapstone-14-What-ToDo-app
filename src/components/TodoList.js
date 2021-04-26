import TodoItem from "./TodoItem";

function TodoList(props) {
  console.log(props);
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos &&
          props.todos.map((todo) => (
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

// export default TodoList;
