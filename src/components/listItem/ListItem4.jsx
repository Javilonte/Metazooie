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
       
        src="https://uc5bf56df82f8d51a36ccb1bbfe6.previews.dropboxusercontent.com/p/thumb/ABf0sRSQHH6sV-LUWSlwBqwAImhdMpC1wcqmJhspXSgSWDEZJ4qt_SHhJn3U61-L8vbr-atHg2OLlXe7mZbUJcwNbinlG2B_oQf9FPO3X5NM-EDuYcsYI6EW9DNnGRDmc8fd0M6sVbEzd1LjfTAKJKtq-ytw8o8oDzUm_T2kyhLnEUCusn0t_arV5SHyq2WdsmhqeuTb6FdAii2iUqDHjxEuYdlcu8ELExrCZBxLOCsL0vHA2iMXQiXb1uCDhzfla8LNCG3mY3Bfzp1dkC-krFLV_qxdWkMJuz5YdqZ0ynSQJpBYA3wIPLiM_v5PyqKpuCQMCL7obsf5LbpFfXyJDE7ue0zkA833dP2-G3387DQPfTdczCRFC_wL-gPKNzgPHCM/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://appfiles.metazooie.com/Music%20Experiences/DISCOSCENE-190720.mp4"  type="video/mp4"/>
      </video>
          
          <div className="itemInfo">
{/*             <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Mountain Climg</span>
              {/* <span className="limit">+16</span> */}
              <span className="limit">2022</span>
            </div>
            <div className="desc">
            Animal gathering at luxury contemporary residence in the Mexican hills.
            </div>
            <div className="genre">Fantasy</div>
          </div>
        </>
      )}
    </div>
  );
}
