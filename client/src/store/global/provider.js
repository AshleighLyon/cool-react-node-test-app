import { useReducer } from "react";
import { globalReducer } from "./reducer";
import { globalActionTypes as actions } from "./actions";
import { GlobalState } from "./state";

const GLOBAL_STATE = {
  theme: "light",
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_STATE);

  const value = {
    ...state,
    setLightTheme: () => {
      dispatch({ type: actions.LIGHT_THEME });
    },
    setDarkTheme: () => {
      dispatch({ type: actions.DARK_THEME });
    },
  };

  // Wrap the context provider around our component
  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};