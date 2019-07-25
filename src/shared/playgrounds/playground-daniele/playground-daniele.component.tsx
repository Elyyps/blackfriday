/* tslint:disable */
import * as React from "react";

import { NewsletterComponent } from "@app/core/newsletter";
import { generateDummyNewsletterModule } from "@app/api/modules/newsletter/generate-dummy-data";

// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div>
    <NewsletterComponent newsletterModule={generateDummyNewsletterModule()} />
  </div>
);

export { PlaygroundDanieleComponent };
