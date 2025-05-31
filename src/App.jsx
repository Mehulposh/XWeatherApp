import { useState } from 'react'

import './App.css'
import getData from './api/api';

function App() {

  const [searchText,setSearchText] = useState('');
  const [citydata , setCityData] = useState()
  const [loading,setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const data = await getData(searchText);
      
      setCityData(data);
      
    }
    catch(err){
      console.error(err);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div>
      <div className='searchbar'>
        <input 
          required
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Enter city name'
        />
        <button onClick={handleSubmit}>
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : citydata ?(
      
      <div className='weather-cards'>
        <div className='weather-card'>
          <p>Temperature</p>
          {citydata.current['temp_c']}°C
        </div>
        <div className='weather-card'>
          <p>Humidity</p>
          {citydata.current['humidity']}%
        </div>
        <div className='weather-card'>
          <p>Condition</p>
          {citydata.current['condition']['text']}
        </div>
        <div className='weather-card'>
          <p>Wind Speed</p>
          {citydata.current['wind_kph']} kph
        </div>
      </div>
    ) : null}
    </div>
  )
}

export default App
