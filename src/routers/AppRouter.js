import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/slices/authSlice";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import Loadable from "../components/Loadable";
import {
  AUTH,
  DEFAULT_ROOT,
  FORGOT_PASSWORD,
  HOME,
  LOGIN,
  NEW_PASSWORD,
  REGISTER,
  VERIFY,
} from "../constants/routes";
import AppLayout from "../layouts/AppLayout";
import DashboardLayout from "../layouts/DashboardLayout";

export default function AppRouter() {
  const { isAuth } = useSelector(selectAuth);
  console.log("Is Authentication:", isAuth);

  //Auth
  const LoginPage = Loadable(lazy(() => import("../pages/Login")));
  const RegisterPage = Loadable(lazy(() => import("../pages/Register")));
  const NewPasswordPage = Loadable(lazy(() => import("../pages/NewPassword")));
  const ForgotPasswordPage = Loadable(
    lazy(() => import("../pages/ForgotPassword"))
  );
  const VerifyPage = Loadable(lazy(() => import("../pages/Verify")));

  // Home
  const HomePage = Loadable(lazy(() => import("../pages/Home")));

  const NotFoundPage = Loadable(lazy(() => import("../pages/Page404")));
  return (
    <Routes>
      <Route
        path={AUTH}
        element={<PublicRoute isAuthenticated={isAuth} layout={AppLayout} />}>
        <Route index path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />
        <Route path={NEW_PASSWORD} element={<NewPasswordPage />} />
        <Route path={FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        <Route path={VERIFY} element={<VerifyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route
        path={DEFAULT_ROOT}
        element={
          <PrivateRoute isAuthenticated={isAuth} layout={DashboardLayout} />
        }>
        <Route path={HOME} element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
}
