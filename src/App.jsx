import { useState } from "react"

import { Header } from "./components/Header.jsx"
import {UserInput} from "./components/UserInput.jsx"

function App() {  
const [userInput, setUserInput] = useState({
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10
})  

  return (
    <>
      <Header id='header'/>
      <UserInput />
    </>
  )
}

export default App
