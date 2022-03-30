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
       
        src="https://uce786117c346ea9b92ff7616a36.previews.dropboxusercontent.com/p/thumb/ABcxB6lLzBOpRuZfA-xfgFzDlRJrpUHUwVtBK14U2UrQ9L99w8Qyk-ECpv0PcfvIhZUZOTOq7qJ71rauey-qy0pGgma76OhJCtPiDQtKPjTA9BCJMKzlWSSMjZU5TDg9NLck-bgHbleGKlUwJf5TM3etIUeS4qiRaiU2JhERcyo8K_03cI-62DnB-p-Xn5aXcMpExWMLB0gulpe_-KaWEfOpUR-0YmrggcMUCorMTtf1kNpHlEsldeVb6HfpC1crXWckbI4bOQ9XBY8pGNtwp3UQgaQ-vcE4FdQJgd7xefbLFaR3tfsb-73M0_pQLUo1srtHPHr8V9HfcXK0pV5zru0wojpmWpDfDaPWeL-V1zScdK3jENcGZAUeHt7DPrO7hHQ/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src=""  type="video/mp4"/>
      </video>
          
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span> Veredalta</span>
              {/* <span className="limit">+16</span> */}
              <span className="limit">2022</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
