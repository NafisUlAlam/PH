import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  //console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h2>Name : {country?.name?.common}</h2>
      <img src={country?.flags?.png} alt="" />
      <p>Population : {country?.population}</p>
      <p>Area : {country?.area}</p>
      <p>
        <small>Code : {country?.cca2}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <p>{visited ? "I have visited this place" : "I want to go there"}</p>
    </div>
  );
};

export default Country;
