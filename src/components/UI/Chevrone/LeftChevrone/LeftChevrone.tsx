import { FC } from "react";
import classes from "./LeftChevrone.module.css";
import { IChevrone } from "../IChevrone";

const LeftChevron: FC<IChevrone> = ({ size, color, onClick }) => {
  const arrowClasses = `${classes.chevrone} ${
    size == "large" ? classes.large : classes.small
  }`;
  return (
    <button className={arrowClasses} onClick={onClick}>
      <svg
        className={classes.left}
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        fill={color === "white" ? "white" : "red"}
        >
        <polygon points='160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 ' />
      </svg>
    </button>
  );
};

export default LeftChevron;
