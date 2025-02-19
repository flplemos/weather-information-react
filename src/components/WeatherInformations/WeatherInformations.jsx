function WeatherInformations({ weather }) {
    if (!weather.weather) {
      return <p>Busque por uma cidade para ver a previsão.</p>;
    }
  
    return (
      <div>
        <h2>{weather.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Ícone do clima"
        />
        <p>Temperatura: {Math.round(weather.main.temp)}°C</p>
      </div>
    );
  }
  
  export default WeatherInformations;
  