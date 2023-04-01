import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Jobs from "../components/Jobs/Jobs";
import Header from "../components/Shared/Header";
import { getUser } from "../core/AuthHelpers";

const PrivateRoutes = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(getUser());
  }, []);

  const isChanged = () => {
    setUser(getUser());
  };
  const ProfilePage = lazy(() => import("../components/Profile/ProfilePage"));

  return (
    <>
      <Header userData={user} />
      <Routes>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />

        {/* Pages */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobs" element={<Jobs user={user} />} />
        <Route path="post-jobs" element={<Jobs />} />
        <Route path="add-candidate" element={<Jobs />} />
        <Route path="add-company" element={<Jobs />} />


        <Route
          path="/view-candidate/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProfilePage isChanged={isChanged} />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Routes>
    </>
  );
};

export { PrivateRoutes };
