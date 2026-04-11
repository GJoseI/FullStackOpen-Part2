import ListCountry from "./ListCountry";
import Country from "./Country";

import { useState, useEffect } from "react";
import axios from "axios";

const Countries = ({ countries, setFindCountry, api_key }) => {
  const totalCountries = countries.length;
  const [weather, setWeather] = useState({});
  const weatherBaseUrl = "https://api.openweathermap.org/data/2.5";

  useEffect(() => {
    if (totalCountries === 1) {
      axios
        .get(
          `${weatherBaseUrl}/weather?q=${countries[0].capital[0]}&appid=${api_key}`,
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
  }, [countries]);

  if (totalCountries > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (totalCountries === 1) {
    if (weather.main != undefined) {
      return <Country country={countries[0]} weather={weather} />;
    }
  } else {
    return countries.map((country) => (
      <ListCountry
        key={country.name.common}
        name={country.name.common}
        onClick={() => setFindCountry(country.name.common)}
      />
    ));
  }
};

export default Countries;
