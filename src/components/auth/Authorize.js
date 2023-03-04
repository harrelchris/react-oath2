import React, {useContext, useEffect} from "react";
import {ClientContext, ProviderContext} from "../../App";

function Authorize() {
  const client = useContext(ClientContext);
  const provider = useContext(ProviderContext);
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
