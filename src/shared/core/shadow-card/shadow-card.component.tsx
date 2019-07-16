import * as React from "react";
import styles from "./shadow-card-component.module.scss";

type CssCornerProperties = [string] | [string, string] | [string, string, string, string];

export interface IShadowCardComponentProps {
  backgroundColor?: string;
  borderRadius?: CssCornerProperties | undefined;
  children?: any;
  fullWidth?: boolean;
  padding?: CssCornerProperties | undefined;
  shadowSize?: "small" | "medium";
}

const ShadowCardComponent = (props: IShadowCardComponentProps) => {
  const renderCssCornerProperties = (borderRadiusArray: CssCornerProperties | undefined) => {
    if (typeof borderRadiusArray !== "undefined") {
      return borderRadiusArray.map(element => element).join(" ");
    }

    return undefined;
  };

  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: renderCssCornerProperties(props.borderRadius),
        padding: renderCssCornerProperties(props.padding),
        width: props.fullWidth ? "100%" : "auto"
      }}
      className={`${styles["shadow-card"]} ${styles[`shadow-card--${props.shadowSize}`]}`}
    >
      {props.children}
    </div>
  );
};

ShadowCardComponent.defaultProps = {
  shadowSize: "small"
};
export { ShadowCardComponent };
