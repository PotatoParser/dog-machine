import './Tile.css';
import { useEffect, useState } from 'react';


function Tile(props) {
  const { dogIndex } = props;
  const [image, setImage] = useState('');

  useEffect(() => {
    const getImage = async () => {
      const res = await fetch(`http://localhost:3001/dog/${dogIndex}`); //fetch from backend
      const dogImage = await res.json(); //parse json to get the image url

      setImage(dogImage); //set image to image url
    }
    getImage(); //getImage on render/rerender
  });

  
  return (
    <div className="tile">
      <img src={image}/>
    </div>
  );
}

export default Tile;