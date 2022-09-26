import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './component/button/Button';
import Tile from './component/tile/Tile';

function App() {
  const [dogIndex, setDogIndex] = useState(0);
  // Initialize dogCount and setDogCount with useState here
  // YOUR CODE HERE

  const prevDog = async () => {
    if (dogIndex <= 0) return;
    setDogIndex(dogIndex - 1);
  };

  const nextDog = async () => {
    if (dogIndex === dogCount) {
      await fetch('http://localhost:3001/dog/random')
    }
    // Add 1 to dogIndex here
    // YOUR CODE HERE
    setDogCount(dogCount + 1);
  };

  return (
    <div className="app-wrapper">
      <div className="app">
        {/* Insert the Tile component here, passing in the dogIndex state */}
        {/* YOUR CODE HERE */}
        <h1>DOG MACHINE 3000</h1>
        <div className="button-group">
          <Button onClick={prevDog}>
            Previous
          </Button>
          <Button onClick={nextDog}>
            Next
          </Button>
        </div>
        <p>Dog Number: {dogIndex}</p>
      </div>
    </div>
  );
}

export default App;
