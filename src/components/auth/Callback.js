import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback({client, code, state}) {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = client.callback(code, state);
    navigate(redirectPath);
  }, []);

  return (
    <>
      <h1>Callback</h1>
      <p>Received callback</p>
    </>
  );
}

export default Callback;
