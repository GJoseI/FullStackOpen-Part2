import { useState, useEffect } from "react";
import axios from "axios";

import Find from "./components/Find";
import Countries from "./components/Countries";

const App = () => {
  const [findCountry, setFindCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const api_key = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(findCountry.toLowerCase()),
  );
  const handleFindCountryChange = (event) => setFindCountry(event.target.value);

  return (
    <div>
      <Find value={findCountry} onChange={handleFindCountryChange} />
      <Countries
        countries={filterCountries}
        setFindCountry={setFindCountry}
        api_key={api_key}
      />
    </div>
  );
};

export default App;
