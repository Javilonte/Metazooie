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
       
        src="https://uc5ad1c772b90edae917d0ea8dc0.previews.dropboxusercontent.com/p/thumb/ABf0RmDT3UX3cBwRaP-fj1S6L_ClFtO_zNkEGtEuRFFkiGJL17kTLAiFsXolND_bc1gjrccsQSDcf_uXXrx1wnvtrwGfP06jyRK_jZDDch4kyrCFbUZd8MM9d3HUAWU4WrPCqihzWHB8nqK4uv1TjCeQod6NkNF23e4iJVwGNwF8xUNjIrxFJGxIgRux_v7WatVkIbRBURaQrSkjrg7s3WVFGniNw3h11_e8pSijpJRa1jnwdf1oHMaurHcovdqhVEX1ORJewbEUV1H8Rg3Gd6r0cmM8ht1bhgMbbYW6Qave2WdLv8_QHMidBP8XqDgIgWLeJZcuB0RNQDOfFqPCnD8bo6n9NyMUsA_1-xKVykr1lMnrvSicGMic0bCWfy-iK8c/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://i.ibb.co/h87BnjX/vr-3d-learning.jpg"  type="video/mp4"/>
      </video>
         
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Medical Showroom </span>
              {/* <span className="limit">+16</span> */}
              <span className="limit" >2022</span>
            </div>
            <div className="desc">
            Learn through the metaverse.
            </div>
            <div className="genre">Educational</div>
          </div>
        </>
      )}
    </div>
  );
}
