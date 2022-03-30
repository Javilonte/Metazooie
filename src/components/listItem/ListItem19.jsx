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
       
        src="https://ucfc53ef1f24d00b5cd4f2a64e89.previews.dropboxusercontent.com/p/thumb/ABe9Qntq69wNSLDumQDsBVOe35vj5bCFZvCXp7IYH2fnL124hiW1dR3wsfUWjRA98Xq4cQlBJD4ZYcSkilqDm4EAOrASfMt9ecJ3sOZ5E65o4XpHxEwmz3JOwfdYMMXPCUpCbAL0JBK2DHizIo6bQ_nRUCe9WOjppGtgGI1OsS9OXqWKj2XkpjgunkfjKWdTFgu4ZUzzocVdMwLyO6S7GE3BGfXY_-eC0S8CHF2ItgiDtdYAVQ5qz3W2yjO3IaPo8_FejOaC_xCAnllueSiewJXYwume6iEaV9t1MgP-aE8wrZNWxK2rULnhhi9KyAv8n4T3D7Q8YCdZdcGvDaVU8RIEK8tMRItmenyw60hfRlfyl3qzykxSEjTkkFj1hABZZgA/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://i.ibb.co/DKqWNRc/Create-3-D-walkthroughs.jpg"  type="video/mp4"/>
      </video>
          
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Product Expo</span>
              {/* <span className="limit">+16</span> */}
              <span className="limit" >2022</span>
            </div>
            <div className="desc">
            Buy through the metaverse.
            </div>
            <div className="genre">Meta Commerce</div>
          </div>
        </>
      )}
    </div>
  );
}
