import LeftChevron from "../Chevrone/LeftChevrone/LeftChevrone";
import RightChevron from "../Chevrone/RightChevrone/RightChevron";
import RightArrow from "../Chevrone/RightChevrone/RightChevron";
import classes from "./Suggestion.module.css";
import { useState, useEffect, useRef } from "react";

const Suggestion = () => {
  const [shift, setShift] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  const listRef = useRef<any>(null);
  const innerRef = useRef<any>(null);

  useEffect(() => {
    let sliderWidth = listRef.current.clientWidth;
    let innerWidth = innerRef.current.clientWidth;
    setSliderWidth(sliderWidth);
    setInnerWidth(innerWidth);
  }, []);

  useEffect(() => {
    if (!shift) {
      setShowLeftArrow(false);
    } else {
      setShowLeftArrow(true);
    }
    if (sliderWidth - Math.abs(shift) < innerWidth + step) {
      setShowRightArrow(false);
    } else {
      setShowRightArrow(true);
    }
  }, [shift]);

  let step = (sliderWidth - innerWidth) / 4;

  const handlePrev = () => {
    setShift(shift + step);
  };
  const handleNext = () => {
    setShift(shift - step);
    console.log("shift", shift);
    console.log("innerWidth", innerWidth);
    console.log("VsegoWidth", sliderWidth);
  };

  return (
    <div className={classes["suggestion-wrapper"]}>
      {showLeftArrow && (
        <LeftChevron size='small' color='white' onClick={handlePrev} />
      )}
      <div className={classes.suggestion} ref={innerRef}>
        <ul
          ref={listRef}
          className={classes["suggestion__list"]}
          style={{ transform: `translateX(${shift}px)` }}>
          <li className={classes["suggestion__item"]}>
            <a href='#'>2022год</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>2021год</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>2020год</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>2019год</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>2018год</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Бесплатные</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Русские фильмы</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Советские фильмы</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Американские фильмы</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Индийские фильмы</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Комедии</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Ужасы</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Фантастические</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Мелодрамы</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Триллеры</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Драмы</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Военные</a>
          </li>
          <li className={classes["suggestion__item"]}>
            <a href='#'>Документальные</a>
          </li>
        </ul>
      </div>
      {showRightArrow && (
        <RightChevron size='small' color='white' onClick={handleNext} />
      )}
    </div>
  );
};

export default Suggestion;
