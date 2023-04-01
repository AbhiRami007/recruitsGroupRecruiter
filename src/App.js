import React from "react";
import "./App.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AuthInit } from "./core/Auth";
import { LayoutSplashScreen } from "./core/SplashScreen";
import CookieConsent from "react-cookie-consent";

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <CookieConsent
        style={{
          background: "rgba(31, 25, 76, 0.9)",
          color: "white",
          display: "flex",
          flex: "wrap",
          padding: "9px 10px",
          cursor: "pointer",
        }}
        buttonStyle={{
          background: "rgb(254, 207, 52)",
          color: "rgb(0, 0, 0)",
          margin: "15px",
          padding: "10px 30px",
          flex: "0 0 auto",
        }}
        overlay
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <AuthInit>
        <Outlet />
      </AuthInit>
    </Suspense>
  );
};

export default App;
