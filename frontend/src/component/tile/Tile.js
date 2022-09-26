import './Tile.css';
import { useEffect, useState } from 'react';


function Tile(props) {
  const { dogIndex } = props;
  // Insert a React UseState hook for the image URL
  /* YOUR CODE HERE */

  useEffect(() => {
    const getImage = async () => {
      const res = await fetch(`http://localhost:3001/dog/${dogIndex}`);
      const dogImage = await res.json();
      // Set the image variable you made from UseState to dogImage
    }
    getImage();
  });
  
  return (
    <div className="tile">
      <img src={/* YOUR CODE HERE */}/>
    </div>
  );
}

export default Tile;