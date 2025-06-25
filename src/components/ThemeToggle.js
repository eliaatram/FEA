import { useContext } from "react";
import { AppStateContext } from "../context/AppStateProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const { appState, dispatch } = useContext(AppStateContext);
  const isDark = appState.theme === "dark";

  return (
    <button
      onClick={() => dispatch({ type: "ToggleTheme" })}
      style={{
        padding: "8px",
        width: "40px",
        height: "40px",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        backgroundColor: isDark
          ? "rgba(255, 5, 238, 0.5)"
          : "rgba(174, 166, 25, 0.35)",
        color: isDark ? "#f7fafc" : "#2d3748",
        fontSize: "1.2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
