import * as React from "react";
import styles from "./badge-component.module.scss";
import { IconComponent } from "../icon";

interface IBadgeProps {
  children?: any;
  icon: string;
  onClick?: () => void;
  position: "right" | "left";
}

const Badge = (props: IBadgeProps) => (
  <div className={`${styles["badge"]} ${styles[`badge-${props.position}`]}`}>
    <button onClick={props.onClick}>{props.icon ? <IconComponent icon={props.icon} size="18px" /> : ""}</button>
    {props.children && (
      <div className={styles["badge__dropdown"]} data-uk-dropdown="mode: click">
        {props.children}
      </div>
    )}
  </div>
);

export { Badge };
