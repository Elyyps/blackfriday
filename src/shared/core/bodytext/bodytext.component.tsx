import * as React from "react";
import styles from "./bodytext-component.module.scss";
import { BodyTextModule } from "@app/api/modules/body-text/body-text";
import { HtmlRenderComponent } from "../html-render";

export interface IBodyTextComponentProps {
  bgColor?: string;
  bodyTextModule: BodyTextModule;
  footer?: JSX.Element;
  header?: JSX.Element;
  paddingBottom?: string;
  paddingTop?: string;
  style?: object;
}

export const BodyTextComponent = (props: IBodyTextComponentProps) => {
  const { style } = props;

  return (
    <div
      style={style}
      className={`uk-container ${styles[`body-text`]} ${
        styles[`body-text--${props.bodyTextModule.containerAlignment}`]
      } ${styles[`body-text--${props.bodyTextModule.containerSize}`]}`}
    >
      <HtmlRenderComponent html={props.bodyTextModule.html} />
    </div>
  );
};
