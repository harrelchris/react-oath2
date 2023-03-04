import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Authorize from "./components/auth/Authorize";
import Callback from "./components/auth/Callback";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

import Index from "./components/Index";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

function App() {
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/auth/authorize" element={<Authorize />} />
        <Route path="/auth/callback" element={<Callback code={query.get("code")} state={query.get("state")} />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/logout" element={<Logout />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
