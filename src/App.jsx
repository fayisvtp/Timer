import { useState } from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(window.myTimer);
  };

  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };

  const hours = Math.trunc(timer / 3600);
  const minutes = Math.trunc((timer % 3600) / 60);
  const seconds = timer % 60;

  return (
    <div className="container">
      <h1>Timer Using React</h1>
      <h1>
      <span>{hours.toString().padStart(2, '0')}:</span>
      <span>{minutes.toString().padStart(2, '0')}:</span>
      <span>{seconds.toString().padStart(2, '0')}</span>
      </h1>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
