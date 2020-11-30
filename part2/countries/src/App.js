import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CountryForm from './components/CountryForm'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'

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
      <br />
      {filteredSearch.length > 10 ? (
        <p>Too may matches, specify another filter</p>
      ) : (
          filteredSearch.length === 1 ? (
            <CountryDetail filteredSearch={filteredSearch} />
          ) :
            (<CountryList filteredSearch={filteredSearch} />)
        )}
    </div>
  )
}

export default App;
