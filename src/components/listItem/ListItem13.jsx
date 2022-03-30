import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import Background from "./Deserttemple.mp4"
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const trailer =
    "https://player.vimeo.com/video/680668427?h=054bc3a8e6";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
       
        src="https://ucc5c5ca3ca682410f84df298ea3.previews.dropboxusercontent.com/p/thumb/ABeZSutAXViV27GVk04RuH4YRaBp7q_Yn4NJuh5ChEzZrEqDVCQuknfRgcV9RR_Zt_er2__1hpHQssl8Yr5vh09_nWUOJEKDExxbYetnG9NDwZUGBlC0SyE7Z03ZbC2unUv0yi1MviHCzk3sODFFZsVh9BN9q2Cq_TbI782ZVWFomGT7Lzu0zj55NWXIFnvxefR1TQKeExsoZswXlDyfFVv1m3Wmrc-bbHBOFzz8UHDrLQzxRJ4kRXWyg_hEDPc2nfYyYHKT111Juw7bjiCRX4CyAJxxHthYgvm7PLosBjjA1xZDrN2_diE4CDzg7iJTMl8YworyH-3zGWwpmeTX9tDtkGhNJ2sYVuryiv_4cVCtlZyK7EeYhEF7qrgFhLj8uQ4/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://i.ibb.co/Fgp4L71/RPG.png"  type="video/mp4"/>
      </video>
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>﻿Battle RPG demo </span>
              {/* <span className="limit">+16</span> */}
              <span className="limit" >2022</span>
            </div>
            <div className="desc">
            Compete in a race in order to find out who is the fastest ZOOIE.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
