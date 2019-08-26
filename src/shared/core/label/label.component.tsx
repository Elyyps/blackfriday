import * as React from "react";
import styles from "./label-component.module.scss";

export interface ILabelComponentComponentProps {
  children: JSX.Element;
  isLeftPointy?: boolean;
  isRightPointy?: boolean;
}

const LabelComponent = (props: ILabelComponentComponentProps) => (
  <div
    className={`${styles["label"]} ${props.isLeftPointy ? styles["label__left-pointy"] : ""} ${
      props.isRightPointy ? styles["label__right-pointy"] : ""
    }`}
  >
    {props.children}
  </div>
);

export { LabelComponent };
