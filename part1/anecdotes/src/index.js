import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
  const handleVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    return setVotes(votesCopy)
  };

  return (
    <div>
      <h2>Anecdotes of the day</h2>
      {props.anecdotes[selected]} <br />
      has {votes[selected]} votes <br />
      <Button text="vote" handleClick={handleVotes} />
      <Button text="next anecdote" handleClick={() => setSelected(Math.floor(Math.random() * props.anecdotes.length))} />
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[votes.indexOf(Math.max(...votes))]} <br />
      has {Math.max(...votes)} votes <br />   
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

