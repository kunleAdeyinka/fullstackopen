import React from 'react'

import CountryListItem from '../components/CountryListItem'

const CountryList = ({ filteredSearch }) => {
    return (
        filteredSearch.map((country) => {
            return (
                <CountryListItem country={country} key={country.name} />
            )
        })
    )
}

export default CountryList;