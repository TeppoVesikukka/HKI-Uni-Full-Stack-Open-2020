import React, { useState } from 'react'
import ReactDOM from 'react-dom'



  const Button = (props) =>{
    return(
      <div>
        <button onClick = {props.clickVote}>vote</button>
        <button onClick = {props.click}>next anecdote</button>
      </div>
    )
  }


  const App = (props) => {

    const [selected, setSelected] = useState(0)
    const [points, setVote] = useState([0, 0, 0, 0, 0, 0])
    const [votes, setMost] = useState(0)
    const [mostVotes, setMostVotes] = useState(0)

    const RandomHandleClicker = () => {
      const randomi = Math.floor(Math.random()*6) + (selected*0)
      setSelected(randomi)
    }

    const increseByOne = () => {
      const copy = [...points]
      copy[selected] += 1
      setVote(copy)

      let x = votes
      let y = mostVotes
      let i = 0

      copy.forEach(value => {
  
        if (value > x){
          x = value
          y = i
          setMost(x)
          setMostVotes(y)
          
        } else{
          setMost(x)
          setMostVotes(y)
        }
        i++
      })
    }    
      
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p> {props.anecdotes[selected]} <br/>
            has {points[selected]} votes</p>
        <Button clickVote = {increseByOne} click = {RandomHandleClicker} />
        <h1>Anecdote with most votes</h1>
        <p> {props.anecdotes[mostVotes]} <br/>
            has {votes} votes</p>
      </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)