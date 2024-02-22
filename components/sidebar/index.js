import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      // setImage(response.data.images[0].url);

      setImage(response.data.image[0]?.url);
      // console.log(response);
    });
  }, []);
  return (
    <div className="sidebar-container">
       <img src={image}
       className="profile-img" 
       alt="profile" />
       <div>
         <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
         <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
         <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
         <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
          <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
       </div>
       <SidebarButton title="Sign-Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  );
 }
