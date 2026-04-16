// src/components/ui/Button.jsx
const Button = ({ children, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", borderRadius: "4px", background: "#595e69", color: "#fff", border: "none", cursor: "pointer", ...style }}
    >
      {children}
    </button>
  );
};

export default Button;