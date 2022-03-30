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
       
        src="https://uc7de47354e2c24c0e4268dd3f29.previews.dropboxusercontent.com/p/thumb/ABd3p8TULrRXELpu5PlWcCSg4r5Gmiu4UGuRMrWH0MeOxG7L6vfT2a5XOfXkHoGDgkBJbWIXogXFAQYio9c2QmTtdxitlZDvLRF8vgATQwLsp9XPjqXR78ZfKXmW6COx1okkNVLqzeDaD8p4oaEqijVM0W5kdo-nsOxm51ehjZDnrsSo2YYa88pkkWp5xlWAhGNf6EW4ZzSzM9iZ2F5zVXdcLNnlySp-MNPm3VJmZAWR1ik_YIJPsgqmGAK8mx7-UaR2BfWcPFS-CU1bqwRoHL7OR0tNsU6mZXCNR3f3ym86lvsLJ4WpZqxjuzNlaYyxhhK-8H7dICtGyrr5HH5fW6WB8ZuIqrrnYkoGff3D8qmQEWKzgAU0VtyxF7YWvigsVI8/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://i.ibb.co/1QHqy3d/3d-art.png"  type="video/mp4"/>
      </video>
      
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Drowning Man Gallery </span>
              {/* <span className="limit">+16</span> */}
              <span className="limit" >2022</span>
            </div>
            <div className="desc">
            Explore our art places in the metaverse.
            </div>
            <div className="genre">Art</div>
          </div>
        </>
      )}
    </div>
  );
}
