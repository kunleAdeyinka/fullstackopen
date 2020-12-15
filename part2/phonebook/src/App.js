import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  const [notificationMsg, setNotifictionMsg] = useState(null)

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
      alert(`number cannot be empty`)
    } else if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one`)) {
        const personToUpdate = persons.find(person => person.name === newName)
        personService.updatePerson(personToUpdate.id).then(response => {
          setPersons(persons.map(person => person.name === newName ? { ...person, number: newPhone } : person))
        })
      }
    } else {
      let lastId = persons[persons.length - 1].id
      lastId++

      let personObj = {
        name: newName,
        number: newPhone,
        id: lastId
      }

      personService.create(personObj).then(returnedPerson => {
        setNotifictionMsg(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setNotifictionMsg(null)
        }, 5000)

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

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${personToDelete.name}`)) {
      personService.deletePerson(personToDelete.id).then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMsg} />

      <Filter handleKeyUp={handleKeyUp} persons={filteredPersons} />

      <h2>add a new</h2>

      <PersonForm changeName={changeName} changePhoneNum={changePhoneNum} addPerson={addPerson} />

      <h2>Numbers</h2>

      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App;
