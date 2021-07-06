import React, { createContext } from "react";
// import axios from "axios";
import ComA from "./ComA";
const Firstname = createContext();
const Lastname = createContext();
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <h4>Example using Context APi</h4>
      <Firstname.Provider value={"Piyush Hukam"}>
        <Lastname.Provider value={"Singh Full stack developer"}>
          <ComA />
        </Lastname.Provider>
      </Firstname.Provider>
    </div>
  );
};

export default Dashboard;
export { Firstname, Lastname };
