/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuth } from "../core/Auth";
import { AuthPage } from "../core/AuthPage";
import App from "../App";
import { ErrorsPage } from "../components/Errors/ErrorsPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Logout } from "../components/Auth/Logout";

const { PUBLIC_URL } = process.env;

const AppRoutes = () => {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route
          element={
            <GoogleOAuthProvider clientId="395250203486-oiovkpbqhhf6muc7l8boimv3bf292bs6.apps.googleusercontent.com">
              <App />
            </GoogleOAuthProvider>
          }
        >
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
          {/* {currentUser ? ( */}
          {/* <Route path="logout" element={<Logout />} /> */}
          {currentUser ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
