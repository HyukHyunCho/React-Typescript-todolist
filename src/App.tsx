import React, { useEffect, useState } from "react";
import "./App.css";
import { Item } from "./types/type";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  const saveItem = localStorage["todos"]
    ? JSON.parse(localStorage.getItem("todos") || "")
    : [];
  const [items, setItems] = useState<Item[]>(saveItem);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  });

  return (
    <div className="app">
      <div className="appContainer">
        {/* <div className="content"> */}
          
          <AddItem items={items} setItems={setItems} />
          <ItemList items={items} setItems={setItems} />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
