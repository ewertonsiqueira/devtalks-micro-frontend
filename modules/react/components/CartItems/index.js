import React from "react";
import utils from '../../../../shared/resources/utils'


export function CartItems({ qtdItems }) {
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
        className="fa fa-shopping-cart"
        style={{ marginRight: "8px", marginBottom: "3px" }}
      />
      {utils.toCurrency(qtdItems || 0)}
    </div>
  );
}
