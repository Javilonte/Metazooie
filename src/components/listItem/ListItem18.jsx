

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
       
        src="https://uce6f991aabdec20a6510a579054.previews.dropboxusercontent.com/p/thumb/ABfyji1qHYPjZlVu1DcP0Mh-IcJOJvKMkCSyXldE3pYhl-2VbjLhB3DA4_Es5Op1hCCgKGsypYSq8Wb638dhRgItNyo3Jso7FUNQSa0iHv-lxN40E60OprBXm9yHpfIxt4ayeMcJQOfWQnoo5nIvNRokclvVLSqziuvvHKaIhM1xiqRSuGF-dcmANkSBlZ4YGI538CiVX_e48Cjyf0Jbne_SBFA3k_cpc4FO25gXQxE-GDVvT0KIHmv891Pmp-KE6WwMNW9kBR36JDRgGDLiBJ8grRGyCeaWarSy05-UFsR3qaUweGZHsO9Z8rjUjh21aPIQ9ByrPxnHJaP4-epEyDXchQT3jx8T2q0AMTMQGdoUAyUj2bKoNumjvnofvU2dPKI/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://i.ibb.co/r090KFH/Interactive-3-D-experiences.jpg"  type="video/mp4"/>
      </video>
         
          <div className="itemInfo">
           {/*  <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>Retail </span>
              {/* <span className="limit">+16</span> */}
              <span className="limit" >2022</span>
            </div>
            <div className="desc">
            Buy through the metaverse.
            </div>
            <div className="genre">Sales</div>
          </div>
        </>
      )}
    </div>
  );
}
