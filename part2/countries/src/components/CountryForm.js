import React from 'react'

const CountryForm = ({ handleKeyUp }) => {
    return (
        <div>
            find countries: <input onKeyUp={handleKeyUp} />
        </div>
    )
}

export default CountryForm;