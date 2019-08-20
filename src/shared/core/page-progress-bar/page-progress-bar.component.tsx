import React, { useEffect, useState } from "react";
import styles from "./page-progress-bar-component.module.scss";
import { useScrollPosition, getOffset } from "@app/util";
/* tslint:disable:no-magic-numbers */

export interface IPageProgressBarComponentProps {
  mainDivRef: any;
  totalHeight: number;
}

const PageProgressBarComponent = ({ totalHeight, mainDivRef }: IPageProgressBarComponentProps) => {
  const [positionPercentage, setPositionPercentage] = useState<number>(0);
  const debounce = 500;

  const scrollPos = useScrollPosition(debounce);
  useEffect(() => {
    const actualScrollPosition = getActualScrollPosition();
    const percentage = (actualScrollPosition * 100) / totalHeight;
    setPositionPercentage(percentage);
  }, [scrollPos, totalHeight]);

  const getActualScrollPosition = () => {
    const position = getOffset(mainDivRef.current);
    const currentScrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    const actualScrollPosition = currentScrollPosition - position;

    return actualScrollPosition;
  };

  return (
    <div className={styles["page-progress-bar"]}>
      <div style={{ width: `${positionPercentage}%` }} className={styles["page-progress-bar__progress"]} />
    </div>
  );
};

export { PageProgressBarComponent };
