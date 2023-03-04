import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ClientContext } from "../App";

function Navbar() {
  const client = useContext(ClientContext);

  if (client.isAuthenticated()) {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/auth/logout">Logout</Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/auth/authorize">Authorize</Link>
      </>
    );
  }
}

export default Navbar;
