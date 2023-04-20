import { FC } from "react";
import { IHTagProps } from "./IHtagProps";
import classes from "./HTag.module.css";

const HTag: FC<IHTagProps> = ({ tag, children }) => {
  const Tag = tag;
  return <Tag className={classes.heading}>{children}</Tag>;
};

export default HTag;
