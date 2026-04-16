// src/components/ui/Card.jsx
import React from "react";

const Card = ({ title, value }) => {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    margin: "10px",
    minWidth: "150px",
    textAlign: "center",
  },
};

export default Card;