import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated, layout: Layout }) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Layout />;
};
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  layout: PropTypes.func.isRequired,
};
