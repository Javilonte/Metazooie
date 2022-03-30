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
       
        src="https://uc9c7e003cae75c86545cdb942d0.previews.dropboxusercontent.com/p/thumb/ABfPLpw_GwaVNhsobZF_4tkW4R1lCD_SI0ZNccWR8C6XJ1XXpw_L9VRiKZXynJT_dlaMmeahIqYUfse-fQsnuBJE1htwJ0RAunTIEWzx33dmuTf_d0_6cE1QXbFOZTdZcEqtuIyYdzLtMOdjlSyUiIV80NyPj9ojLXaQ1yvAE4x6DxRMfKFmGqvC3Br2JaclQu2ZPQZ2YSlM5lP5kabY1Nbt8htlhaGotaNVldaafhDnCGDo_mu_hz6qqmSKDv5ry_FmBCBc2TjEw4AceB8S73o9NAfzkS3dNdgfjgz18ncYKJAZKQA2nKg5yBRNO97bHMvgHLs-wwHvUEnw7Cw5euxtCyTS_MBqAu1zYDcpAPXbFZapCkA-ATfNn-yaZ4Cntsk/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
          
          <video
        autoPlay 
        loop
        muted
        >
        <source src="https://appfiles.metazooie.com/Alien%20Habitat/Desktop%202022.02.18%20-%2013.13.31.17_Segment_0_x264.mp4"  type="video/mp4"/>
      </video>
          
          <div className="itemInfo">
            
            <div className="itemInfoTop">
              <span>Alien Habitat</span>
              {/* <span className="limit">+16</span> */}
              <span className="limit">2022</span>
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
