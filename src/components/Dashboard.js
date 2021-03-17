import React from 'react'
import Theme from './Theme'
import WeatherBox from './WeatherBox'

function Dashboard() {
    return (
        <div className="dashboard">
            <Theme />
            <WeatherBox />
        </div>
    )
}

export default Dashboard
