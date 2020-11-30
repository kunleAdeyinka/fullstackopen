import React from 'react'

const CountryList = ({ filteredSearch }) => {
    return (
        filteredSearch.map((country) => <p key={country.name}>{country.name}</p>)
    )
}

export default CountryList;