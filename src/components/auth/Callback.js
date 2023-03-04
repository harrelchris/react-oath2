import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {ClientContext} from "../../App";

function Callback({code, state}) {
  const client = useContext(ClientContext);
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
