import { useState } from 'react'
import Navbar from './Componentes/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <Navbar></Navbar>
    </div>
  )
}

export default App
