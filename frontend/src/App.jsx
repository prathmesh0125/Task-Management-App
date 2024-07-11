import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='font-bold  text-4xl mb-4 underline'>Task Management App</h1>
      <TaskList/>
    </div>
  )
}

export default App
