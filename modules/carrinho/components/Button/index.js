import React from "react";

export function Button({ title, event, disabled }) {
  return (
    <button
      onClick={event}
      disabled={disabled}
      style={{
        height: "40px",
        background: disabled ? "#bdc3c7" : "#2c3e50",
        borderRadius: "6px",
        border: "none",
        color: "white",
        padding: "12px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {title}
    </button>
  );
}