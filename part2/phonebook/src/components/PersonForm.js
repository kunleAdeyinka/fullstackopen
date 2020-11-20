import React from 'react';

const PersonForm = ({ changeName, changePhoneNum, addPerson }) => {
    return (
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

    )
}

export default PersonForm;