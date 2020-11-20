import React, { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      let personObj = {}
      personObj.name = newName
      personObj.number = newPhone
      setPersons(persons => persons.concat(personObj))
    }
  }

  const changeName = (e) => {
    setNewName(e.target.value)
  }

  const changePhoneNum = (e) => {
    setNewPhone(e.target.value)
  }

  const handleKeyUp = (e) => {
    const searchQry = e.target.value
    const filteredPersons = persons.filter(
      person => {
        return person.name.toLowerCase().includes(searchQry)
      }
    )
    setFilteredPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleKeyUp={handleKeyUp} persons={filteredPersons} />

      <h2>add a new</h2>

      <PersonForm changeName={changeName} changePhoneNum={changePhoneNum} addPerson={addPerson} />

      <h2>Numbers</h2>

      <Persons persons={persons} />
    </div>
  )
}

export default App;
