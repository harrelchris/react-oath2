import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Logout({client}) {
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
