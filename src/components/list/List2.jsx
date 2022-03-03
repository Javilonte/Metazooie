import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import ListItem2 from "../listItem/ListItem2";
import ListItem3 from "../listItem/ListItem3";
import ListItem4 from "../listItem/ListItem4";
import ListItem5 from "../listItem/ListItem5";
import ListItem6 from "../listItem/ListItem6";
import ListItem7 from "../listItem/ListItem7";
import ListItem8 from "../listItem/ListItem8";
import ListItem9 from "../listItem/ListItem9";
import ListItem10 from "../listItem/ListItem10";
import "./list.scss";

export default function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

 
  return (
    <div className="list">
      <span className="listTitle">Meta Architecture</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          
        />
        <div className="container" ref={listRef}>
          <ListItem8 index={0} />
          <ListItem9 index={1} />

        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
         
        />
      </div>
    </div>
  );
}
