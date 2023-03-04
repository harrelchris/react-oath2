import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Login({client, provider}) {
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
