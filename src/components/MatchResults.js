import React, { useEffect, useState } from "react";

const MatchResults = () => {
  const [users, setUsers] = useState([]);
  
  const fetchAPi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    fetchAPi();
  }, []);
  
  return (
    <div>
      <h1>
        Listing page : total count is {users.length}  
      </h1>
      <ul className="listing">
        {users?users.map((user, index) => {
              return (
                <li key="index">
                   {user.title}
                </li>
              );
            }):<p>User count is 0</p>
          }
      </ul>
    </div>
  );
};

export default MatchResults;
