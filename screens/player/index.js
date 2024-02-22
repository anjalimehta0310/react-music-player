 import React, {useState,useEffect}  from "react";
 import "./player.css";
 import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import Queue from "../../components/queue"
import SongCard from "../../components/songCard";
import AudioPLayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";

 export default function Player() {
    const location = useLocation();
    console.log(location);
   const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
   const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient.get("playlists/"+location.state?.id+"/tracks")
      .then((res) =>{
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
    else {
      // Fetch the user's playlists and get the last playlist
      apiClient.get("me/playlists")
        .then((res) => {
          const lastPlaylist = res.data.items[res.data.items.length - 1];
          if (lastPlaylist) {
            return apiClient.get("playlists/" + lastPlaylist.id + "/tracks");
          }
        })
        .then((res) => {
          if (res) {
            setTracks(res.data.items);
            setCurrentTrack(res.data?.items[0]?.track);
          }
        })
        .catch((error) => {
          console.error("Error fetching playlists:", error);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  // if(!location.state || !location.state.id){
  //   return <div>No playlist selected</div>;
  // }

 return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPLayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
 }
