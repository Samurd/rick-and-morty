import axios from 'axios';
import { useState, useEffect } from 'react'
import { ResidentInfo } from './components/ResidentInfo';
import { LocationInfo } from './components/locationInfo';
import './App.css'

function App() {

  const [location, setLocation] = useState([]);
  const[valueSearch, setValueSearch] = useState("");
  const[urlResidents, setUrlResidents] = useState([]);
  const[numberRandom, setNumberRandom] = useState("")

  const getLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${valueSearch}`)
    .then(res => {
      setLocation(res.data)
    })
  }

  useEffect(() => {
    setUrlResidents(location.residents)
  }, [location])


  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      getLocation()
    }
  }


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 126)}`).then(res => setLocation(res.data))
  }, [])



  return (
    <>
    <header>
      <nav>
      <input type="text" onKeyDown={handleKeyDown} placeholder='Type a location id' onChange={e => setValueSearch(e.target.value)}/>
      <button onClick={getLocation}>Search</button>
      </nav>
    </header>
    <div className="container-location-main">
      <LocationInfo locationInfo={location} />
    </div>
    <div className="cards">
      {urlResidents?.map(resi => (
        <ResidentInfo link={resi} key={resi} />
      ))}
    </div>
    </>
  )
}

export default App
