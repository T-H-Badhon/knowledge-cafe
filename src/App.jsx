import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header></Header>
      <Body></Body>
      
    </div>
  )
}

export default App
