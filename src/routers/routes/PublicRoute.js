import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ isAuthenticated, layout: Layout }) => {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Layout />;
};
PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  layout: PropTypes.func.isRequired,
};
