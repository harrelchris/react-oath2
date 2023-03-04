import React, {useEffect} from "react";

function Authorize({client, provider}) {
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
