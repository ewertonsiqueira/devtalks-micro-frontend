import React from "react";

export function BasketItems({ qtdItems }) {
  return (
    <div
      style={{
        height: "40px",
        padding: "20px",
        background: "gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
        color: "white",
      }}
    >
      <i
        class="fa fa-shopping-cart"
        style={{ marginRight: "8px", marginBottom: "3px" }}
      />
      {"R$ " + qtdItems || 0}
    </div>
  );
}
