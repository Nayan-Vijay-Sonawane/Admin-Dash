// src/components/layout/Layout.jsx
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;