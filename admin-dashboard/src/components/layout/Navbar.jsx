// src/components/layout/Navbar.jsx
const Navbar = () => {
  return (
    <div style={styles.nav}>
      <h3>Admin Dashboard</h3>
    </div>
  );
};

const styles = {
  nav: {
    background: "#fff",
    padding: "10px",
    borderBottom: "1px solid #ddd", // Fixed typo
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default Navbar;