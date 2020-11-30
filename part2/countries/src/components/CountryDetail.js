import React from 'react'

const CountryDetail = ({ filteredSearch }) => {
    return (
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
    )
}

export default CountryDetail;