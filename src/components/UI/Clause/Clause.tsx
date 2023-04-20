import { FC, useState } from "react";
import { IClauseProps } from "./IClauseProps";
import classes from "./Clause.module.css";

const Clause: FC<IClauseProps> = ({ collapseTitle, content, expandTitle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentClasses = `${
    isOpen ? classes["clause__content"] : classes["clause-content--hidden"]
  }`;
  return (
    <div className={classes.clause}>
      <div className={contentClasses}>{content}</div>
      <span
        className={classes["clause__toggle"]}
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? collapseTitle : expandTitle}
      </span>
    </div>
  );
};

export default Clause;
