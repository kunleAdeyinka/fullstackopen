import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = props => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => (
  <tr><td>{props.text}</td><td>{props.value}{props.symbol}</td></tr>
)

const Statistics = (props) => {

  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="neutral" value={props.bad} />
          <Statistic text="bad" value={props.neutral} />
          <Statistic text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          <Statistic text="positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100} symbol="%" />
        </tbody>
      </table>
    )
  }

}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback here" />
      <div>
        <Button text="good" handleClick={() => setGood(good + 1)} />
        <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <Header text="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
