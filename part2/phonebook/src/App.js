import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      console.log('promised fulfilled')
      setPersons(initialPersons)
    })
  }, [])

  console.log('render', persons.length, 'persons')


  const addPerson = (e) => {
    e.preventDefault();
    if (!newName) {
      alert(`name cannot be empty`)
    } else if (!newPhone) {
      alert(`numberBruce cannot be empty`)
    } else if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      let lastId = persons[persons.length - 1].id
      lastId++

      let personObj = {
        name: newName,
        number: newPhone,
        id: lastId
      }

      personService.create(personObj).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
      })

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
