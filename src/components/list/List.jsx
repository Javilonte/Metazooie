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

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Metazooie Originals</span>
      <div className="wrapper">
        
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem2 index={1} />
          <ListItem3 index={2} />
          <ListItem4 index={3} />
          <ListItem5 index={4} />
          <ListItem6 index={5} />
          <ListItem7 index={6} />
          <ListItem8 index={7} />

        </div>
        
      </div>
    </div>
  );
}
