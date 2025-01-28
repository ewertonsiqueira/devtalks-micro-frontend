import React, { useState, useEffect } from "react";

export function App() {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    const fetchedItems = [
      {
        id: "e001",
        name: "Fazer 250",
        description: "Moto Brunin",
        value: 20000,
        image: "../../shared/assets/fz.jpg",
      },
      {
        id: "e002",
        name: "Ka",
        description: "Carro Teteu",
        value: 45000,
        image: "../../shared/assets/ka.jpg",
      },
      {
        id: "e003",
        name: "Gol",
        description: "Carro Léo",
        value: 50000,
        image: "../../shared/assets/gol.jpg",
      },
      {
        id: "e004",
        name: "Civicão",
        description: "Carro Moço",
        value: 64000,
        image: "../../shared/assets/civic.png",
      },
      {
        id: "e005",
        name: "Peugeot",
        description: "Carro Junin",
        value: 70000,
        image: "../../shared/assets/308.png",
      },
      {
        id: "e006",
        name: "Jetta",
        description: "Carro Chefinho",
        value: 100000,
        image: "../../shared/assets/jetta.png",
      },
    ];
    setItems(fetchedItems);

    // fetch("http://localhost:3001/carrinho")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setItems(data);
    //   });
  }

  async function handleRemoveItem(id) {
    const filteredItems = items.filter((item) => item.id !== id);

    setItems(filteredItems);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          gap: "20px",
        }}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
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
