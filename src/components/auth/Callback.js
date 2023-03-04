import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Callback({code, state}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      if (state === localStorage.getItem("state")) {
        localStorage.removeItem("state");
        localStorage.setItem("code", code);
        navigate("/auth/login");
      } else {
        console.error("Received invalid state. Please try again.");
        localStorage.removeItem("state");
        navigate("/");
      }
    } else {
      console.error("Did not receive valid authorization code. Please try again.");
      localStorage.removeItem("state");
      navigate("/");
    }
  }, []);

  return (
    <>
      <h1>Callback</h1>
      <p>Received callback</p>
    </>
  );
}

export default Callback;
