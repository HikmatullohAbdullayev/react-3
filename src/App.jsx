import './App.css'
import { Card } from './components/cart';

function App() {
  const test = (e) =>{
    console.log(e.target.value);
  }
  return (
    <>
     <Card/>
      <input onChange={test} placeholder='text' />
    
    </>
  )
}

export default App
