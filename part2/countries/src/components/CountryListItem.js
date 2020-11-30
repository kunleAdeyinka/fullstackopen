import React, { useState } from 'react'

const CountryListItem = ({ country }) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <li key={country.name}>
            {country.name} {' '}
            <button type="submit" name={country.name} onClick={() => { setShowInfo(!showInfo) }}>show</button>
            <br />
            {
                <div style={{ display: showInfo ? "block" : "none" }}>
                    <h1>{country.name}</h1>
                    <p>capital {country.capital}</p>
                    <p>population {country.population}</p>
                    <h2>languages</h2>
                    {country.languages.map((language) => <p key={language.name}>{language.name}</p>)}
                    <img src={country.flag} alt={country.flag} style={{ width: '200px', height: '300px' }} />
                </div>
            }
        </li>
    )
}

export default CountryListItem;