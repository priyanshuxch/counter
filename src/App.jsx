import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = function() {
    setCount(count + 1)
  }

  const removeValue = function() {
    setCount(count - 1)
  }

  return (
    <div className='box'>
      <h1>Counter App</h1>
      <p>Value: {count}</p>
      <div className="buttons">
        <button onClick={addValue} className="add">Add</button>
        <button onClick={removeValue} className="remove">Remove</button>
      </div>
    </div>
  )
}

export default App
