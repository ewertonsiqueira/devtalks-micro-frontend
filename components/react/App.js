import { BasketItems } from "./components/BasketItems";

import React, { useState } from "react";

export function App() {
  const [items, setItems] = useState(0);

  return (
    <div style={{ width: "100%", display: "flex", padding: "20px" }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
        <BasketItems qtdItems={items} />
      </div>
    </div>
  );
}
