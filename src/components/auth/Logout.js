import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ClientContext} from "../../App";

function Logout() {
  const client = useContext(ClientContext);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectURL = client.logout();
    navigate(redirectURL);
  }, [])
  return (
    <>
      <h1>Logout</h1>
      <p>Logging out. Please wait.</p>
    </>
  );
}

export default Logout;
