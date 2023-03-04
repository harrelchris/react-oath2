import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ClientContext, ProviderContext} from "../../App";

function Login() {
  const client = useContext(ClientContext);
  const provider = useContext(ProviderContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function main() {
      const code = client.storage.getItem("code");
      const token = await provider.token(code);
      const redirectURL = client.login(token);
      navigate(redirectURL);
    }

    main().catch((error) => {
      console.error(error)});
  }, []);

  return (
    <>
      <h1>Login</h1>
    </>
  );
}

export default Login;
