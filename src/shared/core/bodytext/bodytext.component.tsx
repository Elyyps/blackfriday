import * as React from "react";
import styles from "./bodytext-component.module.scss";
import { BodyTextModule } from "@app/api/modules/body-text/body-text";

export interface IBodytextComponentProps {
  bgColor?: string;
  bodyTextModule: BodyTextModule;
  paddingBottom?: string;
  paddingTop?: string;
  style?: object;
}

const BodytextComponent = (props: IBodytextComponentProps) => {
  const { bgColor, bodyTextModule, paddingBottom, paddingTop } = props;

  const style = {
    backgroundColor: bgColor,
    paddingTop: paddingTop || "72px",
    paddingBottom: paddingBottom || "72px",
    ...props.style
  };

  return (
    <div className={styles["bodytext"]} style={style}>
      <div className="uk-container">{bodyTextModule.dummyJSX}</div>
    </div>
  );
};

export { BodytextComponent };
