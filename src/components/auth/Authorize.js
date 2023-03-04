import React, {useEffect} from "react";
import Client from "../../oauth2/Client";
import EveOnline from "../../oauth2/providers/EveOnline";

function Authorize() {
  const client = new Client();
  const provider = new EveOnline();
  const [authorizationURL, state] = provider.authorize();

  useEffect(() => {
    client.storage.setItem("state", state);
    window.location.href = authorizationURL;
  }, []);

  return (
    <>
      <h1>Authorize</h1>
      <p>Redirecting to authorization endpoint.</p>
    </>
  );
}

export default Authorize;
