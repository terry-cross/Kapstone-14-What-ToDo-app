const baseURL = "http://localhost:4000";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "/login/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const createUserRequest = (username, password) => {
  return fetch(baseURL + "/user/create", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => console.log(res));
};

export const editUserRequest = (
  username,
  firstName,
  lastName,
  email,
  phoneNumber
) => {
  return fetch(baseURL + "/user", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
    }),
  }).then((res) => res.json());
};

export const getProfile = (userId) => {
  return fetch(baseURL + `/user/${userId}`, {
    method: "GET",
  }).then((res) => res.json());
};

export const deleteUser = (userId) => {
  return fetch(baseURL + `/user/${userId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const getAllUsers = () => {
  return fetch(baseURL + "/users", {
    method: "GET",
  }).then((res) => res.json());
};

export const getUserTodos = (userId) => {
  return fetch(baseURL + `/user/${userId}/todos`, {
    method: "GET",
  }).then((res) => res.json());
};

export const getSingleTodo = (userId, todoId) => {
  return fetch(baseURL + `/user/${userId}/todo/${todoId}`, {
    method: "GET",
  }).then((res) => res.json());
};

export const createTodo = (userId, title, details, priority, tag) => {
  return fetch(baseURL + `/user/${userId}/todos/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      details,
      priority,
      tag,
    }),
  }).then((res) => res.json());
};

export const editTodo = (
  userId,
  todoId,
  title,
  details,
  completed,
  priority,
  tag
) => {
  return fetch(baseURL + `/user/${userId}/todos/${todoId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      details,
      completed,
      priority,
      tag,
    }),
  }).then((res) => res.json());
};

export const deleteTodo = (userId, todoId) => {
  return fetch(baseURL + `/user/${userId}/todos/${todoId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
