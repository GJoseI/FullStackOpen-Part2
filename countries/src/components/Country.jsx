const Country = ({ country, weather }) => {
  const imgUrl = country.flags.png;
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img src={imgUrl} alt="Flag" />
      <h2>Weather in {country.capital[0]}</h2>
      <p>Temperature {weather.main.temp - 273.15}°C</p>
      <img
        src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
        alt="Weather icon"
      ></img>
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Country;
