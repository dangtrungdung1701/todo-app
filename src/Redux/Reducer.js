import { todos } from "./States";
import * as actions from "./Actions";

export const reducer = (state = todos, action) => {
  let newState = [];
  switch (action.type) {
    case actions.ADD_TODOS: {
      newState = [...state];
      newState.push(action.payload);
      return newState;
    }
    case actions.DELETE_TODOS: {
      newState = [...state];
      newState = newState.filter((todo) => todo.id !== action.payload);
      return newState;
    }
    case actions.CHECK_TODOS: {
      newState = [...state];
      newState.map((todo) => {
        todo.id === action.payload
          ? (todo.isDone = !todo.isDone)
          : (todo.isDone = todo.isDone);
      });
      return newState;
    }
    case actions.UPDATE_TODOS: {
      let result = -1;
      newState = [...state];
      newState.map((todo, index) => {
        todo.id === action.payload.id ? (result = index) : (result = result);
      });
      newState[result] = action.payload;
      return newState;
    }
  }
  return state;
};
