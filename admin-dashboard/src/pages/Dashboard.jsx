// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import DataTable from "../components/tables/DataTable";
import getUsers from "../services/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Username", accessor: "username" },
  ];

  if (loading) return <p>Loading Dashboard...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: "flex" }}>
        <Card title="Total Users" value={users.length} />
        <Card title="Active Users" value={users.length - 2} />
        <Card title="New Signups" value={5} />
      </div>

      <h2>Users Table</h2>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default Dashboard;