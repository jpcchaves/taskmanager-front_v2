import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./modules/auth/pages/signIn";
import SignUp from "./modules/auth/pages/signUp";
import AdminLayout from "./layouts/admin";
import MainDashboard from "./modules/admin/default";
import Marketplace from "./modules/admin/marketplace";
import Profile from "./modules/admin/profile";
import RequireAuth from "./contexts/auth/components/RequireAuth";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      {/* Protected Routes */}
      <Route element={<RequireAuth />}>
        <Route element={<AdminLayout />} path="/*">
          <Route element={<MainDashboard />} path="tarefas/*">
            <Route element={<MainDashboard />} path="editar/:id" />
          </Route>
          <Route element={<Marketplace />} path="dashboard" />
          <Route element={<Profile />} path="perfil" />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
