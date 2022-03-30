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
       
        src="https://uc508c41a3378817004027c65573.previews.dropboxusercontent.com/p/thumb/ABeaY7D7gMtswiWBpWt6vNjiBStWDr1qCk0c7gGyiJQVedKznbYbjM8rc3qvt25y8W7NRjqLbYBaNgzzP7MwXqQBvqBLsodpI5fEVe5BKF2p5y-ZT9q-CbI5taEjcvBoMpWS5NNs0A6xUrg12J_5uYzyxB9kGwnocp82nHOURU0gUynKuclijilMjji246KFmlUhnnZXTNJDqwxFH4X2hwSScFlBqp8UqhEKeo4HK59klz65AIEORKh28z_MjCS2oaydRhP09jI_NuQlH8nyJ8vpdspCJs4OFprimIiy8Y2LfYtmHSPlySdrtBikrK1WgqUzQrBuJ3D-vvMxCTv1nBQxnFkZS9pfOeIED8xS6nsMBBFsTxihsbZT81aLOxBCxag/p.png"
        alt=""
        
      />
      
      {isHovered && (
        <>
        <video
        autoPlay 
        loop
        muted
        >
        <source src="https://appfiles.metazooie.com/Space%20Adventure/Desktop%202022.02.24%20-%2018.53.39.08_Segment_0_x264.mp4"  type="video/mp4"/>
      </video>
          
          <div className="itemInfo">
            {/* <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div> */}
            <div className="itemInfoTop">
              <span> Space Adventure</span>
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
