import * as React from "react";
import { Button } from "@app/core/button/button.component";
import IconDefault from "@assets/icons/link.svg";

// import styles from "./playground-martijn-component.module.scss";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (
  props: IPlaygroundMartijnComponentProps
) => (
  <div>
    <Button
      iconPosition="right"
      icon={IconDefault}
      variant="primary-inverted"
      title="hi"
    />
  </div>
);

export { PlaygroundMartijnComponent };
