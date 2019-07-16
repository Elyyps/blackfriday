import * as React from "react";
import styles from "./bodytext-component.module.scss";

export interface IBodytextComponentProps {
  bgColor?: string;
  children: any;
  paddingBottom?: string;
  paddingTop?: string;
  style?: object;
}

const BodytextComponent = (props: IBodytextComponentProps) => {
  const { bgColor, children, paddingBottom, paddingTop } = props;

  const style = {
    backgroundColor: bgColor,
    paddingTop: paddingTop || "72px",
    paddingBottom: paddingBottom || "72px",
    ...props.style
  };

  return (
    <div className={styles["bodytext"]} style={style}>
      <div className="uk-container">{children}</div>
    </div>
  );
};

export { BodytextComponent };
