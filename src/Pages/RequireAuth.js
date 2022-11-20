import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../Context/auth-context";

const RequireAuth = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequireAuth;
