import React, {useEffect} from "react";
import EveOnline from "../../oauth2/providers/EveOnline";

function Authorize() {
  const provider = new EveOnline();
  const [authorizationURL, state] = provider.authorize();

  useEffect(() => {
    localStorage.setItem("state", state);
    window.location.href = authorizationURL;
  }, []);

  return (
    <>
      <h1>Authorize</h1>
      <p>Redirecting to authorization endpoint</p>
    </>
  );
}

export default Authorize;
