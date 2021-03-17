import React from 'react'

const api = {
    key: '642274e44a0b7b27715ecf4d42ca188d',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function InputForm({ query, setQuery, setWeather }) {

    function submitHandler(e) {
        e.preventDefault()
        
        document.querySelector('input').value = ''
        fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(response => response.json())
            .then(result => {
                setWeather(result)
                console.log(result)
            })
    }

    function queryHandler(e) {
        setQuery(e.target.value)
    }

    return (
        <form className="weather-form" onSubmit={submitHandler}>
           <input className="weather-input" onChange={queryHandler} placeholder="Search..." /> 
        </form>
    )
}

export default InputForm
