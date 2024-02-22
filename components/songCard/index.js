 import React, { useState } from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
 import "./songCard.css";

export default function SongCard({ album }) {
  const [isFavorite,setIsFavorite]=useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
 
  };

  return (
    <div className="songCard-body flex">
        <AlbumImage url={album?.images[0]?.url}/>
        <AlbumInfo/>
        <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

// export default function SongCard(){
//     return <div>SongCArd</div>
// }
  

