import * as React from "react";
import styles from "./shadow-card-component.module.scss";

type CssFourProperties = [number, number] | [number, number, number, number];

export interface IShadowCardComponentProps {
  backgroundColor?: string;
  borderRadius?: CssFourProperties | undefined;
  children?: any;
  padding?: CssFourProperties | undefined;
  shadowSize: "small" | "medium";
}

const ShadowCardComponent = (props: IShadowCardComponentProps) => {
  const renderFourCssProperties = (
    borderRadiusArray: CssFourProperties | undefined
  ) => {
    if (typeof borderRadiusArray !== "undefined") {
      let result = "";
      borderRadiusArray.forEach(element => {
        result += ` ${element}px`;
      });

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
