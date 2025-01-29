import React, { useState, useEffect } from "react";

import { BasketItems } from "../react/components/BasketItems";

import { Button } from "./components/Button";

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
    fetch(`http://localhost:3001/carrinho/${id}`, {
      method: "DELETE",
    });

    const filteredItems = items.filter((item) => item.id !== id);

    setItems(filteredItems);
  }

  async function handleRedirect() {
    window.location.href = "/estoque";
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
            width: "100%",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <Button title="Mais opções no estoque" event={handleRedirect} />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <BasketItems qtdItems={totalValue} />
          </div>
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
          <div>
            <p>
              Sem carros selecionados, volte para a tela de estoque para ver
              mais opções!
            </p>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
