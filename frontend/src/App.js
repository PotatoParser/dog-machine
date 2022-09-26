import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './component/button/Button';
import Tile from './component/tile/Tile';

function App() {
  const [dogIndex, setDogIndex] = useState(0);
  const [dogCount, setDogCount] = useState(0);
  // const [image, setImage] = useState("");

  // const updateImage = async () => {
  //   const res = await fetch(`http://localhost:3001/dog/${dogIndex}`);
  //   console.log(res);
  //   const image = await res.json();
  //   console.log(image);
  //   setImage(image);
  // }

  const prevDog = async () => {
    if (dogIndex <= 0) return;
    setDogIndex(dogIndex - 1);
    // await updateImage();
  };

  const nextDog = async () => {
    if (dogIndex === dogCount) {
      // Generate next dog
      // TODO: axios.get('/dog/random')
      await fetch('http://localhost:3001/dog/random')
    }
    setDogIndex(dogIndex + 1);
    setDogCount(dogCount + 1);
    // await updateImage();
  };

  return (
    <div className="app">
      <Tile dogIndex={dogIndex}></Tile>
      <div className="button-group">
        <Button onClick={prevDog}>
          Prev
        </Button>
        <Button onClick={nextDog}>
          Next
        </Button>
      </div>
      {dogIndex}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
