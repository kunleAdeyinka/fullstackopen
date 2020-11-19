import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => <p key={person.name}>{person.name}{' '} {person.phone}</p>)}
    </div>
  )
}

export default App;
