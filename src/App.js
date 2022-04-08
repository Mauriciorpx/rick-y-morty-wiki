/* import logo from './logo.svg'; */
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import SearchBox from './components/SearchBox';
import ResidentsList from './components/ResidentsList';
import LocationInfo from './components/LocationInfo';

function App() {

  const [location, setLocation] = useState({});

  useEffect(() =>{
    /* Random number for a random location => Return a random number between 0 and 125, so we need add 1 */
    const random = Math.floor(Math.random() * 126) +1;
    /* For dynamic code, we use backpics on the url */
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res => setLocation(res.data))
  }, []);
  
  console.log(location)

  return (
    <div className="App">
      <SearchBox setLocation = {setLocation}/>
      
      <LocationInfo location = {location}/>
      
      <ResidentsList residents ={location?.residents}/>
    </div>
  );
}

export default App;
