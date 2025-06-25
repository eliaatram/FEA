import { createContext, useReducer, useEffect } from "react";
import AppStateReducer from "./AppStateReducer";

const INITIAL_STATE = {
  isAuthenticated: localStorage.getItem("user") ? true : false,
  user: JSON.parse(localStorage.getItem("user")),
  theme: localStorage.getItem("theme") || "light",
};

export const AppStateContext = createContext(INITIAL_STATE);

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppStateReducer, INITIAL_STATE);

  // Apply theme class to <body>
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(state.theme);
  }, [state.theme]);

  return (
    <AppStateContext.Provider value={{ appState: state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
