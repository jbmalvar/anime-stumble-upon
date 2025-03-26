import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputs, setInputs] = useState({ 
    name: '',
    image: '',
    genre:'',
    rating: '',
    description: '',
    episodes: ''
  });

  return (
    <div className = "App">
      <div className = "History">
        <h1>History</h1>
      </div>
      <div className = "Anime">
        <h1>Anime</h1>
        <h4>Discover Anime!</h4>
        <h4>👉🔴🔵👈🤞🤌🫴🟣</h4>
        <button className = "Discover">Discover</button>
      </div>
      <div className = "BanList">
        <h1>Ban List</h1>
      </div>
    </div>
  )
}

export default App
