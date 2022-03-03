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
       
        src="https://i.ibb.co/c1V5Nhz/Highres-Screenshot00000-1.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
          
          <video src={Background} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>Alien Habitat</span>
              <span className="limit">+16</span>
              <span>2022</span>
            </div>
            <div className="desc">
            A team of astronauts encounter alien lifeform after responding to an unknown transmission from space.
            </div>
            <div className="genre">Fantasy</div>
          </div>
        </>
      )}
    </div>
  );
}
