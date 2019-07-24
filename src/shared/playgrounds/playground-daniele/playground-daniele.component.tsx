/* tslint:disable */
import * as React from "react";

import { HomePageHeaderComponent } from "@app/modules/homepage-header";
import { getHeaderpageHeader } from "@app/api/modules/homepage-header/endpoints";
import { ModalComponent } from "@app/core/modal";
import { Button } from "@app/core";
import { Input, TextArea } from "@app/prep/modules-prep/core";
import { ModalData } from "@app/prep/pages-prep/winkel-single/dummy-data";
import { NewsletterComponent } from "@app/core/newsletter";

// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div>
    <NewsletterComponent />
  </div>
);

export { PlaygroundDanieleComponent };
