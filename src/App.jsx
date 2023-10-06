import React from 'react';
import './App.css'
import { Card } from './components/cart';
import { Form } from './components/form';

function App() {
  const [data, setData] = React.useState( [] )
  return (
    <>
      <Form setData ={setData} />
      {data.map((item) => <Card key={item.id} setData={setData} {...item}/>)}
     <Card/>
    
    </>
  )
}

export default App
