import * as React from "react";
import styles from "./shadow-card-component.module.scss";

type CssCornerProperties =
  | [string]
  | [string, string]
  | [string, string, string, string];

export interface IShadowCardComponentProps {
  backgroundColor?: string;
  borderRadius?: CssCornerProperties | undefined;
  children?: any;
  padding?: CssCornerProperties | undefined;
  shadowSize: "small" | "medium";
}

const ShadowCardComponent = (props: IShadowCardComponentProps) => {
  const renderFourCssProperties = (
    borderRadiusArray: CssCornerProperties | undefined
  ) => {
    if (typeof borderRadiusArray !== "undefined") {
      const result: string = borderRadiusArray
        .map(element => element)
        .join(" ");

      return result;
    }

    return undefined;
  };

  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: renderFourCssProperties(props.borderRadius),
        padding: renderFourCssProperties(props.padding)
      }}
      className={`${styles["shadow-card"]} ${
        styles[`shadow-card--${props.shadowSize}`]
      }`}
    >
      {props.children}
    </div>
  );
};

export { ShadowCardComponent };
