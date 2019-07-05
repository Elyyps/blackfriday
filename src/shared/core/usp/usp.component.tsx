import React, { useState, useEffect } from "react";
import styles from "./usp-component.module.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/core";
import { USP as USP_CLASS } from "@app/api/core/usp/usp";

interface IUSPProps {
  uspModule: USP_CLASS;
}

let timerInterval: number;
const timerIntervalDuration = 3000;
const mobileMaxWidth = 361;

const setOpacityInArray = (array: any[], selectedElement: number) =>
  array.map((item, index) => {
    index === selectedElement ? (item.style.opacity = 1) : (item.style.opacity = 0);
  });

const startFadingSlider = () => {
  const selector = document.getElementById("uspHolder");
  if (typeof selector !== "undefined" && selector !== null) {
    const selectorArray = Array.prototype.slice.call(selector.children);
    const selectedElement = 0;
    setOpacityInArray(selectorArray, selectedElement);

    return intervalSlider(selectedElement, selectorArray);
  }

  return "";
};

const intervalSlider = (selectedElement: number, array: any[]) => {
  let thisItem = selectedElement;
  timerInterval = window.setInterval(() => {
    if (thisItem + 1 > array.length - 1) {
      thisItem = 0;
    } else {
      thisItem += 1;
    }
    setOpacityInArray(array, thisItem);
  }, timerIntervalDuration);
};

const stopFadingSlider = () => {
  const selector = document.getElementById("uspHolder");
  clearInterval(timerInterval);
  if (typeof selector !== "undefined" && selector !== null) {
    const selectorArray = Array.prototype.slice.call(selector.children);
    selectorArray.map(item => {
      item.style.opacity = 1;
      item.style.display = "flex";
    });
  }
};

const USP = (props: IUSPProps) => {
  const [mobileWidth, setMobileWidth] = useState(false);
  const updateWindowDimensions = () => {
    if (window.innerWidth < mobileMaxWidth) {
      if (!mobileWidth) {
        setMobileWidth(true);
      }
    } else if (window.innerWidth > mobileMaxWidth) {
      if (!mobileWidth) {
        setMobileWidth(false);
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth < mobileMaxWidth) {
      setMobileWidth(true);
      updateWindowDimensions();
    }
  }, []);

  useEffect(() => {
    if (mobileWidth) {
      startFadingSlider();
    } else {
      stopFadingSlider();
    }
  }, [mobileWidth]);

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
  });

  return (
    <div id="uspHolder" className={styles["usp"]}>
      {props.uspModule.uniqueSellingPoints.map((item, index) => (
        <div key={index} data-key={index} className={styles["usp__item"]}>
          <Link to={item.link.url} className={styles["usp__link"]}>
            <IconComponent icon={item.icon} size="14px" fillColor="#777777" />
            <span style={{ marginLeft: "10px" }}>{item.link.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export { USP };
