import create from "zustand";
import { devtools, redux, persist } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { userId: "" } };

// set action types

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CREATE = "CREATE";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: { userId: action.payload } };
    case LOGOUT:
      return { user: { userId: "" } };
    case CREATE:
      return { user: { userId: "" } };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(persist(devtools(redux(reducer, initialState))));
