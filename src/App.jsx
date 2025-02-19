import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const apiKey = '200d7c999fe95bfea1bbaf206acfbccc'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
  
  }

  return (
    <div>
      <h1>SurfMits Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformations weather={weather}/>
    </div>
  )
}

export default App
