// src/pages/Orders.jsx
import React from "react";
import DataTable from "../components/tables/DataTable";

const Orders = () => {
  const orders = [
    { id: 1, customer: "John Doe", total: "$120", status: "Pending" },
    { id: 2, customer: "Jane Smith", total: "$80", status: "Completed" },
    { id: 3, customer: "Bob Johnson", total: "$200", status: "Shipped" },
  ];

  const columns = [
    { header: "Customer", accessor: "customer" },
    { header: "Total", accessor: "total" },
    { header: "Status", accessor: "status" },
  ];

  return (
    <div>
      <h1>Orders</h1>
      <DataTable columns={columns} data={orders} />
    </div>
  );
};

export default Orders;