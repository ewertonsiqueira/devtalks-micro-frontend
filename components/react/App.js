import React, { useState, useEffect } from "react";

import { BasketItems } from "../react/components/BasketItems";

export function App() {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    fetch("http://localhost:3001/carrinho")
      .then((response) => response.json())
      .then((data) => {
        const uniqueItems = Array.from(
          new Map(data.map((item) => [item.id, item])).values()
        );
        setItems(uniqueItems);
      });
  }

  async function handleRemoveItem(id) {
    const filteredItems = items.filter((item) => item.id !== id);

    setItems(filteredItems);
  }

  const totalValue = items.reduce((acc, item) => acc + item.value, 0);

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            gap: "20px",
          }}
        >
          <BasketItems qtdItems={totalValue} />
        </div>

        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "auto",
                    marginRight: "20px",
                  }}
                />
                <div>
                  <h3 style={{ margin: "0 0 5px 0" }}>{item.name}</h3>
                  <p
                    style={{
                      margin: "0 0 5px 0",
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    {item.description}
                  </p>
                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    R$ {item.value.toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "red",
                  fontSize: "20px",
                }}
                title="Remover item"
              >
                <i class="fa fa-trash-o" />
              </button>
            </div>
          ))
        ) : (
          <p>Sem carros selecionados</p>
        )}
      </div>
    </div>
  );
}
