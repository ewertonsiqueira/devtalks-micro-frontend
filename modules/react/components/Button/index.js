import React from "react";

export function Button({ title, event }) {
  return (
    <button
      onClick={event}
      style={{
        background: "#2c3e50",
        borderRadius: "6px",
        border: "none",
        color: "white",
        padding: "12px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {title}
    </button>
  );
}
