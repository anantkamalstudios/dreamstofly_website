// UserProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function UserProtectedRoute({ children }) {
  const { user, loadingUser } = useContext(AuthContext);
  const [intendedDestination, setIntendedDestination] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Save the intended destination when user is not authenticated
    if (!loadingUser && !user) {
      const destination = location.pathname + location.search;
      setIntendedDestination(destination);
      localStorage.setItem("intendedDestination", destination);
    }
  }, [user, loadingUser, location]);

  // Show loading spinner while checking authentication
  if (loadingUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the protected component
  return children;
}

export default UserProtectedRoute;
