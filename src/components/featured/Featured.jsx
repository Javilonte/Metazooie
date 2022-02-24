import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import Background from "./Deserttemple.mp4"
import Pexels from "./pexels.mp4"
import "./featured.scss";


export default function Featured({ type }) {

  return (
    <div className="featured">
      
      <video
        autoPlay 
        loop
        muted
        >
        <source src={Background} type="video/mp4"/>
      </video>
      
      <div className="info">
        <h1>Desert Temple</h1>
        <span className="desc">
        You are on an archeological team that’s racing to find the Temple Treasure before another team of ruthless mercenaries.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Enter</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
