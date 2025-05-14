import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0) //counter -> var, setCounter -> method
  //let counter = 15

  const addValue = () => {
    setCounter(counter+1)// react using batch can not like this
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter((prevCounter)=>prevCounter +1) //ok
    setCounter((prevCounter)=>prevCounter +1) 

  }
  const removeValue = () =>{
    setCounter((prevCounter)=>prevCounter -1)

  }
  return (
    <>
      <h1>react course{counter}</h1>
      <h2>cunter value: {counter}</h2>
      <button onClick={addValue}>add value</button> {" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
