// src/pages/Settings.jsx
import React, { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1>Settings</h1>
      <div style={{ margin: "20px 0" }}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />{" "}
          Enable notifications
        </label>
      </div>
      <button style={styles.button}>Save Settings</button>
    </div>
  );
};

const styles = {
  input: { padding: "8px", margin: "0 10px", borderRadius: "4px", border: "1px solid #ccc" },
  button: { marginTop: "20px", padding: "10px 15px", background: "#595e69", color: "#fff", border: "none", borderRadius: "4px" },
};

export default Settings;