import React from "react";
import { Route, Routes } from "react-router-dom";

import Authorize from "./components/auth/Authorize";
import Callback from "./components/auth/Callback";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

import Index from "./components/Index";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/auth/authorize" element={<Authorize />} />
        <Route path="/auth/callback" element={<Callback />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/logout" element={<Logout />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
