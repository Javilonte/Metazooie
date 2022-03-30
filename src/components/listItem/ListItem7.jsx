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
       
        src="https://uc0ccbc83361054150ec1032a75f.previews.dropboxusercontent.com/p/thumb/ABdN7yOpXlq_F7bs4DHqZdv8uwprpsdybZuHSgQiLlFheTJ_Pv88qAna9ML7HhRysIzHtgGPCbkspptu1STQrt6WicllIYSZk-FW7U9dvO3Q-lI72beYvBmsf6798ekluqQYiE5PD5vW-FwB7MsGYCjP_GRxhorRZqs_hm4UZF2oHP2JwMP3a6xq6briM72D4Fd1JG1EiwOgsIg43ct90q7HhlwsE4ZLlGvfdWfjfKvDfNaB5oln6PM7LgcPdME_o9Xr9jepkZps7mSUvpbf9m5iDeRLHV0QX0bVfvyfbYxnonQnu0JjXTjRdfGeIAFF6pF-4Fjm97UrjRbsKXJ5iTSbtU7-Qn0TLnz7l9gE6NtByM0U2jV--Yv04_1MsmU3dpU/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://appfiles.metazooie.com/UnderWater/WATERWOLRD_TEASER.mp4"  type="video/mp4"/>
      </video>
          
          <div className="itemInfo">
            {/* <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Underwater</span>
              {/* <span className="limit">+16</span> */}
              <span className="limit">2022</span>
            </div>
            <div className="desc">
            In the year 2033, a team of space explorers travels through a wormhole in search of a new home for mankind.
            </div>
            <div className="genre">Fantasy</div>
          </div>
        </>
      )}
    </div>
  );
}
