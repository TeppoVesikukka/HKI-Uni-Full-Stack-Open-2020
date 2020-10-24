import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return (
    <>
      <button style = {{ display: "inline-block"}} onClick = {props.click1}>{props.text1}</button>
    </>
  )
}

const StatisticLine = (props) => {
  return(
    <div>
      <table style= {{ width:"80px"}}>
        <tbody>
          <tr>
            <td style={{ textAlign: "left" }}>{props.text}</td>
            <td style={{ textAlign: "right" }}>{props.value}</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}


const Statistics = (props) => {
  if (props.all === 0){
    return(
      <p>No feedback given</p>
    )
  }
  else { 
  return(
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="All" value ={props.all} />
      <StatisticLine text="Average" value ={props.average} />
      <StatisticLine text="Positive" value = {props.positive} />

    </div>
  )
}
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)  
  const handleClickBad = () => setBad(bad + 1)
  const All = good + neutral+ bad
  const average = (good - bad) / All
  const positive = (good / All)*100 + "%"

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button click1 = {handleClickGood} text1="Good"/>
      <Button click1 = {handleClickNeutral} text1="Neutral" />
      <Button click1 = {handleClickBad} text1="Bad"/>

      <h1>statistics</h1>
      <Statistics  good= {good} 
      neutral= {neutral} 
      bad= {bad} all= {All} 
      average = {average} 
      positive = {positive}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)