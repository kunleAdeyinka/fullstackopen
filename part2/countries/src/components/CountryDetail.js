import React, { useState, useEffect } from 'react'
import axios from 'axios'


const CountryDetail = ({ filteredSearch }) => {

    const [weatherObj, setWeatherObj] = useState({})

    const API_KEY = process.env.REACT_APP_API_KEY

    let countryObj = {}
    if (filteredSearch.length === 1) {
        countryObj = filteredSearch[0]
    }

    const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${countryObj.capital}`

    useEffect(() => {
        console.log('weather api initiated')
        axios.get(API_URL).then(response => {
            console.log('weather api fulfilled')
            setWeatherObj(response.data)
        })
    }, [API_URL])

    console.log(weatherObj)
    return (
        <div key={countryObj.name}>
            <h1>{countryObj.name}</h1>
            <p>capital {countryObj.capital}</p>
            <p>population {countryObj.population}</p>
            <h2>languages</h2>
            {countryObj.languages.map((language) => <li key={language.name}>{language.name}</li>)}
            <img src={countryObj.flag} alt={countryObj.flag} style={{ width: '200px', height: '300px' }} />
            <h2>Weather in {countryObj.capital}</h2>
            {
                Object.keys(weatherObj).length === 0 ? (<p>loading...</p>) : (
                    <div>
                        <p>temperature: {weatherObj.current.temperature} celsius</p>
                        <img src={weatherObj.current.weather_icons[0]} alt={weatherObj.current.weather_descriptions[0]} style={{ width: '100px', height: '100px' }} />
                        <p>wind: {weatherObj.current.wind_speed} mph direction {weatherObj.current.wind_dir}</p>
                    </div>
                )
            }
        </div>
    )
}

export default CountryDetail;