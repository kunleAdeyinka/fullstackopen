import React from 'react'

import CountryList from '../components/CountryList'
import CountryDetail from '../components/CountryDetail'

const CountryResult = ({ filteredSearch }) => {
    return (
        <div>


            {
                filteredSearch.length > 10 ? (
                    <p>Too may matches, specify another filter</p>
                ) : (
                        filteredSearch.length === 1 ?
                            (<CountryDetail filteredSearch={filteredSearch} />) :
                            (<CountryList filteredSearch={filteredSearch} />)
                    )
            }

        </div>
    )
}

export default CountryResult;