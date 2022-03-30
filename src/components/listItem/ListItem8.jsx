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
       
        src="https://ucf3b9a3de0de8dac3a9df16a8da.previews.dropboxusercontent.com/p/thumb/ABcxcaoBa6Hh2FbdSjoFDaeaNoXAKGXICeT4isDiLYVlSytj1-mZvAK8YM6xRxMVKhNZj0RTK4My5iKlBmGIM5hpmvyClY8qk4RKWV0bEyRBuWcGb5zoRrN-HQlhT5RZWgwqtvrfBu2eMDni6nPGO8zTDEBpb_KA3uNYlz7Dza5GmejFKLzca7asHUnskEIiNN2sCoAkphYYZZdL4EyBW8n6BGn7ZSV_SHdXwfLZNkkucw1JLr8YCePdN8EmhSfdrJOcrJi5jmWG_OfFHQ8t2yQL1rS-JaR-OCJmq0lvAX5EIMSuywuYtEJ0GnF9Kk-l5mEQ_CVm7o7Cc8FmnwUVKv3dH7vViFyjfC3Qg-qQ-B77DchBqvTzdDEnbOdtABthFHg/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://appfiles.metazooie.com/SanPatricio/Desktop%202022.02.24%20-%2019.10.08.16_Segment_0_x264.mp4"  type="video/mp4"/>
      </video>
    
          <div className="itemInfo">
            {/* <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>San Patricio</span>
              {/* <span className="limit">+16</span> */}
              <span className="limit">2022</span>
            </div>
            <div className="desc">
            Experience the life of a fish in a magical underwater world
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
