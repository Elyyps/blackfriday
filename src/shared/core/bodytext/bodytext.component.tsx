import * as React from "react";
import styles from "./bodytext-component.module.scss";
import { BodyTextModule } from "@app/api/modules/body-text/body-text";
import { HtmlRenderComponent } from "../html-render";

export interface IBodytextComponentProps {
  bgColor?: string;
  bodyTextModule: BodyTextModule;
  footer?: JSX.Element;
  header?: JSX.Element;
  paddingBottom?: string;
  paddingTop?: string;
  style?: object;
}

const BodytextComponent = (props: IBodytextComponentProps) => {
  const { bgColor, paddingBottom, paddingTop } = props;

  const style = {
    backgroundColor: bgColor,
    paddingTop: paddingTop || "72px",
    paddingBottom: paddingBottom || "72px",
    ...props.style
  };

  return (
    <div
      className={`uk-container ${styles[`body-text`]} ${
        styles[`body-text--${props.bodyTextModule.containerAlignment}`]
      } ${styles[`body-text--${props.bodyTextModule.containerSize}`]}`}
    >
      <div className={styles["body-text-container-outer"]}>
        <div className={styles["body-text-container"]}>
          {props.header}
          <HtmlRenderComponent html={props.bodyTextModule.html} />
          {props.footer}
        </div>
      </div>
    </div>
  );
};

export { BodytextComponent };
