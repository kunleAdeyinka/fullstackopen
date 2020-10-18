import React from 'react'

const Sum = ({ parts }) => {

    const partsExercises = parts.map((part) => {
        return part.exercises
    })

    const total = partsExercises.reduce((a, b) => {
        return a + b
    })

    return (
        <p>
            <b>total of {total} exercises</b>
        </p>
    )
}

export default Sum;