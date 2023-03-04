import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/auth/authorize">Authorize</Link>
    </>
  );
}

export default Navbar;
