import React from "react";
import { Navigate } from "react-router";

// user: current logged-in user info
// children: protected component
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    // যদি user logged-in না থাকে, login page এ redirect করবে
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
