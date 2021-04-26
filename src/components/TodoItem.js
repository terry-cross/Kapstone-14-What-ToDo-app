function TodoItem(props) {
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onClick={(e) =>
            props.handleCheck(e, props.id, props.title, props.completed)
          }
        />
        <label>{props.title}</label>
        <button
          className="destroy"
          onClick={(e) => props.handleDelete(e, props.id)}
        />
      </div>
    </li>
  );
}

export default TodoItem;
