import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Sidebar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="btn btn-primary">Button</button>
    </>
  )
}

export default App
