import { createTodo } from "./fetchRequests";

export default function todoReducer(state, action) {
  const UPDATE_INPUT = "updateInput";
  const CREATE = "create";
  const TOGGLE_COMPLETE = "toggleComplete";
  const DELETE = "delete";
  const CLEAR_COMPLETE = "clearComplete";

  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, input: action.text };
    case CREATE:
      console.log("hi");
      return createTodo(action.payload);
    // return {
    //   ...state,
    //   todos: [
    //     ...state.todos,
    //     {
    //       id: Date.now(),
    //       title: state.input,
    //       completed: false,
    //     },
    //   ],
    // };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };
    case CLEAR_COMPLETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed) || [],
      };
    default:
      throw new Error();
  }
}
