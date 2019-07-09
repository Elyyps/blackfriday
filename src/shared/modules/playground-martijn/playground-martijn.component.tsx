import * as React from "react";
import styles from "./playground-martijn-component.module.scss";
import { ClickableComponent } from "@app/core/clickable";
import IconDefault from "@assets/icons/chevron-right.svg";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <div className={styles["playground-wrapper"]}>
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline-fill"
      variant={"primary-brand"}
      onClick={() => alert(`clicked button 2: 1`)}
    />
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline-fill"
      variant={"primary-brand"}
      href="https://www.youtube.com"
      fullWidth
      animated
    />
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline"
      variant={"link-primary"}
      href="https://www.youtube.com"
    />
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline"
      variant={"link-secondary"}
      href="https://www.youtube.com"
    />
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline"
      variant={"link-tertiary"}
      href="https://www.youtube.com"
      animated
    />
  </div>
);

export { PlaygroundMartijnComponent };
