import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Client from "../../oauth2/Client";
import EveOnline from "../../oauth2/providers/EveOnline";

function Login() {
  const client = new Client();
  const provider = new EveOnline();
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
