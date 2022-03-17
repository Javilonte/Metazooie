import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import Background from "./Deserttemple.mp4"
import Pexels from "./pexels.mp4"
import Desert from "./Desert.mp4"
import "./featured.scss";
import {useState} from 'react';
import ModalShadow from "../Modal/ModalShadow";
import Modal from '../Modal/Modal'
  

export default function Featured({  }) {
  const [estadoModal, setEstadoModal] = useState(false);
  const [estadoShadow, setShadow] = useState(true);
  return (
    
    <div className="featured ">
      <ModalShadow 

      
    estado1={estadoShadow} 
    cambiarEstado1={false}
    
     />
      
      <video
        autoPlay 
        loop
        muted
        >
        <source src="https://appfiles.metazooie.com/Desert%20Temple/Desktop%202022.02.24%20-%2019.04.05.12_Segment_0_x264.mp4"  type="video/mp4"/>
      </video>
      
    
      <div className="info">
        <h1>Desert Temple</h1>
        
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            
            <a target="_blank" href="https://sanpatricio.kazooie.io">Enter</a>
          </button>
          
          <button className="more" onClick={()=>setEstadoModal(!estadoModal)} >
            <InfoOutlined />
            <span>Info</span>
          </button>
          <Modal estado={estadoModal} 
            cambiarEstado={setEstadoModal}
          />
            
      
        </div>
        <span className="desc">
        You are on an archeological team that’s racing to find the Temple Treasure before another team of ruthless mercenaries.
        </span>
      </div>
      </div>
    
  );
}
