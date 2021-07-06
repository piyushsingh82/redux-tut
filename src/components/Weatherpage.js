import React, { useState, useEffect } from "react";

const Weatherpage = () => {
  const [city, setCity] = useState(null);

  const [search, setSearch] = useState("Mumbai");

  const curdate = new Date().toLocaleDateString();

  const curtime = new Date().toLocaleTimeString();
 
  
  const curHour = new Date().getHours();
  
  let greeting;
  if (curHour > 4 && curHour < 12) {
    greeting = "Good Moring , Piyush Singh !!";
  } else if (curHour >= 12 && curHour <= 16) {
    greeting = "Good Afternoon , Piyush Singh !!";
  } else if (curHour >= 14 && curHour <= 19) {
    greeting = "Good Evening , Piyush Singh !!";
  } else {
    greeting = "Welcome at Night, Piyush Singh !! ";
  }


  useEffect(() => {

  const fetchApI = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0d10acae220d82c0fb87a003680d1dca`;
    const response = await fetch(url);
    const resJson = await response.json();
   
    setCity(resJson.main);
  };
    fetchApI();

  }, [search]);

  return (
    <div>
      <div className="container">
        <div className=" row">
         
          <div className="weather_app col-md-auto">
          <h3>{greeting}</h3>
            <p className="text-white">Today is {curdate} And Time Now is {curtime}</p>
            <p className="text-dark bg-warning">Search Today's Weather </p>
            <div className="form">
              <input
                type="search"
                className="form-control"
                placeholder="Search your city"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            {!city ? (
              <p className="error">City not found,Search some other city!!</p>
            ) : (
              <>
                <h2>
                  Location:
                  <i className="fa fas-street-view" aria-hidden="true"></i>
                  {search}
                </h2>
                <h4 className="text-warning bigFont">Temperature</h4>
                <p className="text-dark bg-light ">{city.temp}</p>
                <h6 >
                  Min <span className="text-dark bg-light">{city.temp_min}Cel</span> || Max{" "}
                        <span className="text-dark bg-light">{city.temp_max} cel</span>
                </h6>
              </>
            )}

            <div className="ocean">
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weatherpage;
