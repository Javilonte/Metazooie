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
       
        src="https://uc7b7a4b16a7a69c337024666059.previews.dropboxusercontent.com/p/thumb/ABdTCavyz6A6J3IemwYlwldS5rNOaqLjxkr5d2g3ZsdZdPxgb9hxuYbZPzfT0Ca6yQeGcRkLzp1Ebh--Mj_Zy4QPyYq5Wbc2jBm4kRyAD-21k9J92022ofzRffqjGp2V2znYmmwiwcozXu-dMLVQ8P86mD5qJQJ5F6udk6-X71v0dwkx85LqB8JmgoUJH9RSc-1sSMTQAFSlrn1glxF-wfCehhxonP5G7qiDlHdUgMLhuL7dN199muE0VuTobndp4kmOZMt-vF4nP7J6Y78fLtryWM_-T3-_FHahIpHFQRqBMK1carosC0RTlqiKjDyvHhKiR2umfdi7O31ZagEZNXeEPrwC7QqnWt7ZGwW0_g0kX6KJBf97luarSBzDjLHQkF0/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://appfiles.metazooie.com/MetaHuman/2.JPG"  type="video/mp4"/>
      </video>
         
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Metahuman Interactions </span>
              {/* <span className="limit">+16</span> */}
              <span className="limit" >2022</span>
            </div>
            <div className="desc">
            Don’t be fooled by highly advanced A.I. Metahumans in this ground-breaking experiment.  
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
