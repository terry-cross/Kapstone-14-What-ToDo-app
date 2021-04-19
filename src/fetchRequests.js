const baseURL = "https://socialapp-api.herokuapp.com/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const messageRequest = () => {
  return fetch(baseURL + "messages?limit=100").then((res) => res.json());
};

export const postMessageReq = (token, message) => {
  return fetch(baseURL + "messages", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: message,
    }),
  }).then((res) => res.json());
};

export const createUserRequest = (username, password, displayName) => {
  return fetch(baseURL + "user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      displayName,
    }),
  }).then((res) => res.json());
};

export const addLike = (token, messageId) => {
  return fetch(baseURL + "likes", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messageId,
    }),
  }).then((res) => res.json());
};

export const removeLike = (token, messageId) => {
  return fetch(baseURL + "likes/" + messageId, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
};

export const editUserRequest = (username, password, about, displayName) => {
  return fetch(baseURL + "/user", {
    method: "PACH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      about,
      displayName,
    }),
  }).then((res) => res.json());
};
