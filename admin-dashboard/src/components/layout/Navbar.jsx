// src/components/layout/Navbar.jsx
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="navbar">
      <h3>Admin Dashboard</h3>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "6px 12px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          background: darkMode ? "#ffd700" : "#595e69",
          color: darkMode ? "#000" : "#fff",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;