// src/components/layout/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Users", path: "/users" },
    { name: "Orders", path: "/orders" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: "block",
              padding: "10px 0",
              color: isActive ? "#ffd700" : "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
              transition: "all 0.2s ease",
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;