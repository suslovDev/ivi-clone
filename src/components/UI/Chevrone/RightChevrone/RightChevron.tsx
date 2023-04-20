import { FC } from "react";
import classes from "./RightChevron.module.css";
import { IChevrone } from "../IChevrone";

const RightChevron: FC<IChevrone> = ({ size, color, onClick }) => {
  const arrowClasses = `${classes.chevrone} ${
    size == "large" ? classes.large : classes.small
  }`;
  return (
    <button className={arrowClasses} onClick={onClick}>
      {/*          <svg
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        fill={color === "white" ? "white" : "red"}>
        <polygon points='160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 ' />
      </svg> */}
      <svg
        /* style='color: rgb(188, 188, 191);' */
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path
          fill-rule='evenodd'
          d='M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z'
          fill={color === "white" ? "white" : "red"}></path>
      </svg>
    </button>
  );
};

export default RightChevron;
