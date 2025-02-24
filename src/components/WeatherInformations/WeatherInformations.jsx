function WeatherInformations({ weather }) {
    if (!weather.weather) {
      return <p>Busque por uma cidade para ver a previsão.</p>;
    }
  
    return (
      <div>
        <h2>{weather.name}</h2>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Ícone do clima"
          />
          <p>Temperatura: {Math.round(weather.main.temp)}°C</p>
        </div>
        <p>{weather.weather[0].description}</p>
        <div>
          <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
          <p>Umidade: {weather.main.humidity}</p>
          <p>Pressão: {weather.main.pressure}</p>
        </div>
      </div>
    );
  }
  
  export default WeatherInformations;
  