import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log(country);
    setVisitedCountries([...visitedCountries, country]);
  };
  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      <div>
        <h5>visited countries : {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca2}>
              <h5>Name : {country.name.common}</h5>
              <img src={country?.flags?.png} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <div className={"country-container"}>
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca2}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
