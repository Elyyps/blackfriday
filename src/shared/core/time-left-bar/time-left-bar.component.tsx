import * as React from "react";
import styles from "./time-left-bar-component.module.scss";

export interface ITimeLeftBarComponentProps {
  range: number;
}
const statusBar = (rangeNumber: number) => {
  const limit = 0.5;
  if (rangeNumber === 0) {
    return "none";
  }

  if (rangeNumber <= limit) {
    return "orange";
  }

  return "green";
};

const TimeLeftBarComponent = (props: ITimeLeftBarComponentProps) => {
  const { range } = props;
  const statusBarFilled = {
    width: `calc( ${range} * 100%)`
  };

  return (
    <div className={`${styles["time-left-bar"]} ${styles[statusBar(range)]}`}>
      <div className={styles["time-left-bar-control"]}>
        <div className={styles["time-left-bar-control-filled"]} style={statusBarFilled} />
      </div>
    </div>
  );
};
export { TimeLeftBarComponent };
