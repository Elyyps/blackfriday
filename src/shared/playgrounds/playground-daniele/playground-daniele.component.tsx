/* tslint:disable */
import * as React from "react";
import ReactPlayer from "react-player";

import { NewsletterComponent } from "@app/core/newsletter";
import { generateDummyNewsletterModule } from "@app/api/modules/newsletter/generate-dummy-data";
import { ModalComponent } from "@app/core/modal";

// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div>
    <NewsletterComponent newsletterModule={generateDummyNewsletterModule()} />
  </div>
);

export { PlaygroundDanieleComponent };
