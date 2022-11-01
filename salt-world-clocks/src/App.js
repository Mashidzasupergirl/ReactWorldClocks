import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [ClockState, setClockState] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date)
        }, 1000);
    }, [])

    const zones = [
      {title: 'Stockholm', zone: 'Europe/Stockholm'}, 
      {title: 'London', zone: 'Europe/London'},
      {title: 'Paris', zone: 'Europe/Paris'},
      {title: 'Moscow', zone: 'Europe/Moscow'},
      {title: 'Tokyo', zone: 'Asia/Tokyo'},
      {title: 'New York', zone: 'America/New_York'},
      {title: 'Los Angeles', zone: 'America/Los_Angeles'},
      {title: 'Sao Paulo', zone: 'America/Sao_Paulo'},
      {title: 'Damascus', zone: 'Asia/Damascus'},
  ]

  return (
    <div className="App">
      <Header/>
      <Board zones={zones} date={ClockState}/>
    </div>
  );
}

export default App;
