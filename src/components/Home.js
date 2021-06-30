import react, { useState, useEffect } from "react";
import Weatherpage from "./Weatherpage";
import TodoList from "./TodoList";
import weatherpage from "./Weatherpage";



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
  const checkplace = () => {
    console.log("place confirmed");
  };

  return (
    <div className="container">
      <div class="row">
        <div className="col-md-4">
          <div class="weather_app">
            <form class="form">
              <input
                type="search"
                className="form-control"
                onChange={checkplace}
              /> <weatherpage />
              <h2>
                Location:
                <i className="fa fas-street-view" aria-hidden="true">
                  
                </i>Pune
              </h2>
              <h4>Temp</h4>
              <h6>
                Min <span>2.34 Cel</span> ||Max <span>5.62 cel</span>
              </h6>
            </form>
            <div className="ocean">
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
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
                    onSelect={deleteItem}
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
