const AppStateReducer = (state, action) => {
  switch (action.type) {
    case "Login": {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...action.payload, isAuthenticated: true })
      );
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case "Logout": {
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }

    case "ToggleTheme": {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    }

    default:
      return state;
  }
};

export default AppStateReducer;
