import React, { useState } from 'react'

function WeatherInfo({ weather }) {

    function getCurrentTime(d) {

        let year = d.getFullYear()
        let month = d.getMonth()
        let day = d.getDate()
        let hour = d.getHours()
        let minute = d.getMinutes()

        return `${year}-${month}-${day} ${hour}:${minute}`
    }

    function setWeatherIcon(w) {
        let iconName = ''
        if(w === 'Rain') iconName = 'fa-cloud-rain'
        else if(w === 'Snow') iconName = 'fa-snowflake'
        else if(w === 'Clouds') iconName = 'fa-cloud'
        else iconName = 'fa-sun'

        return <i className={`fas ${iconName}`}></i>
    }

    return (
        <div className="weather-info">
            <div>
                <h1 className="shadowed-text">City:</h1>
                <h1 className="shadowed-text">Country:</h1>
                <h1 className="shadowed-text">Time:</h1>
                <h1 className="shadowed-text">Temperature:</h1>
                <h1 className="shadowed-text">Weather:</h1>
                <h1 className="shadowed-text">Humidity:</h1>
            </div>
            {(typeof weather.main != "undefined") ? (
                <div className="info">
                    <h1 className="shadowed-text">{weather.name}</h1>
                    <h1 className="shadowed-text">{weather.sys.country}</h1>
                    <h1 className="shadowed-text">{getCurrentTime(new Date())}</h1>
                    <h1 className="shadowed-text">{Math.round(weather.main.temp)}°C</h1>
                    <h1 className="shadowed-text">{weather.weather[0].main} {setWeatherIcon(weather.weather[0].main)}</h1>
                    <h1 className="shadowed-text">{weather.main.humidity}%</h1>
                </div>
            ) : ('')}
            
        </div>
    )
}

export default WeatherInfo
