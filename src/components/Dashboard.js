import React, {useContext} from "react";
import { ClientContext } from "../App";

function Dashboard() {
  const client = useContext(ClientContext);
  const name = client.storage.getItem("name");

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome, {name}</p>
    </>
  );
}

export default Dashboard;
