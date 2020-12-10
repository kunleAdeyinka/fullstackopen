import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promised fulfilled')
      setPersons(response.data)
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

      axios.post('http://localhost:3001/persons', personObj).then(response => {
        setPersons(persons => persons.concat(personObj))
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
