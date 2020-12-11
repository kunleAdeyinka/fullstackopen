import React from 'react';

import Person from './Person'

const Persons = ({ persons, deletePerson }) => {
    return (
        <div>
            {persons.map((person) => <Person person={person} key={person.id} deletePerson={deletePerson} />)}
        </div>
    )
}

export default Persons;