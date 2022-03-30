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
       
        src="https://uc01b53bc78f0bb3ac580dc7122a.previews.dropboxusercontent.com/p/thumb/ABfElnXzuGwOoWZFOjWOhs4XJBIPxASeC1u9doEWKjFF-KjkV95EnSP14L5z_givd8Qcq45w1n1xjbG6Cy8Pu_dKG-5XKXyjPHf9uYd9tRWzjdhdTQHRrLBCv9vFzo4srV5pdkl46TSml-DPxlC-I8fLTcg8DtOkY__CF1YmdK8Pkq7x9SbB3EA-Ekg1Oo9pMQZNxtPUmJy4DQ2S1hyTfSIEnlaeNLSqyX1rA8_8mjdaQd72rJTeoITdHKnaPAmLFqlc0yzM5wmvjPFd0xlAwbcYqTXoQr5cGEH4TRE3I9IdKm1twzStSAP9jyTqUdy80_nAyQUliEpT_w3f40iv9SmgT9ZTJdHgcvSqAXSN8vlodNVJawOT85GYjplRFPgQa6Y/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://i.ibb.co/N37Q0RY/big-race.png"  type="video/mp4"/>
      </video>
         
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Monster Truck Racing </span>
              {/* <span className="limit">+16</span> */}
              <span className="limit" >2022</span>
            </div>
            <div className="desc">
            Compete in a race in order to find out who is the fastest ZOOIE.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
