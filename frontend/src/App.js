import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './component/button/Button';
import Tile from './component/tile/Tile';

function App() {
  const [dogIndex, setDogIndex] = useState(-1);
  const [dogCount, setDogCount] = useState(0);

  const prevDog = async () => {
    if (dogIndex <= 0) return;
    setDogIndex(dogIndex - 1);
  };

  const nextDog = async () => {
    if (dogIndex === dogCount - 1) {
      await fetch('http://localhost:3001/dog/random');
    }
    setDogIndex(dogIndex + 1);
    setDogCount(dogCount + 1);
  };

  return (
    <div className="app-wrapper">
      <div className="app">
        <Tile dogIndex={dogIndex}></Tile>
        <h1>DOG MACHINE 3000</h1>
        <div className="button-group">
          <Button onClick={prevDog}>
            Previous
          </Button>
          <Button onClick={nextDog}>
            Next
          </Button>
        </div>
        <p>Dog Number: {dogIndex + 1}</p>
      </div>
    </div>
  );
}

export default App;
