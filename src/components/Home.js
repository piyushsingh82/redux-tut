import React, { useState } from "react";

import TodoList from "./TodoList";
import CounterX from "./HOC/CounterX";
import HoverCounter from "./HOC/HoverCounter";

const Home = () => {
  const [InputList, setInputlist] = useState("Buy A Apple");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputlist(event.target.value);
  };
  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, InputList];
    });
    setInputlist("");
  };
  const deleteItem = (id) => {
    setItems((olditems) => {
      return olditems.filter((olditemdata, index) => {
        return index !== id;
      });
    });
    // console.log("item deleted");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="col-md-12">
          <h1>Using HOC Component</h1>
          <CounterX />
          <HoverCounter />
        </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="block-items">
            <h1>Todo List</h1>
            <p></p>
            <div className="form-inline">
              <input
                type="text"
                placeholder="Add Items"
                className="form-control"
                value={InputList}
                onChange={itemEvent}
              />
              <button onClick={listOfItems} className="btn btn-danger">
                {" "}
                +
              </button>
            </div>
            <ol>
              {items.map((itemval, index) => {
                return (
                  <TodoList
                    key={index}
                    id={index}
                    text={itemval}
                    onDeleteThis={deleteItem}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
