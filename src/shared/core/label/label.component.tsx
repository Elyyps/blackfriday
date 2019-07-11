import * as React from "react";
import styles from "./label-component.module.scss";

export interface ILabelComponentComponentProps {
  isLeftPointy?: boolean;
  isRightPointy?: boolean;
  text: string;
}

const LabelComponent = (props: ILabelComponentComponentProps) => (
  <div
    className={`${styles["label"]} ${props.isLeftPointy ? styles["label__left-pointy"] : ""} ${
      props.isRightPointy ? styles["label__right-pointy"] : ""
    }`}
  >
    {props.text}
  </div>
);

export { LabelComponent };
