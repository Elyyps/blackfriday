import * as React from "react";
import ReactSVG from "react-svg";

import style from "./icon-component.module.scss";

export interface IIconComponentProps {
  fillColor?: string;
  icon: any;
  size: string;
  strokeColor?: string;
  strokeWidth?: string;
}

const IconComponent: React.FunctionComponent<IIconComponentProps> = props => (
  <ReactSVG
    src={props.icon}
    fallback={() => <span>Error!</span>}
    loading={() => <span />}
    renumerateIRIElements={true}
    wrapper="span"
    style={{
      fill: props.fillColor,
      height: props.size,
      stroke: props.strokeColor,
      strokeWidth: props.strokeWidth,
      width: props.size
    }}
    className={style["icon-svg"]}
  />
);

export { IconComponent };
