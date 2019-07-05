import * as React from "react";
import styles from "./time-left-bar-component.module.scss";

export interface ITimeLeftBarComponentProps {
  color?: string;
  range: number;
  variant?: string;
}

const TimeLeftBarComponent = (props: ITimeLeftBarComponentProps) => {
  const { range, variant } = props;
  const statusBarFilled = {
    width: `calc( ${range} * 100%)`
  };

  return (
    <div
      className={`${styles["time-left-bar"]} ${styles[`time-left-bar--${variant || "default"}`]}  ${
        styles[props.color ? props.color : "none"]
      }`}
    >
      <div className={styles["time-left-bar-control"]}>
        <div className={styles["time-left-bar-control-filled"]} style={statusBarFilled} />
      </div>
    </div>
  );
};
TimeLeftBarComponent.defaultProps = {
  color: "none"
};
export { TimeLeftBarComponent };
