import { useState } from 'react'
import './App.css'
import axios from 'axios'; // Ensure axios is imported

function App() {
  const JIKAN_API_URL = import.meta.env.VITE_JIKAN_API_URL

  const [errorMessage, setErrorMessage] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [inputs, setInputs] = useState({ 
    name: '',
    image: ''
  });

  async function getRandomAnime() {
    try {
      const response = await axios.get(`${JIKAN_API_URL}/random/anime`);
      const animeData = response.data.data; // The random endpoint returns anime details in `data`
      setInputs({ name: animeData.title, image: animeData.images.jpg.image_url });
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching random anime:', error);
      setErrorMessage('Could not fetch a random anime. Please try again.');
    }
  }
  return (
    <div className="App">
      <div className="History">
        <h1>History</h1>
      </div>
      <div className="Anime">
        <h1>Anime</h1>
        <h4>Discover Anime!</h4>
        <h4>👉🔴🔵👈🤞🤌🫴🟣</h4>
        <div className="animeContainer">
          <div className = "buttons">
            <button>Genre</button>
            <button>Genre</button>
            <button>Genre</button>
            <button>Genre</button>
          </div>
          <img src={inputs.image} alt="Anime" />
          <p>{inputs.name}</p>
        </div>
        <button className="Discover" onClick={getRandomAnime}>Discover</button>
      </div>
      <div className="BanList">
        <h1>Ban List</h1>
      </div>
    </div>
  )
}

export default App