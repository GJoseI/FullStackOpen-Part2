import Language from "./Language";

const Country = ({ country }) => {
  const imgUrl = country[0].flags.png;
  return (
    <div>
      <h1>{country[0].name.common}</h1>
      <div>Capital: {country[0].capital}</div>
      <div>Area: {country[0].area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country[0].languages).map(([key, value]) => (
          <Language key={key} value={value} />
        ))}
      </ul>
      <img src={imgUrl} alt="Flag" />
    </div>
  );
};

export default Country;
