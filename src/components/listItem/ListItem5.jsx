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
       
        src="https://ucbf8a03e7f1c1735cfc64a7ce2a.previews.dropboxusercontent.com/p/thumb/ABcpoFlKZ7y99lahsjXBVv436H25VStFy9g9pT9ya-mYAxoa1XzGzB77sGT6tNXdyzemplNyWf625rQ5p0RNgDQ-ympljWPtR8rWB3HRERydksBdHXrjNoVKQqy0AnDh-NBzHlYI7d3jZqyovrVuB99S8D6dC3e8sc0VziFIr2YHQOrhthk8Cci11icbc3jMp-TTiTD2F3x-PGiFWTpXXAG-us2KfWxDF4q6BEJKZZWfcUaC1JfjA9fuhB4R4Ia4T11zqv9JV-rvanUqAaKr0tpjbAgFfJhdhuyPBBEeCHgQquizBLql1ZVhJUOInPIZA_Fkkhk1Idb4Yt7aw6ggA4QURrs69DPT-To22capXDYCDwWJmvoFXTXXBp9bf0ZKEaY/p.png"
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
            {/* <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Signal</span>
              {/* <span className="limit">+16</span> */}
              <span className="limit">2022</span>
            </div>
            <div className="desc">
            A Kangaroo must overcome the challenges and reach the top of a mountain.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
