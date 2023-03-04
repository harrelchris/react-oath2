import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Client from "./oauth2/Client";
import EveOnline from "./oauth2/providers/EveOnline";

import Authorize from "./components/auth/Authorize";
import Callback from "./components/auth/Callback";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

import Index from "./components/Index";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const client = new Client();
  const provider = new EveOnline();
  const query = useQuery();

  function getRoutes() {
    if (client.isAuthenticated()) {
      return (
        <>
          <Route path="/auth/logout" element={<Logout client={client} />} />
          <Route path="/dashboard" element={<Dashboard client={client} />} />
        </>
      );
    } else {
      return (
        <>
          <Route path="/auth/authorize" element={<Authorize client={client} provider={provider} />} />
          <Route path="/auth/callback" element={<Callback client={client} code={query.get("code")} state={query.get("state")} />} />
          <Route path="/auth/login" element={<Login client={client} provider={provider} />} />
        </>
      );
    }
  }

  return (
    <>
      <Navbar client={client} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
        {getRoutes()}
      </Routes>
    </>
  );
}

export default App;
