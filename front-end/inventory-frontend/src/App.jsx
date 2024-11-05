import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Categories from './Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Categories /> 
  )
}

export default App
