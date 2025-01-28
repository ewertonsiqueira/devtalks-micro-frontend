import React from "react";

export function Button({ title, eventBuy }) {
  return (
    <button
      onClick={eventBuy}
      style={{
        margin: '20px',
        background: "#dfdfdf",
        borderRadius: "6px",
        border: "none",
        color: "#212121",
        padding: "15px 32px",
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
