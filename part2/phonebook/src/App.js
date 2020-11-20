import React, { useState } from 'react'

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
      personObj.phone = newPhone
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
      <div>
        filter shown with: <input onKeyUp={handleKeyUp} />
        <br /><br />
        {filteredPersons.map((filteredPerson) => <p key={filteredPerson.name}>{filteredPerson.name}{' '} {filteredPerson.number}</p>)}
        <br /><br />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={changeName} />
        </div>
        <div>
          <br />
          number: <input onChange={changePhoneNum} />
        </div>
        <div>
          <br />
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <p key={person.name}>{person.name}{' '} {person.number}</p>)}
    </div>
  )
}

export default App;
