import React from "react";
import Client from "../oauth2/Client";

function Dashboard() {
  const client = new Client();
  const name = client.storage.getItem("name");

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome, {name}</p>
    </>
  );
}

export default Dashboard;
