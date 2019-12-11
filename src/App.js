import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaImage from './components/NasaImage';
import NasaDate from './components/NasaDate';
import Explanation from './components/Explanation';
import Header from './components/Header';

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=eviJdBj68ZbepJO9Wz0A8f6h7JsTpMwzXzwOB0IF')
    .then(response => {
      console.log(response.data);
      setNasaData(response.data);
    })
    .catch(error => {
      console.log('Uh oh... that didn\'t work', error);
    })
  },[]);

  const theHtml = document.querySelector('html');
  theHtml.style.background = "url("+nasaData.url+" ) no-repeat center center fixed "

  return (
    <div className="App">
      <Header title={nasaData.title}/>
      <NasaDate date={nasaData.date} />
      <Explanation explanation={nasaData.explanation} />
    </div>
  );
}

export default App;
