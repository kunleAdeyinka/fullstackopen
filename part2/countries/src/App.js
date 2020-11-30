import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CountryForm from './components/CountryForm'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredSearch, setFilteredSearch] = useState([])

  useEffect(() => {
    console.log('effect initiated')
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])

  console.log('render', countries.length, 'countries')

  const handleKeyUp = (e) => {
    console.log(e.target.value)
    const query = e.target.value
    const filteredQuery = countries.filter(
      country => { return country.name.toLowerCase().includes(query) }
    )
    console.log(query, filteredQuery.length)
    setFilteredSearch(filteredQuery)
  }




  return (
    <div>
      <CountryForm handleKeyUp={handleKeyUp} />
      {filteredSearch.length > 10 ? (
        <p>Too may matches, specify another filter</p>
      ) : (
          filteredSearch.length === 1 ? (
            filteredSearch.map((country) => {
              return (
                <div key={country.name}>
                  <h1>{country.name}</h1>
                  <p>capital {country.capital}</p>
                  <p>population {country.population}</p>
                  <h2>languages</h2>
                  {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
                  <img src={country.flag} alt={country.flag} style={{ width: '200px', height: '300px' }} />
                </div>
              )
            })
          ) : (filteredSearch.map((country) => <p key={country.name}>{country.name}</p>))
        )}
    </div>
  )
}

export default App;
