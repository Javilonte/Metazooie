import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import Background from "./Deserttemple.mp4"
import Pexels from "./pexels.mp4"
import "./featured.scss";


export default function Featured({ type }) {

  return (
    <div className="featured">
      <div className="bottom">
      <video
        autoPlay 
        loop
        muted
        >
        <source src={Background} type="video/mp4"/>
      </video>
      
      <div className="info">
        <h1>Desert Temple</h1>
        
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            
            <a target="_blank" href="https://sanpatricio.kazooie.io">Enter</a>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
        <span className="desc">
        You are on an archeological team that’s racing to find the Temple Treasure before another team of ruthless mercenaries.
        </span>
      </div>
      </div>
    </div>
  );
}
