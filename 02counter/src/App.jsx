import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // (let counter, method to control the variable)

  //let counter = 5

  const addValue = ()=>{
    console.log("Clicked", counter)
    //counter = counter + 1
    if(counter<10){
      /*setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)*/
      //will be updated only once because of batches distribution in fibre mode
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      //here we are taking previous state callback and hence all are operating

    }
    
  }

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter - 1)
    }
    
  }

  //Data updation in UI through hooks (Reactive Library)
 

  return (
    <>
      <h1>React Series</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
