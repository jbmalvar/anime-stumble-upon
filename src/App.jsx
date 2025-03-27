import { useState } from 'react'
import './App.css'
import axios from 'axios'; // Ensure axios is imported

function App() {
  const JIKAN_API_URL = import.meta.env.VITE_JIKAN_API_URL

  const [errorMessage, setErrorMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [inputs, setInputs] = useState({ 
    name: '',
    image: '',
    score: 0,
    type: '',
    status: '',
    episodes: 0,
    season: ''
  });

  async function getRandomAnime() {
    try {
      const response = await axios.get(`${JIKAN_API_URL}/random/anime`);
      const animeData = response.data.data; // The random endpoint returns anime details in `data`
      setInputs({ 
        name: animeData.title,
        image: animeData.images.jpg.image_url,
        score: animeData.score,
        type: animeData.type,
        status: animeData.status,
        episodes: animeData.episodes,
        season: animeData.season });
      setErrorMessage('');
      setVisibility(true);
      if(inputs.name !== '') {
        setHistory([...history, inputs.name]);
      }
    } catch (error) {
      console.error('Error fetching random anime:', error);
      setErrorMessage('Could not fetch a random anime. Please try again.');
    }
  }
  return (
    <div className="App">
      <div className="History">
        <h1>History</h1>
        <ul>
          {history.map((anime, index) => <li key={index}>{anime}</li>)}
        </ul>
      </div>
      <div className="Anime" style={{ height: visibility ? '90%' : '35%' }}>
        <h1>Anime</h1>
        <h4>Discover Anime!</h4>
        <h4>👉🔴🔵👈🤞🤌🫴🟣</h4>
        <div className="animeContainer" style={{ display: visibility ? 'block' : 'none' }}>
          <div className = "buttonContainer">
            <button className = "buttons">Type: {inputs.type}</button>
            <button className = "buttons">Episodes: {inputs.episodes}</button>
            <button className = "buttons">Status: {inputs.status} </button>
            <button className = "buttons">Season: {inputs.season}</button>
          </div>
          <div className = "animeDetails">
            <img src={inputs.image} alt="Anime" />
            <p>{inputs.name}: {inputs.score}</p>
          </div>
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