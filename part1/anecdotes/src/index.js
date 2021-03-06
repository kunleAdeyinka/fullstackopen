import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })


  const handleVote = () => {
    const copy = {
      ...points,
    }
    copy[selected] += 1
    setPoints(copy)
  }

  const Header = props => <h1>{props.text}</h1>

  const ShowMaxVote = () => {
    let key = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b)
    console.log('max is ', key)
    return (
      <div>
        <p>
          {anecdotes[key]} <br />
          has {" "} {points[key]} {" "} votes
        </p>
      </div>
    )
  }



  return (
    <div>
      <Header text="Anecdote of the day" />
      {props.anecdotes[selected]}
      <br />
      has {points[selected]} votes <br />
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <br />
      <Header text="Anecdote with most votes" />
      <ShowMaxVote />
    </div>
  )
}


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root')
);
