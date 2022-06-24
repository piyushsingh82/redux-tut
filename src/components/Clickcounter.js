import React from "react";

function Clickcounter() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((c) => 
      c + 1
    )};

  return (<div>
      <button onClick={handleClick}>Counter {count}</button>
  </div>);
}

export default Clickcounter;
