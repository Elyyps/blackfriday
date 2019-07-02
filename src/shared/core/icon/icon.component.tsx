import * as React from "react";
import ReactSVG from "react-svg";

import style from "./icon-component.module.scss";
import classNames from "classnames";

export interface IIconComponentProps {
  fillColor?: string;
  icon: any;
  size: string;
  strokeColor?: string;
  strokeWidth?: string;
}

const iconStyleClassName = (props: IIconComponentProps) => {
  const { fillColor, strokeColor, strokeWidth } = props;

  const defaultStyle = "icon-svg";
  const fillClassName =
    typeof fillColor !== "undefined" ? style[`${defaultStyle}--filled`] : "";
  const strokeWidthClassName =
    typeof strokeWidth !== "undefined"
      ? style[`${defaultStyle}--stroke-width`]
      : "";
  const outlineClassName =
    typeof strokeColor !== "undefined" ? style[`${defaultStyle}--outline`] : "";

  return classNames(
    style[defaultStyle],
    fillClassName,
    outlineClassName,
    strokeWidthClassName
  );
};

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
    className={iconStyleClassName(props)}
  />
);

export { IconComponent };
