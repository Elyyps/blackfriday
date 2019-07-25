/* tslint:disable */
import * as React from "react";

import { NewsletterComponent } from "@app/core/newsletter";

// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div>
    <NewsletterComponent />
  </div>
);

export { PlaygroundDanieleComponent };
