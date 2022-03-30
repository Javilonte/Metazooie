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
       
        src="https://uce637ba2611b55d6b1699fde908.previews.dropboxusercontent.com/p/thumb/ABeG0adNMJUpL8Sk7RGamVV_JaI3Ug-CUxdCs1FxGKRndQKwhAlmudLqkAp2a-r0Eid9Q7xkknjPvkt5JTrPw1E5f9eSAnLDeyjEkQA0jkSQiezAsiyvcq8oVMKBleXlbbs71IKX8b2Hcm2bH_RP-uwMbA_XtRYqUIKXk1hA1z7BQgBxbEJtnQARuTzrgoj_ZIGo0NoCj3_ZEIfQid9P2giFFITYTz4TQqGsqqhXcAn1rt8-smcBcJBzjHmIJon3Aq2HDOAZWnyEnfPSkBTDWE52_dCFnQLUT6HmnMy1PdJn6e-SahiUXMNEP9_hooxnilA6ier9Jz1aBeCG3D3wIcaASz8q78v4Foxkwe_s9pun5BLysi6FA-rNvyWf876wkIM/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src={Background}  type="video/mp4"/>
      </video>
          
          <div className="itemInfo">
            {/* <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span>
                Desert Temple</span>
              {/* <span className="limit">+16</span> */}
              <span className="limit">2022</span>
            </div>
            <div className="desc">
            You are on an archeological team that’s racing to find the Temple Treasure before another team of ruthless mercenaries.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
