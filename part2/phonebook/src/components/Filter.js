import React from 'react';

const Filter = ({ handleKeyUp, persons }) => {
    return (
        <div>
            filter shown with: <input onKeyUp={handleKeyUp} />
            <br /><br />
            {persons.map((filteredPerson) => <p key={filteredPerson.name}>{filteredPerson.name}{' '} {filteredPerson.number}</p>)}
            <br /><br />
        </div>
    )
}

export default Filter;