import useAppStateContext from "../hooks/useAppStateContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { appState } = useAppStateContext();

  if (appState === undefined) return <div>Loading...</div>;

  return appState?.isAuthenticated && appState?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
