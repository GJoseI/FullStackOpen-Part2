import { useState, useEffect } from "react";
import axios from "axios";

import Find from "./components/Find";
import Countries from "./components/Countries";

const App = () => {
  const [findCountry, setFindCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleFindCountryChange = (event) => setFindCountry(event.target.value);

  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(findCountry.toLowerCase()),
  );

  return (
    <div>
      <Find value={findCountry} onChange={handleFindCountryChange} />
      <Countries countries={filterCountries} setFindCountry={setFindCountry}/>
    </div>
  );
};

export default App;
