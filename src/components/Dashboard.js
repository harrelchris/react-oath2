import React from "react";

function Dashboard({client}) {
  const name = client.storage.getItem("name");

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome, {name}</p>
    </>
  );
}

export default Dashboard;
