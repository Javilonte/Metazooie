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
       
        src="https://uc4ba4923c704e17c2e3964200cf.previews.dropboxusercontent.com/p/thumb/ABeN93KPWTABmC499ZfrJkSYk-xW-nbyxHoDcRSp2dPS6uEmvGB0Y0XstxXoqIdxAmhWRzTALdF80DQpEfymzO8YsWcTXS-EbD3byNkyS0x3XKzDb7hlNx98iyhO9XbMqysK3-5r4HxmLgtzdj_XQ8rT_kUpvm3WWE_yTZFDiwCS2-oGE9FG5UE-XXgSsuQEhiLvSof4NzAotQuOWCo5pCW73RSPMnpPF8qssUvLHD-s6hc1fne-ifywV34N_PRwNCRuPqy8uxrEd3ti0LoDNeOjZfOGVmYuvDXqCXYx49bKEjMXQo-XK6wBktxrFNwfu4v9RT4Q-aT5Td5gtIzuL2GhviC1H_54RhKRVlO_eRj5nQMRi_AO-CQREIjNkYe5QzM/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://i.ibb.co/ccqzgxv/virtual-gallery-3d.jpg"  type="video/mp4"/>
      </video>
          
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Crypto Gallery</span>
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
