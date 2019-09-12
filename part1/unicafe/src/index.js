import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Buttons = ({ good, setGood, neutral, setNeutral, bad, setBad}) => {
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }  
  
  return (
    <>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}> {text} </button>
  ) 
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (!all) return <p>No feedback given</p>

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={((good - bad) / all).toFixed(1)} />
          <Statistic text="positive" value={(good * 100 / all).toFixed(1) + ' %'} />
        </tbody>
      </table>
    </>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Buttons good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)