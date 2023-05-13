import React, { useState } from "react";
import './App.css';


function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);



  function addItem() {

    if(!newItem){
      alert("enter an item")
      return;
    }

    const i = {
      id: Math.floor(Math.random()*1000),
      value: newItem
    }

    setItems(oldItems => [...oldItems,i])
    setNewItem("");
  }


  function deleteItem(id){
    const newArray = items.filter(ite => ite.id !== id);
    setItems(newArray);
  }

  /*
  function handleInput(event){
    setNewItem(event.target.value);
    console.log(event.target.value);
  }
  */



  return (
    <div className="App">
      <h1>Zeynep's Todo List </h1>



      <div className="todo">
        <input
        type="text"
        placeholder="add an item"
        value={newItem}
        onChange={event => setNewItem(event.target.value)}
      //onChange={handleInput}
      />

      <button className="add" onClick={() => addItem()}>Add</button>

      </div>
      

      <ul>
       {items.map(item =>{
        return(
          <li key={item.id}> {item.value} 
          <button className="delete" onClick={()=> deleteItem(item.id)}>Delete</button> 
          </li>
        )
       })}
      </ul>
    </div>
  );
}

export default App;
