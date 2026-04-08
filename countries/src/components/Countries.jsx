import ListCountry from "./ListCountry";
import Country from "./Country";

const Countries = ({ countries }) => {
  const totalCountries = countries.length;
  console.log(totalCountries, "paises totales");

  if (totalCountries > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (totalCountries === 1) {
    return <Country country={countries} />;
  } else {
    return countries.map((country) => (
      <ListCountry key={country.name.common} name={country.name.common} />
    ));
  }
};

export default Countries;
