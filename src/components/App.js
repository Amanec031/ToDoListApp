import React, { useState } from "react";
import ToDoItems from "./ToDoItems";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  // const [newText, setText] = useState("");

  function deleteItem(id) {
    setItems((prevItem) => {
      return (prevItem.filter((item, index) => {
        return (index !== id);
      }));
    })
  }
  function AddItem(newText) {
    setItems(prevVal => {
      return [...prevVal, newText];
    })
    // setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={AddItem}
      />
      <div>
        <ul>
          {items.map((prev, index) => {
            return <ToDoItems text={prev}
              key={index} id={index} delete={deleteItem} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
