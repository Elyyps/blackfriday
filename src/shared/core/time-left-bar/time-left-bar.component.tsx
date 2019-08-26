import * as React from "react";
import styles from "./time-left-bar-component.module.scss";

export interface ITimeLeftBarComponentProps {
  color?: "green" | "orange" | "none";
  range: number;
  variant?: string;
}

const TimeLeftBarComponent = (props: ITimeLeftBarComponentProps) => {
  const { range, color } = props;
  const barColorStyle = !color ? "none" : color;
  const statusBarFilled = {
    width: `calc( ${range}%)`
  };

  return (
    <div className={`${styles["time-left-bar"]}`}>
      <div className={`${styles["control"]} ${styles[barColorStyle]}`}>
        <div className={`${styles["control-filled"]}`} style={statusBarFilled} />
      </div>
    </div>
  );
};
TimeLeftBarComponent.defaultProps = {
  color: "none"
};
export { TimeLeftBarComponent };
