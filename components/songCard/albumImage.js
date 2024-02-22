import React from "react";
import "./albumImage.css";



export default function AlbumImage(url){
    console.log(url);
    return (
        <div>
            <div className="ablumImage">
                <img src={url} alt="album-art" className="albumImage-art"/>
                {/* console.log(url); */}
            </div>
            <div className="albumImage-shadow">
                <img src={url} alt="shadow" className="albumImage-shadow"/>
            </div>
        </div>
    )
}
// export default function AlbumImage({ url }) {
//   return (
//     <div className="albumImage flex">
//       <img src={url} alt="album art" className="albumImage-art" />
//       <div className="albumImage-shadow">
//         <img src={url} alt="shadow" className="albumImage-shadow" />
//       </div>
//     </div>
//   );
// }
