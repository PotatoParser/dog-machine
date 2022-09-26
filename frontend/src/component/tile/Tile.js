import './Tile.css';
import { useEffect, useState } from 'react';


function Tile(props) {

  const [image, setImage] = useState('');

  useEffect(() => {
    const getImage = async () => {
      const res = await fetch(`http://localhost:3001/dog/${dogIndex}`);

      console.log(res);

      const dogImage = await res.json();

      setImage(dogImage);
    }

    getImage();
  });

  const { dogIndex } = props;
  
  return (
    <div className="tile">
      <img src={image}/>
    </div>
  );
}

export default Tile;