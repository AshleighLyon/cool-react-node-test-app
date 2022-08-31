import { globalActionTypes as actions } from "./actions";

export const globalReducer = (state, action) => {
  switch (action.type) {

    case actions.LIGHT_THEME:
      return {
        ...state,
        theme: "light"
      };
    case actions.DARK_THEME:
      return {
        ...state,
        theme: "dark"
      };
    default:
      return state;
  }
};