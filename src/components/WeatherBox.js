import React, { useState } from 'react'
import InputForm from './InputForm'
import WeatherInfo from './WeatherInfo'

function WeatherBox() {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    return (
        <div className="weather-box">
            <InputForm 
                query={query} 
                setQuery={setQuery}
                setWeather={setWeather}
            />
            <WeatherInfo 
                weather={weather}
            />
        </div>
    )
}

export default WeatherBox
