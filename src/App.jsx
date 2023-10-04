// import { useState } from 'react'
import './App.css'

function App() {
  const test = (e) =>{
    console.log(e.target.value);
  }
  return (
    <>
    <h1>salom</h1>
     
      <input onChange={test} placeholder='text' />
      {/* <h1>{e.target.value}</h1> */}
    
    </>
  )
}

export default App
