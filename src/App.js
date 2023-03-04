import React, {createContext} from "react";
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

const client = new Client();
const provider = new EveOnline();

export const ClientContext = createContext(client);
export const ProviderContext = createContext(provider);

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const query = useQuery();

  return (
    <>
      <Navbar client={client} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />

        {client.isAuthenticated()
          ? (<>
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>)
          : (<>
            <Route path="/auth/authorize" element={<Authorize />} />
            <Route path="/auth/callback" element={<Callback code={query.get("code")} state={query.get("state")} />} />
            <Route path="/auth/login" element={<Login />} />
          </>)
        }
      </Routes>
    </>
  );
}

export default App;
