import { useState } from "react"

import { Header } from "./components/Header.jsx"
import {UserInput} from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

function App() {  
const [userInput, setUserInput] = useState({
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10
})  
const isInputTrue = userInput.duration >= 1; 

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return {
        ...prevUserInput, [inputIdentifier ]: +newValue
      }
      
  })
}

  return (
    <>
      <Header id='header'/>
      <UserInput userInput={userInput} onChangeInput={handleChange}/>
      {!isInputTrue && <p className='center'>Please input a duration larger than 0</p> }
      {isInputTrue && <Results input={userInput}/>}
    </>
  )
}
export default App
