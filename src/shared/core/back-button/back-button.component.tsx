import * as React from "react";
import styles from "./back-button-component.module.scss";
import IconLeft from "@assets/icons/chevron-left.svg";
import { IconComponent } from "../icon";

export interface IBackLinkComponentProps {
  children?: any;
  className?: any;
  href?: string;
}

const BackLinkComponent = (props: IBackLinkComponentProps) => (
  <a href={props.href} className={`${styles["back-button"]} ${props.className}`}>
    <IconComponent icon={IconLeft} size="13px" />
    {props.children}
  </a>
);

export { BackLinkComponent };
