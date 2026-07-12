import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
    console.log("PRIVATE ROUTE USER:", user);

  if (loading) {
    return (
      <div className="text-center text-white py-20">
        Loading...
      </div>
    );
  }
if (!user) {
  return <Navigate to="/login" replace />;
}

if (user.email !== "crazygamer225500@gmail.com") {
  return (
    <div className="min-h-screen flex items-center justify-center text-white text-2xl">
      Access Denied
    </div>
  );
}

  return children;
}

export default PrivateRoute;