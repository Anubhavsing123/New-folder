import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=5
 let [counter, setCounter] = useState(15)
 const  addvalue=()=>{
    
     setCounter(counter=>{
      if (counter<50){
          return counter+1
      }
      else{
         return counter
      }
     })

  }
  const Deletvalue=()=>{
    
    setCounter(counter=>{
      if (counter>0){
        return counter-1
      }
      else{
        return counter
      }
    })
  }

  return (
    <>
      <h1> Cha aur react</h1>
      <p> Counter Number:{counter}</p>
      <button onClick={addvalue}> ADD</button>
      <button onClick={Deletvalue}> Delete </button>
    </>
  )
}

export default App
