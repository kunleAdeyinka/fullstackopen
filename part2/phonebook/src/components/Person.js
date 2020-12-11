import React from 'react';

const Person = ({ person, deletePerson }) => {
    return (
        <div>
            <p key={person.name}>
                {person.name}{' '} {person.number}
                <button onClick={() => deletePerson(person.id)}>Delete</button>

            </p>
        </div>
    )
}

export default Person;