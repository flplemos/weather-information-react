import './WeatherInformations.css'

function WeatherInformations({ weather }) {
    if (!weather.weather) {
      return <p>Busque por uma cidade para ver a previsão.</p>;
    }
  
    return (
      <div className='weather-container'>
        <h2>{weather.name}</h2>
        <div className='weahter-info'>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Ícone do clima"
          />
          <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
        </div>
        <p className='description'>{weather.weather[0].description}</p>
        <div className='details'>
          <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
          <p>Umidade: {weather.main.humidity}</p>
          <p>Pressão: {weather.main.pressure}</p>
        </div>
      </div>
    );
  }
  
  export default WeatherInformations;
  